import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './components/dashboard/dashboard';
import TopNav from './components/layout/TopNav';

function App() {
  const [ users, setUsers ] = useState([])
  console.log("USERS:", users)

  useEffect(() => {
    axios.get('http://localhost:8000/users').then(res => setUsers(res.data))
  }, [])

  return (
    <div>
      <TopNav />
      <Dashboard />
    </div>
  );
}

export default App;
