import * as types from './actionTypes';

export function addProblem(problem) {
    return {
        type: types.ADD_PROBLEM,
        payload: problem
    }
}

