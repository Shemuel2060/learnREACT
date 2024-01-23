
import { useState } from 'react';
import Button from './Button';



function Main(props){
    const [title,setTitle] = useState("Title One")

    function handleClick(){
        setTitle("Rich!")
    }
    const mainStyles={
        background:"black",
        color:"white",
        marginLeft:"200px",
        height:"100vh",
        width:"45%",
        marginTop:"20px"

    }
    return (
        <div style = {mainStyles}>
            <h1>{props.heading}</h1>
            <h2>{title}</h2>
            <Button clicked={handleClick}/>

        </div>
        )
}

export default Main;