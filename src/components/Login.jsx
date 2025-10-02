import Header from "./Header"
import {useState} from "react"

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
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
      <form className="absolute p-12 bg-black w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm?"Sign In":"Sign Up"}
        </h1>
        {!isSignInForm && (
          <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>
        )}  
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
        <button className="p-4 my-4 bg-red-700 w-full">{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm?"Already registered? Sign In Now":"New to Netflix? Sign Up Now"}
          </p>
      </form>
    </div>
  )
}

export default Login