/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';
import './App.css';
import Fire from './fire';
import Login from './Login';
import Home from './Home';


const App =()=> {
  const[user, setUser] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[emailError, setEmailError] = useState('');
  const[passwordError, setPasswordError] = useState('');
  const[hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    Fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err=> {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break
        }
      });
  }

  const handleSignup = () => {
    clearErrors();
    Fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err=> {
      switch (err.code) {
        case "auth/email-already-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break
      }
    });
  }

  const handleLogout = () => {
    Fire
    .auth()
    .signOut();
  }

  // check if user exist
  const authListener = () => {
    Fire
    .auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect( ()=> {
    authListener();
  }, []);

  return (
    <div className="App">
      {user ? (
        <Home handleLogout={handleLogout}></Home>
      ):
      (
        <Login 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword}
          handleSignup={handleSignup}
          handleLogin={handleLogin}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;
