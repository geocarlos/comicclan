import React, { useEffect } from 'react';
import { Grid, GridItem } from './shared-styled-elements/StyledElements';
import TopBar from './page-elements/TopBar';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import IBook from '../models/IBook';
import { useSelector, useDispatch } from 'react-redux';
import IStore from '../store/IStore';
import { fetchBooks } from '../actions/Actions';
import Stars from './page-elements/Stars';

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
`;

const Description = styled(({...props}) => <div {...props}/>)`
	color: #fff;
	margin: 2rem 2rem 0 0;
	font-family: Roboto;
	font-style: normal;
	.book-name {
		font-weight: 500;
		font-size: 29px;
		line-height: 37px;
	}
	.other-info {
		margin: 1rem 0;
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
		grid-column-gap: 1.5rem;
	}
`;

const BackLink = styled(({...props}) => <div {...props}>{'< '}<Link to='/books'>{'Back to collection'}</Link></div>)`
	margin: 2rem 0 0 2rem;
`

const BookPage = () => {
	const params = useParams<any>();
	const dispatch = useDispatch();
	const books: IBook[] = useSelector((state: IStore) => state.list.books);
	const book = books.filter(book => book.name.includes(params.bookName))[0];

	useEffect(() => {
		dispatch(fetchBooks('https://comicclan.vett.io/comics'));
	})

	return (
		<Grid heightSub={0.01}>
			<TopBar />
			<BackLink />
			<GridItem column="1/13">
				{book && <Grid columns={2}>
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
				</Grid>}
				{}
			</GridItem>
		</Grid>
	)
}

export default BookPage;