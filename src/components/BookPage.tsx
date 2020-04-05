import React, { useEffect } from 'react';
import { Grid, GridItem, Footer } from './shared-styled-elements/StyledElements';
import TopBar from './page-elements/TopBar';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import IBook from '../models/IBook';
import { useSelector, useDispatch } from 'react-redux';
import IStore from '../store/IStore';
import { fetchBooks } from '../actions/Actions';
import Stars from './page-elements/Stars';
import BookItem from './page-elements/BookItem';

const BookContainer = styled.div`
	color: #CCC;
	background-color: #333;
	min-height: 100vh;
	max-width: 100%;
	a {
		color: #9A9A9A;
		&:hover {
			#5A5A5A;
		}
		&:visited{
			#5A5A5A;
		}
	}
`;

const Cover = styled.div`
	margin: 2rem;
	height: 390px;
	width: 255px;
	background: linear-gradient(180deg, #DDD 0%, rgba(84, 84, 84, 0.48137) 100%);
	box-shadow: 2px 2px 4px rgba(34, 34, 34, 0.7);
	border-radius: 4px;
	img {
		width: 100%;
	}
	@media (max-width: 800px) {
		margin: 1rem;
		height: 185px;
		width: 127px;
	}
`;

const Description = styled(({...props}) => <div {...props}/>)`
	margin: 2rem 2rem 0 0;
	font-family: Roboto;
	font-style: normal;
	.book-name {
		font-weight: 500;
		font-size: 29px;
		line-height: 37px;
	}
	.other-info {
		margin: 1rem 1rem 0 0;
		font-weight: 500;
		font-size: 16px;
		line-height: 25px;
	}
	.summary {
		white-space: pre-line;
	}
	.name-and-rating {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 1rem;
	}
	@media (max-width: 800px) {
		margin: 1rem 1rem 0 0;
		.summary {
			grid-column: 1 / 3;
		}
	}
`;

const BackLink = styled(({...props}) => <div {...props}>{'< '}<Link to='/books'>{'Back to collection'}</Link></div>)`
	margin: 2rem 0 0 2rem;
	@media (max-width: 800px) {
		margin: 1rem 0 0 1rem;
	}
`

const Heading = styled.div`
	grid-column: 1/6;
	margin: 2rem;
	color: #CCC;
	font-weight: 500;
	font-size: 29px;
	line-height: 37px;
`;

const RandomBooks = styled(({className, ...props}) => <div className={className} {...props} />)`
	grid-column: 1/13;
	margin: 2rem !important;
	@media (max-width: 800px) {
		margin: 1rem !important;
	}
`

const Page = styled.div`
	grid-column: 1/13;
	display: grid;
	grid-template-columns: repeat(2, auto);
	grid-auto-rows: min-content;
	grid-row-gap: 2rem;
	font-family: Roboto;
	font-style: normal;
	.summary-m {
		display: none;
	}
	@media (max-width: 800px) {
		.summary-m {
			display: block;
			white-space: pre-line;
			margin: 0 1rem;
			grid-column: 1 / 3;
		}
		.summary {
			display: none;
		}
		.name-and-rating {
			grid-template-columns: 1fr;
			grid-column-gap: .5rem;
		}
	}
`;

const BookPage = () => {
	const params = useParams<any>();
	const dispatch = useDispatch();
	const books: IBook[] = useSelector((state: IStore) => state.list.books);
	const book = books.filter(book => book.name.includes(params.bookName))[0];
	const randomBooks = books.filter(book => !book.name.includes(params.bookName)).sort(() => 0.5 - Math.random()).slice(0, 12);

	useEffect(() => {
		dispatch(fetchBooks('https://comicclan.vett.io/comics'));
	}, [dispatch])

	return (
		<BookContainer>
			<TopBar />
			<BackLink />
			<GridItem>
				{book && <Page>
					<Cover>
						<img src={book.image} alt="book cover"/>
					</Cover>
					<Description>
						<div className="name-and-rating">
							<div className="book-name">{book.name} ({book.year})</div>
							<Stars rating={book.rating} />
						</div>
						<div className="other-info">
							<p>Writer: <b>{book.writer}</b></p>
							<p>Artist: <b>{book.artist}</b></p>
							<p>Publication: <b>{book.publication}</b></p>
							<p>Owner: <b>{book.owner}</b></p>
						</div>
						<p className="summary">{book.summary}</p>
					</Description>
					<p className="summary-m">{book.summary}</p>
				</Page>}
			</GridItem>
			<GridItem column="1/13">
				<hr />
				<Grid columns={5}>
					<Heading>Other Random Books</Heading>
					<RandomBooks className="book-list">
						{randomBooks && randomBooks.map(book => (
							<BookItem key={book.name} book={book} />
						))}
					</RandomBooks>
				</Grid>
			</GridItem>
			<Footer/>
		</BookContainer>
	)
}

export default BookPage;