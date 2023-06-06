import BookShow from "./BookShow.js";
function BookList({books}) {
    const renderBooks=books.map((books,index)=>{
        return (<BookShow key={books.id} books={books}/>);
    });
    return (
        <div className="mainBookEdit">
            {renderBooks}
        </div>
    );
}
export default BookList;