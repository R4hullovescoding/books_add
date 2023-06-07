import {useContext, useEffect, useState} from "react";
import axios from "axios";
import CreateBooks from "./CreateBooks";
import BookList from "./BookList.js";
import { Provider } from "./Books";
import BooksContext from "./Books";
function App(){
    const {fetchBooks}=useContext(BooksContext);
    useEffect(()=>{
        fetchBooks();
    },[]);
    return (<div>
        <CreateBooks />
        <BookList/>
    </div>);
}
export default App;