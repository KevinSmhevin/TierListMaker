import React from 'react';
import { connect } from 'react-redux';

export class ViewUserTierListPage extends React.Component {
    onUserTierListEdit = () => {
        this.props.history.push(`/edit/${this.props.userTierList.tierListId}`)
    }
    render() {
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
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    userTierList: state.userTierList.find((userTierList) => {
    return userTierList.tierListId === props.match.params.id
    })
});

export default connect(mapStateToProps)(ViewUserTierListPage)