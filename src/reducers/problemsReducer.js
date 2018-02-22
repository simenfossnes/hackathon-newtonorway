import initialState from './initialState';
import { ADD_PROBLEM } from "../actions/actionTypes";

export default function problemsReducer(state = initialState.problems, action) {
    let newState;
    switch (action.type) {

        case ADD_PROBLEM:
            console.log('add problem reducer triggered.');
            newState = [...state].push(action.payload);
            break;

        default:
            console.log('error in problemsReducer or action definitions');
            newState = [...state];
            break;

    }
    return newState;
}