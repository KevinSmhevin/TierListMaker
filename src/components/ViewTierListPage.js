import React from 'react';
import { connect } from 'react-redux';

export class ViewTierListPage extends React.Component {
    onTierListEdit = () => {
        this.props.history.push(`/edit/${this.props.tierList.id}`)
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
                <button onClick={this.onTierListEdit}>Edit Tier List</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    tierList: state.tierList.find((tierList) => {
    return tierList.id === props.match.params.id
    })
});

export default connect(mapStateToProps)(ViewTierListPage)