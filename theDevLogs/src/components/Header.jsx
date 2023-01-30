import logo from "../assets/logo.png"
import Nav from "./Nav.jsx";
export default function Header(){
    return(
        <div className={"the-header"}>

            <img className={"logo"} src={logo} alt=""/>
            <Nav link1={"Log"} date={"Date PlaceHOlder"} link2={"Add Prompt"}/>

        </div>
    )
}