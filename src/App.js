import React from 'react'
import {Route} from 'react-router-dom'

import './App.css';
import * as BooksAPI from './BooksAPI';
import List from './List';
import Search from './Search';

class BooksApp extends React.Component {
    state = {
        books: [],
    };

    componentWillMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                books: books
            }));
            console.log(books, this.state);
        });
    }

    processBook = ({book}) => {
        this.setState((prevState) => ({
            books: prevState.books.filter((b) => book.id !== b.id).concat([book])
        }));
    };

    render() {
        return (
            <div className="app">
                <Route exact path='/search' render={() => (
                    <Search onSearchBook={(action) => {
                        this.processBook(action);
                    }} {...this.state}/>
                )}/>
                <Route exact path='/' render={() => (
                    <List onSearchBook={(action) => {
                        this.processBook(action);
                    }} {...this.state}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp