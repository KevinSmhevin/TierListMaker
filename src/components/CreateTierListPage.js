import React from 'react';
import { connect } from 'react-redux';
import TierListCreateForm from './TierListCreateForm';
import { startCreateTierList } from '../actions/tierList';

export class CreateTierListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onCreatePowerRanking = (e) => {
        this.setState(() => ({ formType: 'Power Ranking'}))
    }
    onCreateTierList = (e) => {
       this.setState(() => ({ formType: 'Tier List'}))
    }
    onSubmit = (tierList) => {
        this.props.startCreateTierList(tierList);
        this.props.history.push('/');
      };
    render() {
        const formType = this.state.formType;
        let createForm;
        if (formType === 'Tier List') {
            createForm = <TierListCreateForm onSubmit={this.onSubmit}/>
        }
        return (
            <div>
                <button onClick={this.onCreateTierList}>Create Tier List</button>
                {createForm}
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    startCreateTierList: (tierList) => dispatch(startCreateTierList(tierList))
});

export default connect(undefined, mapDispatchToProps)(CreateTierListPage);
