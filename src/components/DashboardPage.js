import React from 'react';
import { NavLink } from 'react-router-dom';
import MyTierLists from './MyTierLists';

const DashboardPage = () => (
  <div>
    <NavLink to="/create">Create Tier List</NavLink>
    <MyTierLists />
  </div>

);

export default DashboardPage;
