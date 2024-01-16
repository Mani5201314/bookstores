import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import "../styles/Readbook.css"
const ReadBook = ({ cart, setCart }) => {
    let [book, setBook] = useState([])
    let params = useParams()
    let location = useLocation()

    let path = location.pathname.startsWith('/userPortal')
    let navigate = useNavigate()

    let book_id = params.id
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:4000/books/${book_id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchData()
    })



    // let cart = (id) => {
    //     if (path){
    //          navigate(`/userPortal/books/${id}`)

    //     }
    //     else{
    //         navigate(`/adminPortal/books/${id}`)
    //     }
    // }
    return (
        <div className="readbooks">
            <div id="jii"><h1>ReadBook</h1>
                <h1><img src={book.thumbnailUrl} alt="" /></h1></div>
            <div id="ji">
                <h3> <b> Authors:</b>{book.authors}</h3><br />
                <h3> <b> Title:</b>{book.title}</h3><br />
                <h3> <b> Description:</b>{book.shortDescription}</h3><br />
                <h3> <b> Status:</b>{book.status}</h3>


                {path ?

                    <div id="back">
                        <Link to="/userPortal/books"><button id="button1">back</button></Link>
                    </div>
                    :
                    <div id="back">
                        <Link to="/adminPortal/books"><button id="button1">back</button></Link>
                    </div>

                }



                {path && <div id="back"><button onClick={() => setCart([...cart, book])} id="button2">add to cart</button></div>}

            </div>

        </div>
    );
}
export default ReadBook;