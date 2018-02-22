import * as types from './actionTypes';

export function updateSearchString(searchString) {
    return {
        type: types.UPDATE_SEARCH_STRING,
        payload: searchString
    }
}

