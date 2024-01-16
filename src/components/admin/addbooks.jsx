import React from "react";
import { useRef } from "react";
import "../../styles/addbook.css"
const Addbook = () => {
    let thumbnailUrl = useRef()
    let title = useRef()
    let authors = useRef()
    let categories = useRef()
    let pageCount = useRef()

    let submitUser= (e)=>{
        e.preventDefault()
        let book={
            thumbnailUrl:thumbnailUrl.current.value,
            authors:authors.current.value,
            title:title.current.value,
            categories:categories.current.value,
            pageCount:pageCount.current.value
        }
        fetch('http://localhost:4000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(book)
        }) 
    }

    return (
        <div id="addbook">
            <center>
            <h1>Add Books</h1><br />
            <form style={{border:"2px solid black",width:"25%",paddingRight:"55px",paddingBottom:"25px", textAlign:"right"}} onSubmit={submitUser}><br />
            <h4>            
            thumbnailUrl: <input ref={thumbnailUrl} type="text" name="" id="" /><br />
            authors: <input ref={authors} type="text" name="" id="" /><br />
            Title: <input ref={title} type="text" name="" id="" /><br />
            categories: <input ref={categories} type="text" name="" id="" /><br />
            pageCount: <input ref={pageCount} type="text" name="" id="" /><br /><br />

            <input type="submit" value="submit" />
            </h4>        
            </form>   
            </center>         
        </div>
     );
} 
export default Addbook;