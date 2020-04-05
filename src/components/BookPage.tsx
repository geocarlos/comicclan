import React from 'react';
import { Grid, GridItem } from './shared-styled-elements/StyledElements';
import TopBar from './page-elements/TopBar';
import { Link } from 'react-router-dom';

const BookPage = () => {
	return (
		<Grid>
			<TopBar />
			<Link to='/books'>{'< Back to collection'}</Link>
			<GridItem>Book Page</GridItem>
		</Grid>
	)
}

export default BookPage;