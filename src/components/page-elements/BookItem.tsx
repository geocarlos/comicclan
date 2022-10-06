import React from 'react';
import styled from 'styled-components';
import IBook from '../../models/IBook';
import { Link } from 'react-router-dom';

const Tile = styled.div`
	display: flex;
	width: 160px;
	height: 320px;
	position: relative;
	border-radius: 4px;
	margin: auto;
	padding: 3px;
	font-size: 2rem;
	figure {
		width: 160px;
		height: 320px;
		margin-bottom: 1rem;
		color: #fff;
		img {
			@keyframes imgShow {
				from {opacity: 0;}
				to {opacity: 1;}
			}
			max-width: 100%;
			background: linear-gradient(180deg, #9C5A9D 0%, rgba(241, 84, 84, 0.48137) 100%);
			box-shadow: 2px 2px 4px rgba(34, 34, 34, 0.7);
			animation: imgshow;
			animation: imgShow 3s;
			animation-iteration-count: 1;
		}
		figcaption {
			position: absolute;
			height: 22%;
			bottom: 0;
			font-weight: 500;
			font-size: 12px;
			line-height: 19px;
			p.book-name {
				font-size: 16px;
				line-height: 26px;
			}
			p.book-owner {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
	@media (max-width: 800px) {
		width: 140px;
		height: 280px;
		margin-bottom: 1rem;
		figure {
			width: 140px;
			height: 280px;
		}
		figcaption {
			height: 10%;
		}
	}
`;

interface IProps {
	book: IBook;
}

const BookItem = ({ book }: IProps) => {
	return (
		<Tile>
			<Link to={`/books/${book.name}`}>
				<figure>
					<img alt="book cover" src={book.image} />
					<figcaption>
						<p className="book-name">{book.name}</p>
						<p className="book-owner">Owned by {book.owner}</p>
					</figcaption>
				</figure>
			</Link>
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
	@media (max-width: 800px) {
		width: 140px;
		height: 240px;
		margin-bottom: 3rem;
	}
`;
export default BookItem;