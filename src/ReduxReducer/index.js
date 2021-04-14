import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../Constants';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

function reminder(action) {
    return {
        text: action.text,
        due_date: action.due_date,
        id: Math.random()
    }
}

function removeId(state = [], id) {
    const reminders = state.filter(reminder => reminder.id !== id);
    return reminders;
}

function rootReducer(state = [], action) {
    let reminders = null;
    state = read_cookie('reminders');
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            bake_cookie('reminders', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeId(state, action.id);
            bake_cookie('reminders', reminders);
            return reminders;
        case CLEAR_REMINDERS:
            state = [];
            delete_cookie('reminders');
            return state;
        default:
            return state;
    }
}

export default rootReducer;