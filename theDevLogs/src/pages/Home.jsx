import Prompt from "../components/Prompt.jsx";
import "../css/App.css"
import devData from "../assets/devData"
import React, {useEffect} from "react";

export default function Home(){
    // console.log(devData)
    let [myData, setMyData] = React.useState([])

    const getMyData = fetch('http://localhost:8080/api/v1/getPrompts')
        .then((response) => response.json())
        .then((data) => {return data})

    let count = 0
    useEffect( ()=>{
        console.log(count)
        console.log("YUp")
        count = count + 1
        getMyData.then(d=>setMyData(d))

    },[])

    // data.then((d)=>setMyData(d))
    return(
        <>

            {myData.map( (e)=>{
                return (
                    <Prompt key={e.id}  id={e.id} text={e.title}/>
                )
            })}

        </>
    )
}