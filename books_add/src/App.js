import {useState} from "react";
import CreateBooks from "./CreateBooks";
import BookList from "./BookList.js";
function App(){
    const [books,setbooks]=useState([]);
    const onCreateBook=(title)=>{
        const updateBooks=[...books,{id:(Math.floor(Math.random()*999)),title:title}];
        setbooks(updateBooks);
    };
    const onBookDelete=(id)=>{
        const updatebooks=books.filter((book,index)=>{
            return book.id!==id;
        });
        setbooks(updatebooks);
    };
    // const handleEdit=async (id,newtitle)=>{
    //     const editrq=await axios.put(`http://localhost:3005/books/${id}`,{
    //         title:newtitle,
    //     });
    //     const updatebook=books.map((book,index)=>{
    //         if(book.id===id){
    //             return {...books,...editrq.data};
    //         }
    //         return book;
    //     });
    //     setbook(updatebook);
    // };
    return (<div>
        <CreateBooks onCreate={onCreateBook} />
        <BookList books={books} onDelete={onBookDelete}/>
    </div>);
}
export default App;