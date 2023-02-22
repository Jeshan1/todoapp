import NavBar from "../NavBar";
import {FaRegEye} from "react-icons/fa"
import { Link } from "react-router-dom";

const MainPage = () => {
    const getTodo = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")):[];
    return(
        <>
            <NavBar/>
            <div className="px-20 py-10">
                <h1 className="text-2xl font-bold pb-5">Your To-Do: </h1>
                {
                    getTodo && getTodo.length >0 ?(
                        <>
                            {getTodo.map((el,index)=>(
                        <>
                            <div className="bg-gray-400 px-4 py-4 my-2 rounded-xl flex justify-between">
                                <div className="text-xl font-semibold">{el}</div>
                                <div>
                                    <Link to={`view/${index}`}>
                                        <FaRegEye className="text-3xl"/>
                                    </Link>
                                </div>
                            </div>
                        </>
                ))}
                        </>
                    ):(
                        <>
                        <center>
                            {" "}
                             Nothing on your to-do. Please <Link to="/addtodo">Add some</Link>
                            </center></>
                    )
                }
            </div>         
        </>
    )
}
export default MainPage;