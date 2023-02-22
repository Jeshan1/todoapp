
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthCheck from "../middleware/AuthCheck";

import NavBar from "../NavBar";

const AddPage = () => {
    const todoText = useRef();
    const history = useNavigate();

    // AuthCheck 
    AuthCheck();
    const addTodo = (e) => {
        e.preventDefault();
        const todostring = todoText.current.value;
        const initialtodo = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")):[];
        initialtodo.push(todostring);
        localStorage.setItem("todo",JSON.stringify(initialtodo));
        history("/");
    }
    return(
        <>
            <NavBar/>
            <div className="px-20 py-10">
                <h1 className="text-2xl font-bold text-blue-600 pb-5">Add To-Do: </h1>
                <form onSubmit={addTodo}>
                    <input type="text" ref={todoText} className="px-4 py-2 border-2 rounded-xl focus:outline-blue-600"/>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-xl mx-2 text-xl font-bold">Save Data</button>
                </form>
               
            </div>
        </>
    )
}
export default AddPage;