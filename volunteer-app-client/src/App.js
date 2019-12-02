import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './components/dashboard/dashboard';
import TopNav from './components/layout/TopNav';
import { connect } from "react-redux";

function App() {
  const [ users, setUsers ] = useState([])
  const [ events, setEvents ] = useState([])
  const [ userEvents, setUserEvents ] = useState()

  useEffect(() => {
    // set up app local store
  }, [])

  return (
    <div>
      <TopNav />
      <Dashboard />
    </div>
  );
}

export default connect()(App);
