import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CombinedList from './CombinedList';
import { startGetAllMyTierList, startGetAllMyUserTierList } from '../actions/tierList'

export class DashboardPage extends React.Component {
  onClick = () => {
    this.props.startGetAllMyTierList();
    this.props.startGetAllMyUserTierList();
  }
  render() {
    return (  
      <div>
        <NavLink to="/create" className="create side button"> <i className="fas fa-plus-circle"></i> Create Tier List</NavLink>
        <NavLink to="/getting-started" className="create side button"><i className="fas fa-question-circle"></i> Getting Started</NavLink>
          <CombinedList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      tierLists: state.tierList,
      userTierList: state.userTierList,
  }
}

const mapDispatchToProps = (dispatch) => ({
  startGetAllMyTierList: () => dispatch(startGetAllMyTierList()),
  startGetAllMyUserTierList: () => dispatch(startGetAllMyUserTierList())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
