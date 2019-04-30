import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf/BookShelf';
import { getAll, update } from '../../services/BooksAPI';
import Modal from '../UI/Modal/Modal';
import Backdrop from '../UI/Backdrop/Backdrop';

class Shelfs extends React.Component {

    state = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
        modalIsOpen: false,
        selectedBook: {},
    }

    componentDidMount() {
        this.getAllBooksInShelf();
    }

    getAllBooksInShelf = () => {
        getAll().then(books => {
            const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
            const wantToRead = books.filter((book) => book.shelf === "wantToRead");
            const read = books.filter((book) => book.shelf === "read");

            this.setState({ currentlyReading, wantToRead, read });
        });
    }

    onShelfChange = (book, newShelf) => {
        update(book, newShelf).then(() => this.getAllBooksInShelf());
    }

    showModal = (book) => {
        this.setState({ modalIsOpen: true, selectedBook: book });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <Backdrop show={this.state.modalIsOpen} close={this.closeModal} />
                <Modal show={this.state.modalIsOpen} book={this.state.selectedBook} />
                <BookShelf 
                    title="Currently Reading" 
                    books={this.state.currentlyReading} 
                    onShelfChange={this.onShelfChange} 
                    showModal={this.showModal} />
                <BookShelf 
                    title="Want to Read" 
                    books={this.state.wantToRead} 
                    onShelfChange={this.onShelfChange} 
                    showModal={this.showModal} />
                <BookShelf 
                    title="Read" 
                    books={this.state.read} 
                    onShelfChange={this.onShelfChange} 
                    showModal={this.showModal} />
                <div className="open-search">
                    <Link to="/search">
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
};

export default Shelfs;