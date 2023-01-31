import ButtonAdd from "./ButtonAdd.jsx";
import "../css/App.css"
import devData from "../assets/devData.js";
import React from "react";
import {logData} from "../assets/devLogData.js";
export default function Prompt(props){
    let [theDevData, setDevData] = React.useState(devData)


    function handler(){
        if(props.clicked == undefined){
            return
        }
        props.clicked({title:someState})
        console.log("I handled it!")
    }

    function handler_2(e){
        if(someState == null){
            return
        }
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        console.log(`${e.target.id} handled it!`)
        // console.log(today.getUTCDate(),today.getUTCDay(),today.getUTCFullYear())
        console.log("Here's some state " + someState)
        logData.push({month: today.getUTCMonth()+1,year: today.getUTCFullYear(),id: logData.length,prompt_value: someState,day:today.getUTCDate(),prompt_title: props.text})
        console.log(logData)
    }

    let [someState, setState] = React.useState(null);

    function changeSomeState(e){
        setState( e.target.value )
        console.log(e.target.value)
    }

    return (
        <div className={"prompt-comp"}>

            <span className={"title-and-input"}>
                <p className={"prompt-title"}>{props.text}</p>
                <input onChange={changeSomeState} name={"new-prompt-input"} className={"prompt-input"} type="text" value={props.val}/>
            </span>

            <ButtonAdd id={props.id} text={'Submit'} theHandler={props.clicked == undefined ? handler_2 : handler} />
            {/*<ButtonAdd text={'Remove'} color={"crimson"}/>*/}

        </div>

    )
}