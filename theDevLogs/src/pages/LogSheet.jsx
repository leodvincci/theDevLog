import Prompt from "../components/Prompt.jsx";
import {logData} from "../assets/devLogData.js";
import React, {useEffect} from "react";
export default function LogSheet(){

    function printDate(e){
        setDateState(e.target.value.split("-"))
        console.log(e.target.value.split("-"))
        console.log(dateState + "Datess")
        return e.target.value.split("-")
    }

    let [dateState, setDateState] = React.useState(21)
    let [myData, setMyData] = React.useState([])

    const getMyData = fetch('http://localhost:8080/api/v1/getUserPrompts')
        .then((response) => response.json())
        .then((data) => {return data})

    let count = 0
    useEffect( ()=>{
        console.log(count)
        console.log("YUp")
        count = count + 1
        getMyData.then(d=>setMyData(d))

    },[])


    return (
        <>



            <input onChange={printDate} name={"the-date"} type="date"/>
            {console.log(printDate)}
            {myData.filter(b=>b.days == dateState[2] && b.months == dateState[1] && b.years == dateState[0] ).map( d =>
                <Prompt key = {d.id}text={d.title} val={d.promptValue}/>
            )}
        </>
    )
}