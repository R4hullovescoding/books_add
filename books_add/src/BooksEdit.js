import { useState } from "react";

function BooksEdit({books,onSubmit}){
    const [txt,settxt]=useState(books.title);
    const onChangeHandle=(event)=>{
        event.preventDefault();
        settxt(event.target.value);
        // console.log(event.target.value);
    };
    const onHandleSubmit=(event)=>{
        event.preventDefault();
        // console.log(txt);
        onSubmit(books.id,txt);
    };

    return (
        <div>
            <form onSubmit={onHandleSubmit} id="editForm">
            <label>Title:</label>
            <input type="text" value={txt} onChange={onChangeHandle} />
            <button>Save</button>
            </form>
        </div>
    );
}
export default BooksEdit;