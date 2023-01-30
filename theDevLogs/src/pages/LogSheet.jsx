import Prompt from "../components/Prompt.jsx";
import {logData} from "../assets/devLogData.js";
import React from "react";
export default function LogSheet(){

    function printDate(e){
        setDateState(e.target.value.split("-"))
        console.log(e.target.value.split("-"))
        console.log(dateState + "Datess")
        return e.target.value.split("-")
    }

    let [dateState, setDateState] = React.useState(21)

    return (
        <>
            <input onChange={printDate} name={"the-date"} type="date"/>
            {console.log(printDate)}
            {logData.filter(b=>b.day == dateState[2] && b.month == dateState[1] && b.year == dateState[0] ).map( d =>
                <Prompt key = {d.id}text={d.prompt_title} val={d.prompt_value}/>
            )}
        </>
    )
}