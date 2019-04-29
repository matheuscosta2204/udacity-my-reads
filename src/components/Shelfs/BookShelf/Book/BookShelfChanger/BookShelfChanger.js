import React from 'react';
import { zoomIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import './BookShelfChanger.css';

class BookShelfChanger extends React.Component {

    state = {
        open: false,
    }

    render() {
        const { shelf } = this.props.book;
        const cssFisrt = ["menu-item", shelf === "currentlyReading" ? "first-active" : "first-inactive", css(styles.firstZoomIn)];
        const cssSecond = ["menu-item", shelf === "wantToRead" ? "second-active" : "second-inactive", css(styles.secondZoomIn)];
        const cssThird = ["menu-item", shelf === "read" ? "third-active" : "third-inactive", css(styles.thirdZoomIn)];
        const cssFourth = ["menu-item", !shelf ? "fourth-active" : "fourth-inactive",css(styles.fourthZoomIn)];

        return (
            <div className="book-shelf-changer" onClick={() => this.setState({ open: !this.state.open })}>
                {/* <select value={props.book.shelf ? props.book.shelf : 'none'} onChange={(event) => props.onShelfChange(props.book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select> */}
                {this.state.open && <div className="menu">
                    <div className={cssFisrt.join(' ')} onClick={() => this.props.onShelfChange(this.props.book, "currentlyReading")}></div>
                    <div className={cssSecond.join(' ')} onClick={() => this.props.onShelfChange(this.props.book, "wantToRead")}></div>
                    <div className={cssThird.join(' ')} onClick={() => this.props.onShelfChange(this.props.book, "read")}></div>
                    <div className={cssFourth.join(' ')} onClick={() => this.props.onShelfChange(this.props.book, "none")}></div>
                </div>}
            </div>
        )
    }
}

export default BookShelfChanger;

const styles = StyleSheet.create({
    firstZoomIn: {
        animationName: zoomIn,
        animationDuration: '0.5s',
    },
    secondZoomIn: {
        animationName: zoomIn,
        animationDuration: '1s',
    },
    thirdZoomIn: {
        animationName: zoomIn,
        animationDuration: '1.2s',
    },
    fourthZoomIn: {
        animationName: zoomIn,
        animationDuration: '1.5s',
    },
  })