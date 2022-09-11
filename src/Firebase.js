import { initializeApp } from "firebase/app"

import { 
    getAuth, 
    GithubAuthProvider, 
    GoogleAuthProvider, 
    signInWithPopup 
} from 'firebase/auth'

const firebaseConfig = {    
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    appId: process.env.REACT_APP_APP_ID
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

const GoogleProvider = new GoogleAuthProvider()
const GithubProvider = new GithubAuthProvider()

export const signInWithGoogle = () => signInWithPopup(auth, GoogleProvider)
export const signInWithGithub = () => signInWithPopup(auth, GithubProvider)

export const UserLogOut = () => auth.signOut()

// export const signInWithGoogle = () => {
//     signInWithPopup(auth, GoogleProvider)
//     .then((result) => {
//         console.log(result)
//         const name = result.user.displayName
//         const email = result.user.email
//         const profilePic = result.user.photoURL
//     })
//     .catch((err) => {
//         console.log((err))
//     })
// }

// export const signInWithGithub = () => {
//     signInWithPopup(auth, GithubProvider)
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log((err))
//     })
// }


