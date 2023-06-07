import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
const BooksContext=createContext();
function Provider({children}){
    const [books,setbooks]=useState([]);
    const fetchBooks=async()=>{
        const response=await axios.get('http://localhost:3005/books/');
        setbooks(response.data);
    };
    const onCreateBook=async(title)=>{
        const response=await axios.post(`http://localhost:3005/books`,{
            title:title
        });
        const updateBooks=[...books,response.data];
        setbooks(updateBooks);
    };
    const onBookDelete=async(id)=>{
        const response=await axios.delete(`http://localhost:3005/books/${id}`);
        const updatebooks=books.filter((book,index)=>{
            return book.id!==id;
        });
        setbooks(updatebooks);
    };
    const onBookEdit=async(id,newtitle)=>{
        const response = await axios.put(`http://localhost:3005/books/${id}`,{
            title:newtitle
        });
        const updatebook=books.map((book,index)=>{
            if(book.id===id){
                return {...books,...response.data};
            }
            return book;
        });
        setbooks(updatebook);
    };
    const valueToShare={
        books,
        fetchBooks,
        onBookEdit,
        onCreateBook,
        onBookDelete,
    }
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
            </BooksContext.Provider>
    );
}
export {Provider};
export default BooksContext;