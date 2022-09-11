import { useState } from 'react';
import './App.css';
import logo from "./assets/img/social-media.png"
import {
  signInWithGoogle,
  signInWithGithub,
  UserLogOut
} from './Firebase'


function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const handleSignInChanges = (val) => {
    setLoggedIn(true)
    setName(val.user.displayName)
    setEmail(val.user.email)
    setImage(val.user.photoURL)
  }

  const handleSignOutChanges = () => {
    UserLogOut()
    setLoggedIn(false)
    setName('')
    setEmail('')
    setImage('')
  }

  const handleOnGoogle = () => {
    signInWithGoogle()
    .then((result) => handleSignInChanges(result))
    .catch((err) => {
      console.log(err)
    })
  }

  const handleOnGithub = () => {
    signInWithGithub()
    .then((result) => handleSignInChanges(result))
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={handleOnGoogle}
        >
          Sign in with Google
        </button>
        <button
          onClick={handleOnGithub}
        >
          Sign in with Github
        </button>

        {(loggedIn) && 
          <div>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <img src={image} alt="usrImage"/>
            <button onClick={handleSignOutChanges} ></button>
          </div>
        }
        {(!loggedIn) && 
          <div>
            <h1>
              User not Signed In
            </h1>
          </div>
        }
      </header>
    </div>
  );
}

export default App;
