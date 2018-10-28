import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { TierListColumn }  from './TierListColumn';
import { startCreateUserTierList, startUpdateUserTierList } from '../actions/tierList';

const Container = styled.div`
    color: #374744;
    display: flex;
`

export class UseTierListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...props.tierList};
    }
    onDragStart = () => {
        document.body.style.color = 'blue';
    }

    onDragEnd = result => {
        document.body.style.color = 'black';
        const { destination, source , draggableId } = result;
        if (!destination) {
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }
        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId]  
        if (start === finish) {
            const newCompetitorIds = Array.from(start.competitorIds);
            newCompetitorIds.splice(source.index, 1);
            newCompetitorIds.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...start,
                competitorIds: newCompetitorIds,
            };
            const newTierList = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                },
            };
            this.setState(newTierList)
            return;
        }
        const startCompetitorIds = Array.from(start.competitorIds);
        startCompetitorIds.splice(source.index, 1);
        const newStart = {
            ...start,
            competitorIds: startCompetitorIds,
        }
        const finishCompetitorIds = Array.from(finish.competitorIds)
        finishCompetitorIds.splice(destination.index, 0, draggableId)
        const newFinish = {
            ...finish,
            competitorIds: finishCompetitorIds,
        };
        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };

        this.setState(newState);
        return;
    };
    onSubmit = (e) => {
        e.preventDefault();

        const updates = {
            title: this.state.title,
            columnOrder: this.state.columnOrder,
            columns: this.state.columns,
            description: this.state.description,
            listOfCompetitors: this.state.listOfCompetitors,
            tierListId: this.state.id
        }
        if (this.props.userTierList) {
            this.props.startUpdateUserTierList(updates)
        } else {
            this.props.startCreateUserTierList(updates)
        }
        this.props.history.push('/')
    }
    render() {
        console.log(this.state)
        return (
            <DragDropContext 
                onDragEnd={this.onDragEnd}
                onDragStart={this.onDragStart}
            >
                <Container>
                    <form onSubmit={this.onSubmit}>
                        {this.state.columnOrder.map(columnId => {
                            const column = this.state.columns[columnId];
                            const competitor = column.competitorIds.map((competitorId) => {
                                for (let keys in this.listOfCompetitors) {
                                const competitorId = keys;
                                }
                                return competitorId
                            })
                            return (<TierListColumn key={column.id} column={column} competitors={competitor} tierList={this.state} />);
                        })}
                        <button className="user button">Save Tier List</button>
                    </form>
                </Container>
            </DragDropContext>
        )
    }
}


const mapStateToProps = (state, props) => {
    const uid = state.auth.uid
    return {
        tierList: state.tierList.find((tierList) => tierList.id === props.match.params.id),
        userTierList: state.userTierList.find((userTierList) => {
            if ((userTierList.tierListid === props.match.params.id || userTierList.id === props.match.params.id ) 
                && userTierList.userId === uid) {
                    return userTierList
            }
        })
    };
}
const mapDispatchToProps = (dispatch) => ({
    startCreateUserTierList: (userTierList) => dispatch(startCreateUserTierList(userTierList)),
    startUpdateUserTierList: (id, updates) => dispatch(startUpdateUserTierList(id, updates))
})

export default connect(mapStateToProps, mapDispatchToProps)(UseTierListPage)


