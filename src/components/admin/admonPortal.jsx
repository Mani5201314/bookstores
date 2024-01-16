
import { Route, Routes } from "react-router-dom";
import "../../styles/adminportal.css"
import Books from "../books";
import Home from "../home";
import Navbar from "../navbar";
import Addbook from "./addbooks";
import Adduser from "./addusers";
import Users from "./users";
import ReadBooks from "../readBook";
const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            {/* <h2>Welcome to admin Portal</h2> */}

            <Navbar />
            <Routes>
                <Route element={ <Home />} path="/" />
                <Route element={ <Books />} path="/books" />
                <Route element={ <Users />} path="/users" />
                <Route element={ <Addbook />} path="/addbook" />
                <Route element={ <Adduser />} path="/adduser" />
                <Route element={<ReadBooks />} path="/books/:id"/>
            </Routes>          
            {/* <Navbar /> */}
         
           
        
        
        </div>
     );
}
 
export default AdminPortal;