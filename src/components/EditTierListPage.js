import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { TierListColumn }  from './TierListColumn';

export class EditTierListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...props.tierList}
    }
    onDragEnd = result => {
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
        console.log(this.state)
        console.log(this.props)
        const column = this.props.column[source.droppableId];
        console.log(column)
        const newCompetitorIds = Array.from(column.competitorIds);
        newCompetitorIds.splice(source.index, 1);
        newCompetitorIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            competitorIds: newCompetitorIds,
        };

        const newTierList = {
            ...this.props,
            columns: {
                ...this.props.tierList.columns,
                [newColumn.id]: newColumn,
            },
        };

        this.setState(newTierList)
    };
    render() {
        console.log(this.state)
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                {this.props.tierList.columnOrder.map(columnId => {
                    const column = this.props.tierList.columns[columnId];
                    const competitor = column.competitorIds.map((competitorId) => {
                        for (let keys in this.props.tierList.listOfCompetitors) {
                        const competitorId = keys;
                        }
                        return competitorId
                    })
                    return (<TierListColumn key={column.id} column={column} competitors={competitor} tierList={this.props.tierList} />);
                })}
            </DragDropContext>
        )
    }
}


const mapStateToProps = (state, props) => ({
    tierList: state.tierList.find((tierList) => tierList.id === props.match.params.id)
});


export default connect(mapStateToProps)(EditTierListPage)



// let competitorFields = [];
// const competitors = this.props.tierList.listOfCompetitors
// for (let keys in competitors) {
//     competitorFields.push(<p className="tier-box-row-container" key={keys}>{keys}: {competitors[keys]}</p>)
// }
// return (
//     <div className="tier-box-overall-container">
//         <h2>{this.props.tierList.title}</h2>
//         <p>{this.props.tierList.description}</p>
//         <div className="tier-box-drag-drop-container">
//             <div className="tier-box-column-container">
//                 <section className="tier-box-row-container">S</section>
//                 <section className="tier-box-row-container">A</section>
//                 <section className="tier-box-row-container">B</section>
//                 <section className="tier-box-row-container">C</section>
//                 <section className="tier-box-row-container">D</section>
//                 <section className="tier-box-row-container">E</section>
//                 <section className="tier-box-row-container">F</section>
//             </div>
//             <div className="tier-box-column-container">
//                 {competitorFields}
//             </div>
//         </div>
//     </div>
// )