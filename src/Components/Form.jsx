import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addReminder} from '../ReduxActions';
import moment from 'moment';

import '../AppStyles/App.css';

function mapDispatchToProps(dispatch){
    return{
        addReminder: (reminder, date) => dispatch(addReminder(reminder, date))
    };
}

class ReminderForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            text : '',
            due_date: ''
        }
    }

    addReminder(){
        let date = moment(new Date(this.state.due_date)).fromNow();
        this.props.addReminder(this.state.text, date);
    }

    render(){
        return(
            <form 
                className="Reminder-Form container d-flex justify-content-center" 
                onSubmit={event=>{
                    event.preventDefault();
                    this.addReminder();
                }}>
                <div className="form-group row">
                    <input 
                        required
                        type="text"
                        placeholder="I have to..."
                        onChange={event=>this.setState({text: event.target.value})}
                    />
                    <input 
                        required
                        type="date"
                        onChange={event=>this.setState({due_date: event.target.value})}
                    />
                    <input 
                        type="submit" 
                        value="Add Reminder"
                        className="btn btn-success col-6 mx-auto Form-Button"
                    />
                </div>
                
            </form>
        )
    }
}

const Form = connect(
    null,
    mapDispatchToProps
)(ReminderForm);

export default Form;
