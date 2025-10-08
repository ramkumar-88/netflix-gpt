import { onAuthStateChanged,signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import {useNavigate} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {useEffect} from "react"
import {addUser,removeUser} from "../utils/userSlice"
import {LOGO} from "../utils/constants"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store=>store.user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  // if the user is logged in or singed up the user details should update
  //into store or when the user is logged out the user must remove from the store
  // onAuthStateChanged from the google firebase web app
    
  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(user)=>{
          if(user){
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
              navigate("/browse");
          } else {
              dispatch(removeUser());
              navigate("/");
          }
      })
      // Unssubscribe when component unmounts
      return ()=> unsubscribe();
  },[]);

  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" src={LOGO}
        alt="logo">
        </img>
        {user &&
        (<div className="flex">
          <img className="w-12 h-12"
          alt="user Icon"
          src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
        </div>)}
    </div>
  )
}

export default Header