import "../css/App.css"
import {BrowserRouter, Route, Routes, Link, NavLink} from "react-router-dom";
import AddPrompt from "../pages/AddPrompt.jsx";
import Home from "../pages/Home.jsx";

export default function Nav(props){
    return (

        <BrowserRouter>

            <div className={"my-nav"}>
                <p> Logs</p>
                <NavLink to={"prompt"}>Add Prompt</NavLink>
                <NavLink to={"/"}>Home</NavLink>
            </div>


            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/prompt"} element={<AddPrompt/>}/>
            </Routes>

        </BrowserRouter>

    )
}



