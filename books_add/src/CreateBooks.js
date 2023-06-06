import "./CreateBooks.css";
import { useState } from "react";
function CreateBooks({onCreate}) {
    const [title,settitle]=useState("");
    const handleChange=(event)=>{
        settitle(event.target.value);
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        onCreate(title);
        settitle("");
    }
    return (
        <div className="createBookMain">
        <h3>Add BooK</h3>
        <form onSubmit={handleFormSubmit} className="createForm">
            <label>Title : </label>
            <input className="createip" value={title} onChange={handleChange} type="text"/>
        <button className="createBtn">Submit</button>
        </form>
    </div>
    );
}
export default CreateBooks;