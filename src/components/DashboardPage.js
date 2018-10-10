import React from 'react';
import { NavLink } from 'react-router-dom';
import MyTierLists from './MyTierLists';
import SearchTierLists from './SearchTierLists'
import { TierListFilter } from './TierListFilter';

const DashboardPage = () => (
  <div>
    <SearchTierLists />
    <TierListFilter />
    <NavLink to="/create">Create Tier List</NavLink>
    <MyTierLists />
  </div>

);

export default DashboardPage;
