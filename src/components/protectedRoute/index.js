import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { userService } from '../../services/UserService';

export default function ProtectedRoute({ component: Component, ...rest }) {
    return <Route {...rest} render={(props) => (
        userService.isLogged()
          ? <Component {...props} />
          : <Redirect to='/' />
      )} />;
}