function createBook({createBook}){
    const [title,settitle]=useState("");
    const handleChange=(event)=>{
        settitle(event.target.value);
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        createBook(title);
        settitle("");
    }
    return (
        <div className="createBookMain">
            <h3>Add BooK</h3>
            <form onSubmit={handleFormSubmit} className="createForm">
                <label>Title : </label>
                <input value={title} onChange={handleChange} type="text"/>
            <button className="createBtn">Submit</button>
            </form>
        </div>
    );
}
export default createBook;