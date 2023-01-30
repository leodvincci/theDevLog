import Prompt from "../components/Prompt.jsx";
import "../css/App.css"
import devData from "../assets/devData"

export default function Home(){
    console.log(devData)

    return(
        <>
            {devData.map( (e)=>{
                return (
                    <Prompt key={e.id}  id={e.id} text={e.prompt_title}/>
                )
            })}

        </>
    )
}