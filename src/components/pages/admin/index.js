import React from 'react';
import User from './user';
import Dashboard from './dashboard';
import { Route } from 'react-router-dom';

export default function Admin() {
    return (
        <>
          <Route exact path="/admin" component={Dashboard} />
          <Route exact path="/admin/user" component={User} />
        </>
    );
}