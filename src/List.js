import React, {Component} from 'react';
import Bookshelf from './Bookshelf';
import {Link} from "react-router-dom";

class List extends Component {
    render() {
        const {books, current, read, want} = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf books={books.filter((book) => {return current.indexOf(book.id) !== -1;})} title='Currently Reading'/>
                        <Bookshelf books={books.filter((book) => {return want.indexOf(book.id) !== -1;})} title='Want to Read'/>
                        <Bookshelf books={books.filter((book) => {return read.indexOf(book.id) !== -1;})} title='Read'/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default List