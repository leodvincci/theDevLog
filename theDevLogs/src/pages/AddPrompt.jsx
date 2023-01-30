import '../css/App.css'
import Header from "../components/Header.jsx";
import ButtonAdd from "../components/ButtonAdd.jsx";
import Prompt from "../components/Prompt.jsx";
import devData from "../assets/devData.js";
import React from "react";

function AddPrompt() {


    function handler(s){
      devData.push({id:devData.length+1,prompt_title:s})
    }

    return (
        <>

        <h1 style={{fontSize:"3rem",marginTop:"1rem",marginBottom:"2rem",color:"white"}}>Create a New Prompt</h1>
        <Prompt text={"Prompt Title"} clicked={handler} />
        </>

    )
}

export default AddPrompt
