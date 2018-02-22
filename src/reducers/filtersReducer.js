import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function filtersReducer(state = initialState.filters, action) {
    switch (action.type) {

        case types.UPDATE_SEARCH_STRING:
            state = {...state, searchString:action.payload};
            break;

        default:
            break;

    }
    return state;
}