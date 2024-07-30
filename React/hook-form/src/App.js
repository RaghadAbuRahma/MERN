import './App.css';
import DisplayInfo from './components/DisplayInfo';
import UserForm from './components/UserForm';
import React, { useState } from  'react';

function App() {
  const [user, setUser] = useState({firstname:"",lastname:"",email:"",password:"",confirmPassword:""});

  const newUser = (user) => {
    setUser(user)
  }
  return (
    <div className="App">
      <UserForm setUser={newUser}></UserForm>
      <DisplayInfo user={user}></DisplayInfo>
    </div>
  );
}

export default App;
