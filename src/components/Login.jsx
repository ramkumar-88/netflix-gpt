import Header from "./Header"
import {useState,useRef} from "react"
import {checkValidData} from "../utils/Validate"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (e)=>{
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    let message = checkValidData(email.current.value,password.current.value)
    //setErrorMessage(message);  
    //if(message) return;

    // Sign In Sign Up Logic
    if(!isSignInForm){
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name.current.value, photoURL: 
          "https://avatars.githubusercontent.com/u/63641431?v=4"
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            //dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate("/browse");
          }).catch((error) => {
            setErrorMessage(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "-"+ errorMessage);
        setErrorMessage(errorCode + "-"+ errorMessage);  

        // ..
      });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setErrorMessage(); 
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    // after validation i can do the Sign In / Sign Up
  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg" 
        alt=""/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="absolute p-12 bg-black w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm?"Sign In":"Sign Up"}
        </h1>
        {!isSignInForm && (
          <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>
        )}  
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-4 bg-red-700 w-full" onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm?"Already registered? Sign In Now":"New to Netflix? Sign Up Now"}
          </p>
      </form>
    </div>
  )
}

export default Login