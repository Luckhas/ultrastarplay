import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { userService } from '../../services/UserService';

export default function AdminRoute({ component: Component, ...rest }) {
    return <Route {...rest} render={(props) => (
        userService.isAdmin()
          ? <Component {...props} />
          : <Redirect to='/' />
      )} />;
}