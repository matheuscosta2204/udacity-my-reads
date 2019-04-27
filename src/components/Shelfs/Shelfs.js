import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf/BookShelf';

const shelfs = () => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>My Reads</h1>
        </div>
        <BookShelf title="Currently Reading" />
        <BookShelf title="Want to Read" />
        <BookShelf title="Read" />
        <div className="open-search">
            <Link to="/search">
                <button onClick={() => console.log('ola')}>Add a book</button>
            </Link>
        </div>
    </div>
);

export default shelfs;