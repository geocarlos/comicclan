import { combineReducers, Reducer } from 'redux';
import keys from '../actions/ActionTypeKeys';
import ActionTypes from '../actions/ActionTypes';

const books: Reducer<any, ActionTypes> = (state: [], action: ActionTypes) => {
	switch(action.type) {
		case keys.GET_BOOKS:
			return action.books;
		default:
			return state;
	}
}

export default combineReducers({
	books
})