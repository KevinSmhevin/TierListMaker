import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CombinedList from './CombinedList';
import { startGetAllMyTierList, startGetAllMyUserTierList } from '../actions/tierList'
import { GettingStartedPage } from './GettingStartedPage';

export class DashboardPage extends React.Component {
  constructor() {
    super();
    this.state = {
        modalIsOpen: false,
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this)
}
closeModal() {
    this.setState({modalIsOpen: false});
}
openModal() {
  this.setState({modalIsOpen: true})
}
  onClick = () => {
    this.props.startGetAllMyTierList();
    this.props.startGetAllMyUserTierList();
  }
  render() {
    return (  
      <div>
        <NavLink to="/create" className="create side button"> <i className="fas fa-plus-circle"></i> Create Tier List</NavLink>
        <button className="create side button" onClick={this.openModal}><i className="fas fa-question-circle"></i> Help</button>
          <CombinedList />
          <GettingStartedPage modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal}/>
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
