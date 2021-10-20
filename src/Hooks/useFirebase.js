import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,GithubAuthProvider,createUserWithEmailAndPassword ,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.initialize";



initializeAuthentication()
const useFirebase = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const auth = getAuth();
// email password sign in
const toggleLogin = e => {
setIsLogin(e.target.checked);
}

const handleNameChange = e => {
setName(e.target.value);
}

const handleEmailChange = e => {
setEmail(e.target.value);
}

const handlePasswordChange = e => {
    setPassword(e.target.value);
}
const handleLogin = e => {
    e.preventDefault();
    console.log(email,password);
    if (password.length < 6) {
        setError('Password must be at least 6 characters')
        return;
      }
      if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        setError('Password Must contain 2 upper case');
        return;
      }
  
    isLogin ? processLogin(email,password) : registerNewUser(email,password) 
    
}

const processLogin = (email,password) => {
signInWithEmailAndPassword(auth,email,password)
.then(result=>{
    const user = result.user;
    console.log(user);
    setError('');
})
.catch(error=>{
    setError(error.message)
})
}

const registerNewUser = (email,password) => {
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user = result.user;
        const info = {...user,displayName:name}
        setUser(info);
        console.log(user);
        setError('');
        verifyEmail();
        setUserName();
    })
    .catch(error=>{
        setError(error.message)
    })
}
const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(result=>{
        console.log(result)
    })
}

const setUserName = () => {
updateProfile(auth.currentUser,{displayName:name})
}

const handleResetPassword = () => {
sendPasswordResetEmail(auth,email)
.then(result=>{})
}
    //  google sign in
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
    return   signInWithPopup(auth,googleProvider)
      .then(result=>{
          console.log(result.user);
          setUser(result.user)
          
      })
      
      .catch(error=>{
          setError(error.message)
      })
      .finally(()=>setIsLoading(false));
    }

    const signInUsingGitHub = () => {
        signInWithPopup (auth,gitHubProvider)
        .then(result=>{
            console.log(result.user);
            setUser(result.user);
        })
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({});
        })
        .finally(()=>setIsLoading(false));
    }
    
    useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth,user=>{
            if(user){
                console.log('inside state change', user);
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[])
   return {
       user,
       isLoading,
       error,
signInUsingGoogle,
signInUsingGitHub,
logOut,
handleLogin,
handleEmailChange,
handlePasswordChange,
toggleLogin,
isLogin,
handleResetPassword,
handleNameChange,
setUserName
   }
}
export default useFirebase;