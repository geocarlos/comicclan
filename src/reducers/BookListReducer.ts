import keys from '../actions/ActionTypeKeys';
import ActionTypes from '../actions/ActionTypes';
import {IBookList} from '../models/IBookState';
import {initialState} from '../store/initialState';
import { Reducer } from 'redux';

export const books: Reducer<IBookList, ActionTypes> = (
	state = initialState.list, action: ActionTypes
): IBookList => {
	switch (action.type) {
		case keys.REQUEST_BOOKS:
			return {...state, isLoading: true}
		case keys.RECEIVE_BOOKS:
			return {...state, books: action.books, isLoading: false };
		case keys.ERROR_RECEIVING_BOOKS:
			return {...state, hasError: true, isLoading: false}
		default:
			return state;
	}
}