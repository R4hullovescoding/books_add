import {useState} from "react";
import CreateBook from "./CreateBook.js";
function App(){
    const [books,setBooks]=useState();
    const onCreateBook=({title})=>{
        const updatebook=[{id:(Math.floor(Math.random()*99)),title:title}];
        setBooks(updatebook);
    };
    return (<div>
       <CreateBook createBook={onCreateBook}/>
    </div>);
}
export default App;