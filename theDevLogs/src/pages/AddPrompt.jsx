import '../css/App.css'
import Header from "../components/Header.jsx";
import ButtonAdd from "../components/ButtonAdd.jsx";

function AddPrompt() {

    return (
        <div style={{marginTop:"8rem"}}>
                <input type="text"/>
                <ButtonAdd text={"Add Prompt"}/>

        </div>
    )
}

export default AddPrompt
