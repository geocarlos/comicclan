import IStore from './IStore';

export const initialState: IStore = {
	list: {
		books: [],
		isLoading: false,
		hasError: false
	}
}