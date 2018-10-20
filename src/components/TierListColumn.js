import React from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Competitor from './Competitor';

// const Container = styled.div`
// margin: 8px;
// border: 1px solid lightgrey;
// border-radius: 2px;
// width: 75%;
// display: flex;
// `;
// const Title = styled.h3`
// padding: 8px
// `;
// const CompetitorList = styled.div`
// padding: 8px;
// display: flex;
// flex-direction: row;
// width: 100%;
// `;


export class TierListColumn extends React.Component {
    render() {
        return (
            <div className="column-container">
                <h3 className="column-title">{this.props.column.title}</h3>
                <Droppable droppableId={this.props.column.id} direction="horizontal">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isdraggingover={snapshot.isDraggingOver.toString()}
                            className="competitor-list"
                        >
                            {this.props.competitors.map((competitor, index) => {
                                const competitorId = parseInt(competitor)
                                return <Competitor 
                                            key={competitorId} 
                                            id={competitorId}
                                            tierList={this.props.tierList} 
                                            competitor={this.props.tierList.listOfCompetitors[competitorId]} 
                                            index={index}
                                        />
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    tierList: state.tierList.find((tierList) => tierList.id === props.matchId)
});

export default connect(mapStateToProps)(TierListColumn)