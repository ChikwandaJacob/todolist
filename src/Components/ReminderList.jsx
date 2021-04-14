import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteReminder, clearReminders} from '../ReduxActions';

function mapStateToProps(state){
    return {
        reminders: state
    }
}

class RemindersList extends Component{

    deleteReminder(id){
        this.props.deleteReminder(id);
    }

    clearReminders(){
        this.props.clearReminders();
    }

    render(){
        return(
            <div className="Reminder">
                {
                    this.props.reminders.length === 0 ? 
                        <div className="Todo-Title">Your List Seems Empty</div> :
                        <div className="Todo-Title">Your Upcoming Tasks</div>
                }
                <ul className="list-group Reminder-List">
                    {
                        this.props.reminders.map((reminder, key)=>{
                            return(
                                <li 
                                    className="list-group-item Reminder-Item" 
                                    key={key}>
                                        <div>{reminder.text}</div>
                                        <div><em>{reminder.due_date}</em></div>
                                    <span 
                                        className="Delete-Button fa fa-trash" 
                                        type="button"
                                        onClick={()=>this.deleteReminder(reminder.id)}>
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    this.props.reminders.length === 0 ?
                    <input
                        type="Button"
                        value="Clear List"
                        className="btn btn-danger Clear-List-Button"
                        disabled
                        readOnly
                    /> :
                    <input
                        type="Button"
                        value="Clear List"
                        className="btn btn-danger Clear-List-Button"
                        onClick={()=>this.clearReminders()}
                        readOnly
                    />
                }
            </div>
        )
    }
}

const List = connect(mapStateToProps, {deleteReminder, clearReminders})(RemindersList);

export default List;