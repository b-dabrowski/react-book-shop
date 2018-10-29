import React from 'react';
import { getBooks } from '../utiles/api';
import Loading from './Loading';
import BookItem from './BookItem';



function BooksGrid ({books}) {    
    return(
        <div className="row">
        {
            books.map((book, index) => (
                <BookItem key={book.id} book={book}/>
            ))
        }
        </div>
    );
}

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            books: null
        };
    }

    async componentDidMount(){
        const books = await getBooks();        
        this.setState(() => ({books: books.items}));
    }

    render(){
        const { books } = this.state;
        return (
            <div className='container'>
                <h1>
                    Books shop
                </h1>   
                {
                    !books
                    ? <Loading/>
                    : <BooksGrid books={books}/>
                }                
            </div>
        );
    }
}

export default Home;