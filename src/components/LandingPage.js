import React from 'react';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import CombinedList from './CombinedList';
import { GettingStartedPage } from './GettingStartedPage';


// const LandingPage = () => (
//   <div>
//     <Header />
//     <NavLink to="/getting-started" className="getting-started create side button"><i className="fas fa-question-circle"></i> Getting Started</NavLink>
//     <CombinedList />
//   </div>
// );

// export default LandingPage;

export default class LandingPage extends React.Component {
  constructor() {
            super();
            this.state = {
                modalIsOpen: true,
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
  render() {
    return (
    <div>
    <Header />
    <button className="create side button" onClick={this.openModal}><i className="fas fa-question-circle"></i>Getting Started</button>
    <CombinedList />
    <GettingStartedPage modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal}/>
    </div>
  )
  } 
}