import React, { useEffect } from "react";

const Button = () => {
     const handleClick =()=>{
        console.log ("hola")
     }
    
    
    
    
    useEffect (() => {
        document.getElementById ('button').addEventListener('click', handleClick)
        
        return () =>{
            document.getElementById ('button').removeEventListener('click', handleClick)
        }
    
     }, [])




    return (
        < button id= 'button'>Button</button>
    )
}

export default Button