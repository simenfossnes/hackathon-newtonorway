import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function navigationReducer(state = initialState.navigation, action) {
    switch (action.type) {

        case types.TOGGLE_SHOW_LEFT_DRAWER:
            state = {...state, showLeftDrawer: !state.showLeftDrawer, showBottomDrawer:false};
            break;

        case types.TOGGLE_SHOW_BOTTOM_DRAWER:
            state = {...state, showBottomDrawer: !state.showBottomDrawer, showLeftDrawer:false};
            break;

        default:
            break;

    }
    return state;
}