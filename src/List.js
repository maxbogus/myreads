import React, {Component} from 'react';
import {Link} from "react-router-dom";

import Bookshelf from './Bookshelf';

class List extends Component {
    render() {
        const {books, current, read, want, onSearchBook} = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf books={books.filter((book) => {
                            return current.indexOf(book.id) !== -1;
                        })}
                                   defaultValue='currentlyReading'
                                   onSearchBook={(action) => onSearchBook(action)}
                                   title='Currently Reading'
                        />
                        <Bookshelf books={books.filter((book) => {
                            return want.indexOf(book.id) !== -1;
                        })}
                                   defaultValue='wantToRead'
                                   onSearchBook={(action) => onSearchBook(action)}
                                   title='Want to Read'
                        />
                        <Bookshelf books={books.filter((book) => {
                            return read.indexOf(book.id) !== -1;
                        })}
                                   defaultValue='read'
                                   onSearchBook={(action) => onSearchBook(action)}
                                   title='Read'
                        />
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