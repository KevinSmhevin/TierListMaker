import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout, startLogin, startAnonLogin } from '../actions/auth';

export const Header = ({ isAuthenticated, startLogout, startAnonLogin, startLogin, auth }) => (
  isAuthenticated ? (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1><i className="fas fa-list-alt"></i> Tier List Maker</h1>
        </Link>
        <div>
        {/* <p>Logged in as: {auth.displayName}</p> */}
        <button className="nav button" onClick={startLogout}> <i className="fas fa-sign-out-alt"></i> Logout</button>
        </div>
      </div>
    </div>
  </header>
  ) : (
    <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1><i className="fas fa-list-alt"></i> Tier List Maker</h1>
        </Link>
        <button className="nav button" onClick={startLogin}> <i className="fas fa-sign-in-alt"></i> Login</button>
        <button className="nav button" onClick={startAnonLogin}> <i className="fas fa-sign-in-alt"></i>Test Login</button>
      </div>
    </div>
  </header>
  )
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
  startLogin: () => dispatch(startLogin()),
  startAnonLogin: () => dispatch(startAnonLogin())
});

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
  auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
