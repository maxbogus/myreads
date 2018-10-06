import React, {Component} from 'react';
import {Link} from "react-router-dom";

import Bookshelf from './Bookshelf';

class List extends Component {
    render() {
        const {books, onSearchBook} = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf books={books.filter((book) => {
                            return book.action === 'currentlyReading';
                        })}
                                   defaultValue='currentlyReading'
                                   onSearchBook={(action) => onSearchBook(action)}
                                   title='Currently Reading'
                        />
                        <Bookshelf books={books.filter((book) => {
                            return book.action === 'wantToRead';
                        })}
                                   defaultValue='wantToRead'
                                   onSearchBook={(action) => onSearchBook(action)}
                                   title='Want to Read'
                        />
                        <Bookshelf books={books.filter((book) => {
                            return book.action === 'read';
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