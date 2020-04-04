import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from './page-elements/Search';
import Nav from './page-elements/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../actions/Actions';
import IBook from '../models/IBook';
import IStore from '../store/IStore';
import Categories from './page-elements/Categories';
import Category from './page-elements/Category';

interface ItemProps extends React.HTMLAttributes<HTMLElement>{
	column?: string;
	height?: number;
	background?: string;
	padding?: number;
	className?: string;
}

interface ContainerProps {
	heightSub?: number;
	columns?: number;
	rowGap?: number;
	columnGap?: number;
}

const Grid = styled.div.attrs<ContainerProps>(({ heightSub, columns, rowGap }) => ({
	heightSub, columns, rowGap
})) <ContainerProps>`
	display: grid;
	grid-template-columns: repeat(${({ columns }) => columns || 12}, auto);
	grid-auto-rows: min-content;
	grid-row-gap: ${({ rowGap }) => rowGap || 0}em;
	font-family: Roboto;
	font-style: normal;
	color: #5A5A5A;
	background-color: #333;
	min-height: ${({ heightSub }) => heightSub ? `calc(100vh - ${heightSub}px)` : '100%'};
	.top-bar {
		display: flex;
		align-items: center;
		padding: 1.2%;
		margin: 0;
	}
	.search-box {
		display: flex;
		align-items: center;
		width: 100%;
		margin: auto;
	}
	.nav {
		margin: 0;
		width: 100%;
	}
	.content {
		max-width: 1100px;
		margin: auto;
	}
	.category-list {
		grid-column: 1/13;
		display: grid;
		grid-template-columns: repeat(5, auto)
		grid-auto-rows: min-content;
		justify-content: space-between;
	}
	.header {
		grid-column: 1/13;
		position: sticky;
		top: 0;
	}
	footer {
		grid-column: 1/13;
		padding: 2px;
		margin-top: 3em;
		background: #53535377;
		text-align: center;
		color: #fff;
	}
`;
const GridItem = styled(({ column, className, height, background, ...props } :ItemProps) => <div className={className} {...props} />)`
	grid-column: ${({ column }) => column || '1/13'};
	min-height: ${({ height }) => height || 0}vh;
	padding: 3px;
	background: ${({ background }) => background || 'transparent'};
`;

const groupBooks = (books: IBook[], category: Categories): any => {
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
	const [groups, setGroups] = useState<any>();
	const [category, setCategory] = useState(Categories.YEAR);
	useEffect(() => {
		dispatch(fetchBooks('https://comicclan.vett.io/comics'));
	}, [dispatch])

	useEffect(() => {
		setGroups(groupBooks(books, category));
	}, [books, category])

	const handleChooseCategory = (cat: Categories) => {
		if (cat === Categories.RANDOM) {
			setCategory([Categories.ARTIST, Categories.YEAR, Categories.WRITER, Categories.OWNER][Math.floor(Math.random() * 4)]);
			return;
		}
		setCategory(cat);
	}

	console.log(groups);
	return (
		<Grid>
			<GridItem className="top-bar" height={8} background="#535353">
				<svg width="178" height="32" viewBox="0 0 178 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M50.18 16.01C51.08 16.73 52.91 17.24 54.05 17.24C57.62 17.24 60.68 14.51 60.68 10.88C60.68 6.98 57.26 4.37 52.97 4.37C46.64 4.37 42.2 9.44 42.2 15.62C42.2 22.4 46.85 26.27 53.39 26.27C55.64 26.27 57.68 25.7 59.48 24.32V19.94C58.43 21.65 55.34 22.79 53.39 22.79C49.01 22.79 45.95 20.39 45.95 15.83C45.95 11.84 48.71 7.88 52.97 7.88C54.74 7.88 56.93 8.78 56.93 10.88C56.93 12.53 55.49 13.73 53.9 13.73C53.09 13.73 52.28 13.34 51.68 12.8L50.18 16.01ZM74.72 20.33C74.72 17.03 72.05 14.33 68.75 14.33C65.45 14.33 62.78 17.03 62.78 20.33C62.78 23.6 65.45 26.3 68.75 26.3C72.05 26.3 74.72 23.6 74.72 20.33ZM68.75 23.39C70.46 23.39 71.84 22.01 71.84 20.33V20.18C71.51 20.36 71.12 20.48 70.73 20.48C69.44 20.48 68.36 19.43 68.36 18.14C68.36 17.81 68.42 17.51 68.54 17.24C66.89 17.33 65.78 18.74 65.78 20.33C65.78 22.01 67.04 23.39 68.75 23.39ZM95.18 26.27C96.08 26.27 97.07 26.06 97.76 25.52V22.76C97.43 23.06 96.98 23.24 96.53 23.24C95.87 23.24 95.3 22.85 95.3 22.16V18.5C95.3 16.04 93.5 14.36 91.07 14.36C89.72 14.36 88.31 14.84 87.65 16.1C86.9 14.99 85.73 14.36 84.38 14.36C83.27 14.36 82.13 14.78 81.44 15.71V14.6H78.02V26H81.44V19.28C81.65 18.14 82.34 17.18 83.48 17.18C84.47 17.18 84.95 17.96 84.95 18.86V26H88.37V19.31C88.58 18.2 89.27 17.18 90.41 17.18C91.4 17.18 91.91 17.96 91.91 18.86V22.61C91.91 24.47 93.2 26.27 95.18 26.27ZM101.57 12.26C100.25 12.26 99.2 11.18 99.2 9.89C99.2 8.6 100.25 7.52 101.57 7.52C102.86 7.52 103.91 8.6 103.91 9.89C103.91 11.18 102.86 12.26 101.57 12.26ZM103.13 26.27C104 26.27 104.99 26.06 105.71 25.52V22.76C105.38 23.06 104.93 23.24 104.45 23.24C103.82 23.24 103.25 22.85 103.25 22.16V14.6H99.86V22.61C99.86 24.47 101.15 26.27 103.13 26.27ZM110.03 20.21C110.03 22.1 111.53 23.15 113.3 23.15C114.38 23.15 115.7 22.88 116.54 22.16V25.61C115.61 26.06 114.32 26.27 113.3 26.27C109.67 26.27 106.91 23.96 106.91 20.21C106.91 17.09 109.31 14.33 112.52 14.33C114.62 14.33 116.81 15.14 116.81 17.6C116.81 18.95 115.88 19.94 114.53 19.94C113.51 19.94 112.37 19.01 112.37 17.96C112.37 17.78 112.4 17.6 112.43 17.45C110.75 17.48 110.03 18.71 110.03 20.21ZM127.19 16.01C128.09 16.73 129.92 17.24 131.06 17.24C134.63 17.24 137.69 14.51 137.69 10.88C137.69 6.98 134.27 4.37 129.98 4.37C123.65 4.37 119.21 9.44 119.21 15.62C119.21 22.4 123.86 26.27 130.4 26.27C132.65 26.27 134.69 25.7 136.49 24.32V19.94C135.44 21.65 132.35 22.79 130.4 22.79C126.02 22.79 122.96 20.39 122.96 15.83C122.96 11.84 125.72 7.88 129.98 7.88C131.75 7.88 133.94 8.78 133.94 10.88C133.94 12.53 132.5 13.73 130.91 13.73C130.1 13.73 129.29 13.34 128.69 12.8L127.19 16.01ZM146.54 25.52C145.85 26.06 144.86 26.27 143.96 26.27C141.98 26.27 140.69 24.47 140.69 22.61V4.7H144.11V22.16C144.11 22.85 144.65 23.24 145.31 23.24C145.76 23.24 146.21 23.06 146.54 22.76V25.52ZM162.68 22.76C162.32 23.06 161.87 23.24 161.42 23.24C160.76 23.24 160.22 22.85 160.22 22.16V14.6H156.8V15.92C155.9 14.84 154.67 14.36 153.26 14.36C149.9 14.36 147.74 17.09 147.74 20.3C147.74 23.54 149.9 26.27 153.26 26.27C154.88 26.27 156.26 25.61 157.13 24.23C157.67 25.52 158.84 26.27 160.07 26.27C160.97 26.27 161.96 26.06 162.68 25.52V22.76ZM154.07 23.42C155.27 23.42 156.38 22.61 156.8 21.47V19.13C156.38 17.99 155.3 17.18 154.07 17.18C152.39 17.18 151.13 18.65 151.13 20.3C151.13 21.95 152.39 23.42 154.07 23.42ZM177.59 22.76C177.23 23.06 176.78 23.24 176.33 23.24C175.7 23.24 175.13 22.85 175.13 22.16V18.5C175.13 16.25 173.48 14.36 171.14 14.36C170.03 14.36 168.89 14.78 168.2 15.71V14.6H164.78V26H168.2V19.28C168.44 18.11 169.1 17.18 170.24 17.18C171.23 17.18 171.71 17.96 171.71 18.86V22.61C171.71 24.47 173 26.27 175.01 26.27C175.88 26.27 176.87 26.06 177.59 25.52V22.76Z" fill="#F15454" />
					<path fillRule="evenodd" clipRule="evenodd" d="M27.4999 2.00001C28.5909 2.0044 29.6796 2.09803 30.7548 2.27993C31.4496 2.39691 31.9677 2.97322 31.9998 3.66483V21.3444C32.0063 21.7827 31.8138 22.201 31.4746 22.4858C31.1353 22.7706 30.6846 22.8922 30.2448 22.8177C25.8799 22.1254 21.4155 23.199 17.87 25.7937L17.69 25.8969H17.525C17.189 26.0344 16.811 26.0344 16.475 25.8969H16.31L16.13 25.7937C12.5597 23.2559 8.09761 22.2413 3.75511 22.9797C3.31535 23.0543 2.86463 22.9327 2.52539 22.6479C2.18615 22.3631 1.99363 21.9447 2.00013 21.5064V3.82689C1.9894 3.10177 2.51751 2.47681 3.24512 2.3536C4.32032 2.17169 5.40907 2.07806 6.50009 2.07367C10.215 2.04867 13.8592 3.07135 17 5.02026C20.1327 3.04542 23.7774 1.99701 27.4999 2.00001ZM6.42854 19.8111C9.415 19.8092 12.3569 20.5605 15 22V7.68346C12.4574 5.94372 9.47624 5.0178 6.42854 5.02129C5.95275 4.9929 5.47577 4.9929 4.99997 5.02129V19.8111H6.42854ZM29 19.8187H27.5714C24.5849 19.8168 21.643 20.5655 19 22V7.67415C21.5425 5.94045 24.5237 5.01774 27.5714 5.02122C28.0472 4.99293 28.5242 4.99293 29 5.02122V19.8187ZM27.4861 26C28.5756 26.0042 29.663 26.0945 30.7367 26.2698C31.1306 26.329 31.4833 26.5347 31.7166 26.8412C31.95 27.1477 32.0448 27.5298 31.9801 27.9028C31.8216 28.6705 31.0379 29.1721 30.2274 29.0246C25.8906 28.3128 21.4344 29.2908 17.8688 31.7368C17.3488 32.0877 16.6512 32.0877 16.1311 31.7368C12.5656 29.2908 8.10932 28.3128 3.77253 29.0246C2.96206 29.1721 2.17835 28.6705 2.01986 27.9028C1.95511 27.5298 2.04993 27.1477 2.28331 26.8412C2.51668 26.5347 2.86936 26.329 3.26321 26.2698C4.33699 26.0945 5.42431 26.0042 6.51389 26C10.2314 25.9971 13.8714 27.0076 17 28.911C20.1285 27.0076 23.7685 25.9971 27.4861 26Z" fill="#F15454" />
				</svg>
			</GridItem>
			<GridItem>
				<Grid heightSub={7}>
					<Grid className="header">
						<GridItem height={10} className="search-box content">
							<Search query={''} />
						</GridItem>
						<GridItem height={10} className="content nav">
							<Grid>
								<Nav handler={handleChooseCategory} current={category} />
							</Grid>
						</GridItem>
					</Grid>
					<GridItem>
						<Grid columns={5} rowGap={3} className="content category-list">
							{groups && Object.keys(groups).reverse().map((key: string) => (
								<Category key={key} group={key} books={groups[key]} />
							))}
						</Grid>
					</GridItem>
				</Grid>
			</GridItem>
			<footer>
				Vett.io {new Date().getFullYear()}
			</footer>
		</Grid>
	);
}

export default MainPage;