import React, { useEffect, useState } from 'react';
import Search from './page-elements/Search';
import Nav from './page-elements/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../actions/Actions';
import IBook from '../models/IBook';
import IStore from '../store/IStore';
import Categories from './page-elements/Categories';
import Category from './page-elements/Category';
import { FakeBook } from './page-elements/BookItem';
import TopBar from './page-elements/TopBar';
import { Grid, GridItem, Footer} from './shared-styled-elements/StyledElements';

const groupBooks = (books: IBook[], category: Categories): any => {
	if (category === Categories.RANDOM) {
		return {Random: books.slice(0).sort(() => 0.5 - Math.random())}
	}
	const groups: any = {};
	for (const book of books) {
		if (!groups[book[category]]) {
			groups[book[category]] = [];
		}
		groups[book[category]].push(book);
	}
	return groups;
}
 
const MainPage = () => {
	const dispatch = useDispatch();
	const books: IBook[] = useSelector((state: IStore) => state.list.books);
	const isLoading = useSelector((state: IStore) => state.list.isLoading);
	const [groups, setGroups] = useState<any>();
	const [category, setCategory] = useState<Categories>(Categories.YEAR);
	useEffect(() => {
		dispatch(fetchBooks('https://comicclan.vett.io/comics'));
	}, [dispatch])

	useEffect(() => {
		setGroups(groupBooks(books, category));
	}, [books, category])

	const handleChooseCategory = (cat: Categories) => {
		setCategory(cat);
	}

	const searchBooks = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGroups(groupBooks(books.filter(book => book.name.toLowerCase().includes(event.target.value.toLowerCase())), category));
	}

	const fakeList = [];
	
	for (let i = 1; i <= 30; i++) {
		fakeList.push(i);
	}
	
	return (
		<Grid>
			<TopBar />
			<GridItem>
				<Grid heightSub={10}>
					<Grid className="header">
						<GridItem height={10} className="search-box content">
							<Search setQuery={searchBooks} />
						</GridItem>
						<GridItem height={10} className="content nav">
							<Grid>
								<Nav handler={handleChooseCategory} current={category} />
							</Grid>
						</GridItem>
					</Grid>
					<GridItem>
						<Grid columns={5} rowGap={3} className={isLoading ? 'book-list fake-list' : 'content category-list'}>
							{isLoading ? fakeList.map(i => (<FakeBook key={i} />)) : groups && Object.keys(groups).reverse().map((key: string) => (
								<Category key={key} group={key} books={groups[key]} />
							))}
						</Grid>
					</GridItem>
				</Grid>
			</GridItem>
			<Footer/>
		</Grid>
	);
}

export default MainPage;