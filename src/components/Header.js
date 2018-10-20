import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { startLogout, startLogin } from '../actions/auth';

export const Header = ({ isAuthenticated, startLogout, startLogin }) => (
  isAuthenticated ? (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Tier List Maker</h1>
        </Link>
        <button className="nav button" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
  ) : (
    <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Tier List Maker</h1>
        </Link>
        <button className="nav button" onClick={startLogin}>Login</button>
      </div>
    </div>
  </header>
  )
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
  startLogin: () => dispatch(startLogin()),
});

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
