import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../pages/NavBar";

const ViewPage = () => {
    const history = useNavigate();
    const getParams = useParams();
    const getId = getParams.id;
    const getStorage = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")):[];
    const getData = getStorage[getId];

    const Delete = () => {
        getStorage.splice(getId,1);
        localStorage.setItem("todo",JSON.stringify(getStorage));
        history("/",{replace:true});
    }
    
    return (
        <>
           <NavBar/>
           <div className="px-20 py-10">
                <button onClick={()=>{
                    history("/");
                }} className="bg-slate-300 text-black px-4 py-2 rounded-xl font-bold text-xl">Go Back</button>
           
            <div className="bg-slate-300 text-black rounded-xl my-4 py-5 text-xl font-light px-4">
                {getData}
            </div>
            <button onClick={Delete} className="bg-red-600 text-white px-4 py-2 text-xl font-bold rounded-xl">Delete Data</button>
           </div>
        </>
    )
}
export default ViewPage;