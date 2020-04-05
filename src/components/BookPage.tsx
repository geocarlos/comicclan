import React from 'react';
import { Grid, GridItem } from './shared-styled-elements/StyledElements';
import TopBar from './page-elements/TopBar';

const BookPage = () => {
	return (
		<Grid>
			<TopBar />
			<GridItem>Book Page</GridItem>
		</Grid>
	)
}

export default BookPage;