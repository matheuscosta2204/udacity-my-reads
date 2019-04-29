import React from 'react';
import { Link } from 'react-router-dom';
import { getAll, search, update } from '../../services/BooksAPI';
import Book from '../Shelfs/BookShelf/Book/Book';

class Search extends React.Component {

    state = {
        books: [],
        query: ""
    }

    searchQueryChange = event => {
        const query = event.target.value;
        if(query !== "") {
            search(query).then(books => {
                if(books.length > 0) {
                    this.addShelfTo(books);
                    this.setState({ query });
                } else {
                    console.log('nao achou');
                }
            });
        }
    }

    addShelfTo = (booksWithoutShelf) => {
        getAll().then((booksInShelf) => {
            let allBooks = booksWithoutShelf.map((bookWithoutShelf) => {
                booksInShelf.forEach((bookInShelf) => {
                    if (bookInShelf.id === bookWithoutShelf.id) {
                        bookWithoutShelf.shelf = bookInShelf.shelf;
                    }
                });
                return bookWithoutShelf;
            });
            //console.log(allBooks);
            this.setState({ books: allBooks });
        })
    }

    searchQueryByState = () => {
        search(this.state.query).then(books => {
            if(books.length > 0) {
                this.addShelfTo(books);
            }
        });
    }
    
    onShelfChange = (book, newShelf) => {
        update(book, newShelf).then(() => this.searchQueryByState());
    }

    render() {
        const { books } = this.state;
        //console.log(books); //books has shelf property here
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author" 
                            onChange={this.searchQueryChange} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book, index) => {
                            //console.log(book.shelf); //gives me undefined
                            return (
                            <Book key={index} book={book} onShelfChange={this.onShelfChange} />)
                        })}
                    </ol>
                </div>
            </div>
        );
    }
};

export default Search;