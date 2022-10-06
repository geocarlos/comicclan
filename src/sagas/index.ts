import { put, takeLatest, all } from 'redux-saga/effects';
import {receiveBooks} from '../actions/Actions';
import {IRequestBooks} from '../actions/IActions';
import keys from '../actions/ActionTypeKeys';

function* fetchBooks(action: IRequestBooks) {
	try {
		const data = yield fetch(action.url, {
			method: 'GET',
			headers: {
				Authorization: "Bearer ComicClanVettIO2019"
			}
		})
			.then(response => response.json(), )
		yield put(receiveBooks(data));
	} catch (error) {
		console.log(error);
	}
}

export default function* rootSaga() {
  return yield all([
	takeLatest(keys.REQUEST_BOOKS, fetchBooks)
  ]);
}