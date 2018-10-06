import React from 'react'
import {Route} from 'react-router-dom'

import './App.css'
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
        if (action !== 'none') {
            if (this.state.books === [] || this.state.books.filter((b) => book.id !== b.id).length === this.state.books.length) {
                this.setState((prevState) => ({
                    books: prevState.books.concat([book])
                }));
            }

            if (action === 'read') {
                this.setState((prevState) => ({
                    read: prevState.read.concat([book.id])
                }));
            }
            if (action === 'wantToRead') {
                this.setState((prevState) => ({
                    want: prevState.want.concat([book.id])
                }));
            }
            if (action === 'currentlyReading') {
                this.setState((prevState) => ({
                    current: prevState.current.concat([book.id])
                }));
            }
        }
    };

    render() {
        return (
            <div className="app">
                <Route exact path='/search' render={({history}) => (
                    <Search onSearchBook={(action) => {
                        this.addBook(action);
                        console.log(this.state);
                        history.push('/')
                    }}/>
                )}/>
                <Route exact path='/' render={() => (
                    <List onSearchBook={(action) => {
                        this.addBook(action);
                        console.log(this.state)
                    }} {...this.state}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp