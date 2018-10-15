import React from 'react';
import { connect } from 'react-redux';
import { startRemoveUserTierList } from '../actions/tierList';

export class ViewUserTierListPage extends React.Component {
    onUserTierListEdit = () => {
        this.props.history.push(`/edit/${this.props.userTierList.tierListId}`)
    }
    onRemoveUserTierList = () => {
        console.log(this.props)
        if (this.props.auth.uid === this.props.userTierList.userId) {
            this.props.startRemoveUserTierList({ id: this.props.userTierList.id })
            this.props.history.push('/')
        }
    }
    render() {
        console.log(this.props)
        let competitorFields = [];
        const competitors = this.props.userTierList.listOfCompetitors
        for (let keys in competitors) {
            competitorFields.push(<p key={keys}>{keys}: {competitors[keys]}</p>)
        }
        return (
            <div>
                <h2>{this.props.userTierList.title}</h2>
                <p>{this.props.userTierList.description}</p>
                {competitorFields}
                <button onClick={this.onUserTierListEdit}>Edit Tier List</button>
                <button onClick={this.onRemoveUserTierList}>Remove Your Tier List</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    userTierList: state.userTierList.find((userTierList) => {
    return userTierList.tierListId === props.match.params.id
    }),
    auth: state.auth
});

const mapDispatchToProps = (dispatch, props) => ({
    startRemoveUserTierList: (data) => dispatch(startRemoveUserTierList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewUserTierListPage)