import initialState from './initialState';
import { ADD_PROBLEM } from "../actions/actionTypes";

export default function problemsReducer(state = initialState.problems, action) {
    switch (action.type) {

        case ADD_PROBLEM:
            console.log('add problem reducer triggered.');
            state = [...state].push(action.payload);
            break;

        default:
            break;

    }
    return state;
}