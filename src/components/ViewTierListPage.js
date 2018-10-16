import React from 'react';
import { connect } from 'react-redux';
import { startRemoveTierList, startUpdateTierList } from '../actions/tierList';

export class ViewTierListPage extends React.Component {
    onTierListEdit = () => {
        this.props.history.push(`/edit/${this.props.tierList.id}`);
    }
    onRemoveTierList = () => {
        if (this.props.auth.uid === this.props.tierList.userId) {
            this.props.startRemoveTierList(this.props.tierList.id);
            this.props.history.push('/');
        }
    }
    onUpdateTierList = () => {
        this.props.history.push(`/update/${this.props.tierList.id}`);
    }
    render() {
        let competitorFields = [];
        const competitors = this.props.tierList.listOfCompetitors
        for (let keys in competitors) {
            competitorFields.push(<p key={keys}>{keys}: {competitors[keys]}</p>)
        }
        return (
            <div>
                <h2>{this.props.tierList.title}</h2>
                <p>{this.props.tierList.description}</p>
                {competitorFields}
                <button onClick={this.onUpdateTierList}>Update Tier List</button>
                <button onClick={this.onTierListEdit}>Edit Tier List</button>
                <button onClick={this.onRemoveTierList}>Remove Tier List</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    tierList: state.tierList.find((tierList) => {
    return tierList.id === props.match.params.id
    }),
    auth: state.auth 
});

const mapDispatchToProps = (dispatch, props) => ({
    startUpdateTierList: (id, updates) => dispatch(startUpdateTierList(id, updates)),
    startRemoveTierList: (data) => dispatch(startRemoveTierList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewTierListPage)