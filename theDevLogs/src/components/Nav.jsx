import "../css/App.css"
import {BrowserRouter, Route, Routes, Link, NavLink} from "react-router-dom";
import AddPrompt from "../pages/AddPrompt.jsx";
import Home from "../pages/Home.jsx";
import LogSheet from "../pages/LogSheet.jsx";

export default function Nav(props){
    return (

        <BrowserRouter>

            <div className={"my-nav"}>
                <NavLink to={"logs"}>Logs</NavLink>
                <NavLink to={"prompt"}>Add Prompt</NavLink>
                <NavLink to={"/"}>Home</NavLink>
            </div>


            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/prompt"} element={<AddPrompt/>}/>
                <Route path={"/logs"} element={<LogSheet/>}/>
            </Routes>

        </BrowserRouter>

    )
}



