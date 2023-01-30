import '../css/App.css'
import Header from "../components/Header.jsx";
import ButtonAdd from "../components/ButtonAdd.jsx";
import Prompt from "../components/Prompt.jsx";

function AddPrompt() {

    return (
        <>

        <h1 style={{fontSize:"3rem",marginTop:"1rem",marginBottom:"2rem",color:"white"}}>Create a New Prompt</h1>
        <Prompt text={"Prompt Title"}/>
        </>

    )
}

export default AddPrompt
