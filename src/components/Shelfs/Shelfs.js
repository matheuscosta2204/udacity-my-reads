import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf/BookShelf';
import PropTypes from 'prop-types';

const shelfs = (props) => {
    const { books, onShelfChange } = props;
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
            <BookShelf 
                title="Currently Reading" 
                books={books.filter((book) => book.shelf === "currentlyReading")} 
                onShelfChange={onShelfChange} />
            <BookShelf 
                title="Want to Read" 
                books={books.filter((book) => book.shelf === "wantToRead")} 
                onShelfChange={onShelfChange} />
            <BookShelf 
                title="Read" 
                books={books.filter((book) => book.shelf === "read")} 
                onShelfChange={onShelfChange} />
            <div className="open-search">
                <Link to="/search">
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    )
};

shelfs.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
};

export default shelfs;