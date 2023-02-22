import { useNavigate } from "react-router-dom";

const AuthCheck = () => {
    const navigate = useNavigate();
   if(localStorage.getItem("loggedIn")){
    //Do nothing
   }
   else{
        navigate("/login",{replace:true});
   }

    // localStorage.getItem("loggedIn") && navigate("/login",{replace:true});
}

export default AuthCheck;