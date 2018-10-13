import React from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Competitor from './Competitor';

const Container = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
`;
const Title = styled.h3`
padding: 8px
`;
const CompetitorList = styled.div`
padding: 8px;
`;


export class TierListColumn extends React.Component {
    render() {
        console.log(this.props)
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {provided => (
                        <CompetitorList
                            innerRef={provided.innerRef}
                            {...provided.droppableProps}
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
                        </CompetitorList>
                    )}
                </Droppable>
            </Container>
        )
    }
}

const mapStateToProps = (state, props) => ({
    tierList: state.tierList.find((tierList) => tierList.id === props.matchId)
});

export default connect(mapStateToProps)(TierListColumn)