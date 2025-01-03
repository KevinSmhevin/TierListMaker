import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const GuestRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
  }) => (
    <Route {...rest} component={(props) => (
        <div>
          <Header />
          <Component {...props} />
        </div>
    )}   
    />
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
  });
  
  export default connect(mapStateToProps)(GuestRoute);
  