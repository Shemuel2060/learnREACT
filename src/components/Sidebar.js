



function Sidebar(props){
    const asideStyles = {
        background:"lightblue",
        marginRight:"100px",
        height:"100vh",
        width:"30%",
        marginTop:"20px"
    }
    return (
        <div style={asideStyles}>
            <h1>{props.contact}</h1>
        </div>
    )
}

export default Sidebar;