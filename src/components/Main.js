

function Main(props){
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
            <h1>{props.title}</h1>

        </div>
        )
}

export default Main;