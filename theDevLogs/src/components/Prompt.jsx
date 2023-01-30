import ButtonAdd from "./ButtonAdd.jsx";
import "../css/App.css"
export default function Prompt(props){
    return (
        <div className={"prompt-comp"}>

            <span className={"title-and-input"}>
                <p className={"prompt-title"}>{props.text}</p>
                <input className={"prompt-input"} type="text"/>
            </span>

            <ButtonAdd text={'Submit'} color={}/>
            <ButtonAdd text={'Remove'} color={"crimson"}/>

        </div>

    )
}