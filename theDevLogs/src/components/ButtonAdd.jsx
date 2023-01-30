export default function ButtonAdd(props){
    return (

        <button id={props.id} onClick={props.theHandler} style={{background:props.color, marginRight:"1rem"}} className={"my-btn"}> {props.text}</button>

    )

}