import React from 'react';
import { Link } from 'react-router-dom';
import { getAll, search, update } from '../../services/BooksAPI';
import Book from '../Shelfs/BookShelf/Book/Book';

class Search extends React.Component {

    state = {
        books: [],
        query: "",
    }

    searchQueryChange = event => {
        const query = event.target.value;
        this.setState({ query });

        if(query !== "") {
            search(query).then(books => {
                if(books.length > 0) {
                    this.setState({ books });
                }
            });
        }
    }

    searchQueryByState = () => {
        search(this.state.query).then(books => {
            if(books.length > 0) {
                this.setState({ books });
            }
        });
    }
    
    onShelfChange = (book, newShelf) => {
        update(book, newShelf).then(() => this.searchQueryByState());
    }

    render() {
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
                        {this.state.books.map((book, index) => (
                            <Book key={index} book={book} onShelfChange={this.onShelfChange} />
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
};

export default Search;