import { FETCH_USERS, RECEIVE_USERS, FETCH_RECORDS, RECEIVE_RECORDS } from './actions';

const defaultState = {
    usersList: [],
    userArray: [],
    recordList: []
}

export const rootReducer = function (state = defaultState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return state;
        case RECEIVE_USERS:
            return Object.assign({}, state, { usersList: action.users })
        case FETCH_RECORDS:
            return state;
        case RECEIVE_RECORDS:
            return Object.assign({}, state, { recordList: action.jobs })
        case 'userArray':
            { return { ...state, userArray: action.userArray } }
        default:
            return state;
    }
}