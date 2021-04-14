import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../Constants';

export function addReminder(text, due_date) {
    let action = {
        type: ADD_REMINDER,
        text,
        due_date
    }
    console.log(action);
    return action;
}

export function deleteReminder(id) {
    return {
        type: DELETE_REMINDER,
        id
    }
}

export function clearReminders() {
    return {
        type: CLEAR_REMINDERS
    }
}