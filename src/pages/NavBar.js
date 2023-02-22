import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="flex justify-between bg-green-400 px-20 py-5 text-black font-bold">
                <div>
                    <h1 className="text-2xl cursor-pointer">TodoApp</h1>
                </div>
                <div>
                    <ul>
                        <li className="inline-block mx-4 text-xl cursor-pointer"><NavLink to={"/"}>Home</NavLink></li>
                        <li className="inline-block mx-4 text-xl cursor-pointer"><NavLink to={"/login"}>Login</NavLink></li>
                        <li className="inline-block mx-4 text-xl cursor-pointer"><NavLink to={"/addtodo"}>Add Todo</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default NavBar;