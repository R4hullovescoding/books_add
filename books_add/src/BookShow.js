import "./BookShow.css";
import BooksEdit from "./BooksEdit.js";
import { useState } from "react";
function BookShow({key,books,onDelete,onEdit}) {
    const [openform,setform]=useState(false);
    let content=books.title;
    const onDeleteHandle=()=>{
        onDelete(books.id);
    };
    const onEditHandle=()=>{
        setform(!openform);
    };
    const onChangeForm=(id,txt)=>{
        // console.log("bookshow",txt);
        onEdit(id,txt);
        setform(false);
        content=txt;
    }
    if(openform) content=<BooksEdit  books={books} onSubmit={onChangeForm}/>
    return (
        <div key={books.id} className="bookShow">
        <div className="btnbar">
        <button  onClick={onDeleteHandle} className="removeBtn"><i class="fa-sharp fa-solid fa-circle-xmark"></i></button>
        <button  onClick={onEditHandle} className="editBtn"><i class="fa-solid fa-pen"></i></button>
        </div>
        <div className="imgBookShow">
        <img src={`https://picsum.photos/seed/${books.id}/200/200`} alt="RandomImg"
         />
        </div>

        <h3>{content}</h3>
        
    </div>
    );
}
export default BookShow;