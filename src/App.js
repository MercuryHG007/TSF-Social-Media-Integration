import { useState } from 'react';

import {
  signInWithGoogle,
  signInWithGithub,
  UserLogOut
} from './Firebase'

import './App.css';

import {
  Card,
  Container,
  Button,
  Navbar
} from 'react-bootstrap'

import {
  FcGoogle
} from 'react-icons/fc'

import {
  ImGithub
} from 'react-icons/im'

import logo from "./assets/img/social-media.png"

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
      .then((result) => {
        handleSignInChanges(result)
        console.log(result)
      })
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
        <Navbar
          style={{
            height: "5vh",
            fontSize: "35px",
            padding: "15px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#92BA92",
            color: "black"
          }}
        >
          The Sparks Foundation
        </Navbar>

        <Container
          style={{
            display: "flex",
            minHeight: "82vh",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {(loggedIn) &&
            <Card
              style={{
                height: "60vh",
                width: "50vh",
                color: "#354259",
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: 'center',
                background: "#CDC2AE",
                boxShadow: "7px 7px 8px 3px black",
                borderRadius: "10px",
                padding: "10px"
              }}
            >

              <Card.Img
                src={image}
                height="150px"
                style={{
                  borderRadius: "50%",
                  marginBottom: "30px",
                  marginTop: "30px"
                }}
              />

              <Card.Title
                style={{
                  fontSize: "45px",
                  margin: "0"
                }}
              >
                {name}
              </Card.Title>

              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "30%"
                }}
              >

                <Card.Text
                  style={{
                    fontSize: "20px",
                    margin: "0",
                    marginBottom: "45px"
                  }}
                >
                  {email}
                </Card.Text>

                <Container
                  style={{
                    minHeight: "30%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <Button
                    style={{
                      height: "40px",
                      width: "55%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "20px",
                      border: "0",
                      borderRadius: '10px'
                    }}
                    className="buttons"
                    onClick={handleSignOutChanges}
                  >
                    Sign Out
                  </Button>
                </Container>
              </Card.Body>
            </Card>
          }

          {(!loggedIn) &&
            <Card
              style={{
                height: "55vh",
                width: "40vh",
                color: "#354259",
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: 'center',
                background: "#CDC2AE",
                boxShadow: "7px 7px 8px 3px black",
                borderRadius: "10px",
                padding: "10px"
              }}
            >

              <Card.Img
                src={logo}
                height="50px"
                style={{
                  marginBottom: "10px"
                }}
              />

              <Card.Title
                style={{
                  fontSize: "40px",
                  margin: "0"
                }}
              >
                SIGN IN
              </Card.Title>

              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "40%"
                }}
              >

                <Card.Text
                  style={{
                    fontSize: "20px",
                    margin: "0",
                    marginBottom: "45px"
                  }}
                >
                  Just a Sign Up Page
                </Card.Text>

                <Container
                  style={{
                    minHeight: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <Button
                    style={{
                      height: "33px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "15px",
                      border: "0",
                      borderRadius: '10px'
                    }}
                    className="buttons"
                    onClick={handleOnGoogle}
                  >
                    Sign in with <FcGoogle size={25} style={{ marginLeft: "5px" }} />
                  </Button>

                  <Button
                    style={{
                      height: "33px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "15px",
                      border: "0",
                      borderRadius: '10px'
                    }}
                    className="buttons"
                    onClick={handleOnGithub}
                  >
                    Sign in with <ImGithub size={25} style={{ marginLeft: "5px" }} />
                  </Button>
                </Container>
              </Card.Body>
            </Card>
          }
        </Container>

        <Navbar
          style={{
            bottom: "0",
            height: "5vh",
            fontSize: "15px",
            padding: "15px 0px",
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
            background: "#92BA92",
            color: "black"
          }}
        >
          <p style={{fontSize: "20px"}}>
            Social Media Integration
          </p>
          <p>
            Made By: 
            <a 
              href='https://www.linkedin.com/in/harshitgarg-mercuryhg007/' 
              target="_blank" 
              rel="noreferrer" 
              style={{
                marginLeft: "5px",
                fontWeight: "800",
                textDecoration: "none",
                color: "black"
              }} 
            >
              Harshit Garg
            </a>
          </p>
        </Navbar>

      </header>
    </div>
  );
}

export default App;
