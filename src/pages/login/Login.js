import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
        <NavBar/>
        <div className="px-20 py-10">
            {
                localStorage.getItem("loggedIn") ? (
                <>
                    You are already loggedIn! <b className="bg-red-600 text-white px-4 py-2 rounded-xl font-bold mx-2" onClick={()=>{
                        localStorage.removeItem("loggedIn");
                        navigate("/");
                    }}>Logout</b>
                </>):
                (<>
                    <button className="bg-blue-600 text-white px-4 py-2 text-xl font-semibold rounded-xl"     onClick={
                        ()=>{ alert("You are Successfully Logged In!");
                            navigate("/",{replace:true});
                        localStorage.setItem("loggedIn",true);}}>Login
                    </button>
                </>)
            }
       
        </div>
        </>
        
    )
}
export default Login;