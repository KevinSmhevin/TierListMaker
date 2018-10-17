import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CombinedList from './CombinedList';

const DashboardPage = () => (
  <div>
    <NavLink to="/create">Create A Tier List Template!</NavLink>
    <CombinedList />
  </div>

);

export default DashboardPage;