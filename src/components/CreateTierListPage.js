import React from 'react';
import { connect } from 'react-redux';
import TierListCreateForm from './TierListCreateForm';
import { startCreateTierList } from '../actions/tierList';

export class CreateTierListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onSubmit = (tierList) => {
        this.props.startCreateTierList(tierList);
        this.props.history.push('/');
      };
    render() {
        return (
            <div>
                <TierListCreateForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    startCreateTierList: (tierList) => dispatch(startCreateTierList(tierList))
});

export default connect(undefined, mapDispatchToProps)(CreateTierListPage);
