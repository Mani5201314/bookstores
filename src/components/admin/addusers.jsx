import React from "react";
import { useRef } from "react";
import "../../styles/addbook.css"
const Addusers = () => {
    let firstname = useRef()
    let lastname = useRef()
    let email = useRef()
    let phone = useRef()

    let submitUser= (e)=>{
        e.preventDefault()
        let Users={
            firstname:firstname.current.value,
            email:email.current.value,
            lastname:lastname.current.value,
            phone:phone.current.value,
        }
        fetch('http://localhost:4000/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(Users)
        }) 
    }

    return (
        <div id="addbook">
            <center>
            <h1>Add Users</h1><br />
            <form style={{border:"2px solid black",width:"25%",paddingRight:"55px",paddingBottom:"25px", textAlign:"right"}} onSubmit={submitUser}><br />
            <h4>            
            Firstname: <input ref={firstname} type="text" name="" id="" /><br />
            Email: <input ref={email} type="text" name="" id="" /><br />
            Lastname: <input ref={lastname} type="text" name="" id="" /><br />
            Phone: <input ref={phone} type="text" name="" id="" /><br />

            <input type="submit" value="submit" />
            </h4>        
            </form>   
            </center>         
        </div>
     );
} 
export default Addusers;