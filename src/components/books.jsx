import { useEffect, useState } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import "../styles/books.css"
const Books = () => {
    let [books, setBooks] = useState([])
    let location = useLocation()
    let path = location.pathname.startsWith('/adminPortal')
    let navigate = useNavigate()
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("http://localhost:4000/books")
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    },(books))

    let readBook = (id) => {
        if (path){
        navigate(`/adminPortal/books/${id}`)
        }
        else{
        navigate(`/userPortal/books/${id}`)
        }
    }

    let deletefix =(id) =>{
        fetch(`http://localhost:4000/books/${id}`,{
            method:'DELETE'
        })
        // alert("hii")
    }

    return (
        <div className="books">
            <h1>Books Collections</h1>
            <div className="book">
                {books.map((data) => (
                    <div id="hiii">
                        <div id="bcard1"><img width={200} src={(data).thumbnailUrl} alt="" />
                            <div>{(data).title}
                                <div>{(data).authors}</div>
                                <div>{(data).categories}</div>
                                <div>{(data).pageCount}</div>
                                <button onClick={() => readBook(data.id)} id="readbook">Read Book</button>
                                {path && <button id="Delete" onClick={()=>deletefix(data.id)}>Delete</button>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Books;