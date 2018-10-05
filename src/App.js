import React from 'react'
import {Route} from 'react-router-dom'

import './App.css'
import * as BooksAPI from './BooksAPI';
import List from './List';
import Search from './Search';

class BooksApp extends React.Component {
    state = {
        books: [],
        read: [],
        current: [],
        want: [],
    };

    addBook = ({book, action}) => {
        console.log(book, action);
        if (action !== 'none') {
            this.setState((prevState) => ({
                books: prevState.books.concat([book])
            }));
            if (action === 'read') {
                this.setState((prevState) => ({
                    read: prevState.read.concat([book.id])
                }));
            }
            if (action === 'want') {
                this.setState((prevState) => ({
                    want: prevState.want.concat([book.id])
                }));
            }
            if (action === 'current') {
                this.setState((prevState) => ({
                    current: prevState.current.concat([book.id])
                }));
            }
        }
    };

    render() {
        // const {books, current, read, want} = this.state;
        return (
            <div className="app">
                <Route exact path='/search' render={() => (
                    <Search onSearchBook={(action) => {
                        this.addBook(action);
                    }}/>
                )}/>
                <Route exact path='/' render={() => (
                    <List {...this.state}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp