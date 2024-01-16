import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../../styles/adminlogin.css"

const AdminLogin = () => {

    let navigate= useNavigate()

    let gmail=useRef()
    let password=useRef()

    let submit =(e)=>{
    e.preventDefault()
        let admin ={
            gmail:"admin@gmail.com",
            password:"123456"
        }
        if ( gmail.current.value == admin.gmail && password.current.value == admin.password ) {
            // navigate to admin portal
            navigate('/adminPortal')
        } else {
            alert("invaild admin credentials")
            
        }
}

    return ( 
        <div className="adminLogin">
            <center>
            <h1 id="hi">Admin Login</h1><br />
            <div className="adminForm">
                <form onSubmit={submit}>
                    <div>
                      Email:  <input className="adminEmail" ref={gmail} type="email" placeholder="Enter your Email id"  />
                    </div ><br />
                    <div>
                     Password:   <input className="adminEmail" ref={password} type="password" placeholder="Enter your password"  />
                    </div><br />
                    <div className="loginBtm">
                        <button className="adminEmail">Login</button>
                    </div>
                </form>
            </div>
            </center>
        </div>
     );
}
 
export default AdminLogin;