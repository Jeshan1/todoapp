import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import AddPage from "../pages/addTodo/Addpage";
import Login from "../pages/login/Login";
import MainPage from "../pages/mainPage/MainPage";
import Notfound from "../pages/Notfound/Notfound";
import ViewPage from "../viewpage/ViewPage";

const Router = () => {
    return(
        <>
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}></Route>
            <Route path="/home" element={<MainPage/>} ></Route>    
            <Route path="/addtodo" element={<AddPage/>}/>
            <Route path="/login" element={<Login/>} exact></Route>
            <Route path="/view/:id" element={<ViewPage/>} exact></Route>         
            <Route path="*" element={<Notfound/>} exact></Route>         
        </Routes>
        </BrowserRouter>
        
       
        </>
    )
   
}
export default Router;