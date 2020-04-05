import React from 'react';
import styled from 'styled-components';
import IBook from '../../models/IBook';

const Tile = styled.div`
	@keyframes loading {
		from {opacity: 0;}
		to {opacity: 1;}
	}
	display: flex;
	width: 160px;
	height: 320px;
	position: relative;
	border-radius: 4px;
	margin: auto;
	padding: 3px;
	font-size: 2rem;
	figure {
		height: 300px;
		width: 160px;
		margin: 0;
		color: #fff;
		img {
			max-width: 100%;
			background: linear-gradient(180deg, #9C5A9D 0%, rgba(241, 84, 84, 0.48137) 100%);
			box-shadow: 2px 2px 4px rgba(34, 34, 34, 0.7);
		}
		figcaption {
			position: absolute;
			bottom: 0;
			font-weight: 500;
			font-size: 12px;
			line-height: 19px;
			animation: loading;
			animation-duration: 1s;
			p.book-name {
				font-size: 16px;
				line-height: 26px;
			}
		}
	}
	animation: loading;
	animation-duration: 1s;
`;

interface IProps {
	book: IBook;
}

const BookItem = ({ book }: IProps) => {
	return (
		<Tile>
			<figure>
				<img alt="book cover" src={book.image} />
				<figcaption>
					<p className="book-name">{book.name}</p>
					<p className="book-owner">Owned by {book.owner}</p>
				</figcaption>
			</figure>
		</Tile>
	)
}

export const FakeBook = styled.div`
	@keyframes loading {
		from {background: rgba(200, 200, 200, .9);}
		to {background: rgba(200, 200, 200, .1);}
	}
	width: 160px;
	height: 300px;
	border-radius: 4px;
	margin-top: 2rem;
	padding: 3px;
	font-size: 2rem;
	background: red;
	position: relative;
	animation: loading 3s;
	animation-iteration-count: infinite;
`;
export default BookItem;