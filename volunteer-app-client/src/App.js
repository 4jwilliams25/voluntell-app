import React, { useEffect } from 'react';
import Dashboard from './components/dashboard/dashboard';
import TopNav from './components/layout/TopNav';
import { connect, useDispatch } from "react-redux";
import { getUsers } from './store/users/actions';
import { getEvents } from './store/events/actions';
import { getUserEvents } from './store/user-events/actions';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getEvents());
    dispatch(getUserEvents());
  }, [dispatch])


  return (
    <Router>
      <div>
        <TopNav />
        <Dashboard />
      </div>
    </Router>
  );
}

export default connect()(App);
