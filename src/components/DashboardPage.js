import React from 'react';
import { NavLink } from 'react-router-dom';
import MyTierLists from './MyTierLists';
import SearchTierLists from './SearchTierLists'

const DashboardPage = () => (
  <div>
    <SearchTierLists />
    <NavLink to="/create">Create Tier List</NavLink>
    <MyTierLists />
  </div>

);

export default DashboardPage;
