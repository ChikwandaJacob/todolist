import React, { Component } from 'react';
import Form from './Form';
import List from './ReminderList';
import '../AppStyles/App.css';
import Footer from './Footer';

class App extends Component{

    render(){
        return(
            <div className="App">
                <div className="App-Title">Todo List</div>
                <Form />
                <List />
                <Footer />
            </div>
        )
    }
}

export default App;