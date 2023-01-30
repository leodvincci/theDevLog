export default function ButtonAdd(props){
    return (

        <button style={{background:props.color, marginRight:"1rem"}} className={"my-btn"}> {props.text}</button>

    )

}