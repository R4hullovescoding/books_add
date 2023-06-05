import {useState} from "react";
function App(){
    const [books,setBooks]=useState();
    const onCreateBook=({title})=>{
        const updatebook=[{id:(Math.floor(Math.random()*99)),title:title}];
        setBooks(updatebook);
    };
    return (<div>
       <createBook createBook={onCreateBook}/>
    </div>);
}
export default App;