import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf/BookShelf';
import { getAll, update } from '../../services/BooksAPI';

class Shelfs extends React.Component {

    state = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
    }

    componentDidMount() {
        getAll().then(books => {
            const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
            const wantToRead = books.filter((book) => book.shelf === "wantToRead");
            const read = books.filter((book) => book.shelf === "read");

            this.setState({ currentlyReading, wantToRead, read });
        });
    }

    onShelfChange = (book, newShelf) => {
        update(book, newShelf).then(books => {
            this.setState({ 
                currentlyReading: books.currentlyReading, 
                wantToRead: books.wantToRead, 
                read: books.read,
            })
        });
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <BookShelf title="Currently Reading" books={this.state.currentlyReading} onShelfChange={this.onShelfChange} />
                <BookShelf title="Want to Read" books={this.state.wantToRead} onShelfChange={this.onShelfChange} />
                <BookShelf title="Read" books={this.state.read} onShelfChange={this.onShelfChange} />
                <div className="open-search">
                    <Link to="/search">
                        <button onClick={() => console.log('ola')}>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
};

export default Shelfs;