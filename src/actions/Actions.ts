import keys from './ActionTypeKeys';
import {IGetBooks} from './IActions';

export function getBooks(books: Array<any>): IGetBooks {
	return {
		type: keys.GET_BOOKS,
		books
	}
}