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
            competitorFields.push(<p className="view-competitor" key={keys}>{competitors[keys]}</p>)
        }
        return (
            <div className="container view-tier-list-container">
                <section className="header-container">
                    <h2 className="view-tier-list-title">{this.props.tierList.title}</h2>
                    <p className="view-tier-list-description">{this.props.tierList.description}</p>
                </section>
                <section className="competitor-container">
                {competitorFields}
                </section>
                <section className="button-container">
                    <button className="view-button button" onClick={this.onUpdateTierList}>Update Tier List</button>
                    <button className="view-button button" onClick={this.onTierListEdit}>Edit Tier List</button>
                    <button className="view-button button" onClick={this.onRemoveTierList}>Remove Tier List</button>
                </section>
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