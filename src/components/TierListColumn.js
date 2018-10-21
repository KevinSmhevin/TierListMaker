import React from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import uuid from 'uuid';
import Competitor from './Competitor';


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
                                            key={uuid()} 
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