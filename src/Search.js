import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from './BooksAPI';

class Search extends Component {
    state = {
        query: '',
        books: []
    };

    updateQuery = (query) => {
        this.setState(() => ({
            query
        }));
        if (query) {
            BooksAPI.search(query).then((books) => {
                this.setState(() => ({
                    books
                }));
            });
        }
    };

    render() {
        const {query, books} = this.state;
        const {onSearchBook} = this.props;
        const showingBooks = query !== '' && books.length > 0;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               value={query}
                               onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {query !== '' && books.error && books.items !== [] && (
                        <ol className="books-grid">
                            {books.error}
                        </ol>
                    )}
                    {(query === '' || books.length === 0) && (
                        <ol className="books-grid">
                            No books to display
                        </ol>
                    )}
                    {showingBooks && (
                        <ol className="books-grid">
                            {books.map((book) => (
                                <li key={book.id}>
                                    <Book book={book} books={this.props.books} onSearchBook={(action) => onSearchBook(action)}/>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
            </div>
        )
    }
}

export default Search
