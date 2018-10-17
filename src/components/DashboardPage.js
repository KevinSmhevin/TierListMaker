import React from 'react';
import { NavLink } from 'react-router-dom';
import CombinedList from './CombinedList';

const DashboardPage = () => (
  <div>
    <NavLink to="/create" className="side button">Create A Tier List Template!</NavLink>
    <button className="side button">View My TierLists</button>
    <CombinedList />
  </div>

);

export default DashboardPage;
