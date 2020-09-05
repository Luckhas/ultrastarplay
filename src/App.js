import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Public from './components/pages/public';
import Admin from './components/pages/admin';
import ProtectedRoute from './components/protectedRoute';
import { userService } from './services/UserService';
import Backoffice from './components/pages/backoffice';
import AdminRoute from './components/adminRoute';

// my components

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    await userService.getMe();

    setLoading(false);
  }, []);

  if (loading) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <AdminRoute path="/backoffice" component={Backoffice} />
          <ProtectedRoute path="/admin" component={Admin} />
          <Route path="/" component={Public} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;