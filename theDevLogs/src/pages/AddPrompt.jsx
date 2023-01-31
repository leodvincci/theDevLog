import '../css/App.css'
import Header from "../components/Header.jsx";
import ButtonAdd from "../components/ButtonAdd.jsx";
import Prompt from "../components/Prompt.jsx";
import devData from "../assets/devData.js";
import React from "react";

function AddPrompt() {


    function handler(s){

        fetch('http://localhost:8080/api/v1/addPrompt', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(s),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

      // devData.push({id:devData.length+1,prompt_title:s})
    }

    return (
        <>

        <h1 style={{fontSize:"3rem",marginTop:"1rem",marginBottom:"2rem",color:"white"}}>Create a New Prompt</h1>
        <Prompt text={"Prompt Title"} clicked={handler} />
        </>

    )
}

export default AddPrompt
