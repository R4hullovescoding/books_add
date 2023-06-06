import "./BookList.css";
import BookShow from "./BookShow.js";
function BookList({books,onDelete}) {
    const renderBooks=books.map((books,index)=>{
        return (<BookShow key={books.id} books={books} onDelete={onDelete}/>);
    });
    return (
        <div className="mainBookEdit">
            {renderBooks}
        </div>
    );
}
export default BookList;