import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import UserProfile from './Components/UserProfile';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user:null
    };
  }
  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({user});
    });
  }

  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} logged in`))
    .catch(error => console.log(`Error: ${error.code}: ${error.message}`));
  }

  handleLogout (){
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} loggedOut`))
    .catch(error => console.log(`Error: ${error.code}: ${error.message}`));
  } 


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserProfile user = {this.state.user} handleAuth = {this.handleAuth.bind(this)} handleLogout = {this.handleLogout.bind(this)} />
        </header>        
      </div>
    );
  }
}

export default App;
