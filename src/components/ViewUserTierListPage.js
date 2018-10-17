import React from 'react';
import { connect } from 'react-redux';
import { startRemoveUserTierList } from '../actions/tierList';
import { DragDropContext } from 'react-beautiful-dnd';
import { TierListColumn }  from './TierListColumn';
import styled from 'styled-components';
import { startCreateUserTierList, startUpdateUserTierList } from '../actions/tierList';

const Container = styled.div`
dislay: flex;
`

export class ViewUserTierListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...props.userTierList};
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
            this.props.startUpdateUserTierList(this.state.id, updates)
            // this.props.startCreateUserTierList(updates)
        } else {
            this.props.startCreateUserTierList(updates)
        }
        this.props.history.push('/')
    }
    onUserTierListEdit = () => {
        this.props.history.push(`/edit/${this.props.userTierList.tierListId}`)
    }
    onRemoveUserTierList = () => {
        if (this.props.auth.uid === this.props.userTierList.userId) {
            this.props.startRemoveUserTierList(this.props.userTierList.id)
            this.props.history.push('/')
        }
    }
    render() {
        let competitorFields = [];
        const competitors = this.props.userTierList.listOfCompetitors
        for (let keys in competitors) {
            competitorFields.push(<p key={keys}>{keys}: {competitors[keys]}</p>)
        }
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
                <button>Save Changes</button>
            </form>
            <button onClick={this.onRemoveUserTierList}>Delete Tierlist</button>
            </Container>
            </DragDropContext>
        )
    }
}

const mapStateToProps = (state, props) => ({
    userTierList: state.userTierList.find((userTierList) => {
    return userTierList.id === props.match.params.id
    }),
    auth: state.auth
});

const mapDispatchToProps = (dispatch, props) => ({
    startRemoveUserTierList: (data) => dispatch(startRemoveUserTierList(data)),
    startCreateUserTierList: (userTierList) => dispatch(startCreateUserTierList(userTierList)),
    startUpdateUserTierList: (id, updates) => dispatch(startUpdateUserTierList(id, updates)),
    startRemoveUserTierList: (data) => dispatch(startRemoveUserTierList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewUserTierListPage)