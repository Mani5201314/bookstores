import "../../styles/user.css"
import { useEffect, useState } from "react";

const Users = () => {
    let [Users, setUsers] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("http://localhost:4000/Users")
            let data = await response.json()
            setUsers(data)
        }
        fetchData()
    })
    let deletefix =(id) =>{
        fetch(`http://localhost:4000/Users/${id}`,{
            method:'DELETE'
        })
    }

    return (
        <div className="Users">
            <h1>Users</h1>
            <div id="user2">{Users.map((data) => (
                <div id="users1">
                    <div>{data.title}</div>
                    <div>{data.description}</div>

                </div>
            ))}

            </div>
        </div>
    );
}

export default Users;