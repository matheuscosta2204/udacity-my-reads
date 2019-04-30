import React from 'react';
import { zoomIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import './BookShelfChanger.css';

class BookShelfChanger extends React.Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ open: false });
        }
    }

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
            <div 
                className="book-shelf-changer" 
                onClick={() => this.setState({ open: !this.state.open })} 
                ref={this.setWrapperRef}>
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
        animationDuration: '0.8s',
    },
    thirdZoomIn: {
        animationName: zoomIn,
        animationDuration: '1s',
    },
    fourthZoomIn: {
        animationName: zoomIn,
        animationDuration: '1.1s',
    },
  })