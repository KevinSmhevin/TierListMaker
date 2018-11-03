import React from 'react';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import CombinedList from './CombinedList';

const LandingPage = () => (
  <div>
    <Header />
    <NavLink to="/getting-started" className="getting-started create side button"><i class="fas fa-question-circle"></i> Getting Started</NavLink>
    <CombinedList />
  </div>
);

export default LandingPage;
