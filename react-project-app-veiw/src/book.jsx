import './App.css'
export default function Book({book}){
    const {name,price} = book;
    return(
        <div className="book">
            <h3>Book Name:{name}</h3>
            <h3>Book Name:{price}</h3>
        </div>
    )
}