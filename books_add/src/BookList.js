import "./BookList.css";
import BookShow from "./BookShow.js";
import { useContext } from "react";
import BooksContext from "./Books";
function BookList() {
    const {books}=useContext(BooksContext);
    const renderBooks=books.map((books,index)=>{
        return (<BookShow key={books.id} books={books} />);
    });
    return (
        <div className="mainBookEdit">
            {renderBooks}
        </div>
    );
}
export default BookList;