import initialState from './initialState';
import {  } from "../actions/actionTypes";

export default function personalBackgroundReducer(state = initialState.personalBackground, action) {
    let newState;
    switch (action.type) {

        default:
            console.log('error in problemsReducer or action definitions');
            newState = [...state];
            break;

    }
    return newState;
}