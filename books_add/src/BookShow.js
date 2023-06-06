import { useState } from "react";
function BookShow({key,books,onDelete}) {
    const onDeleteHandle=()=>{
        onDelete(books.id);
    };
    return (
        <div key={books.id} className="bookShow">
        <div className="btnbar">
        <button  onClick={onDeleteHandle} className="removeBtn"><i class="fa-sharp fa-solid fa-circle-xmark"></i></button>
        <button  className="editBtn"><i class="fa-solid fa-pen"></i></button>
        </div>
        <div className="imgBookShow">
        <img src={`https://picsum.photos/seed/${books.id}/200/200`} alt="RandomImg"
         />
        </div>

        <h3>{books.title}</h3>
        
    </div>
    );
}
export default BookShow;