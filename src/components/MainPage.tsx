import React from 'react';
import styled from 'styled-components';
import BookItem from './minor/BookItem';

interface ItemProps {
	column?: string;
	height?: number;
}

interface ContainerProps {
	heightSub?: number;
	columns?: number;
	rowGap?: number;
	columnGap?: number;
}

const Grid = styled.div.attrs<ContainerProps>(({ heightSub, columns, rowGap }) => ({ 
	heightSub, columns, rowGap 
}))<ContainerProps>`
	display: grid;
	grid-template-columns: repeat(${({columns}) => columns || 12}, auto);
	grid-auto-rows: min-content;
	grid-row-gap: ${({rowGap}) => rowGap || 0}em;
	background-color: grey;
	min-height: ${({heightSub}) => heightSub ? `calc(100hv - ${heightSub})vh` : '100vh'};
`;
const GridItem = styled.div.attrs<ItemProps>(({ column, height }) => ({
	column,	height
}))<ItemProps>`
	grid-column: ${({column}) => column || '1/13'};
	min-height: ${({height}) => height || 0}vh;
	border: solid thin lightgrey;
	padding: 3px;
`;

const fakeList: number[] = [];

for(let i = 1; i < 31; i++) {
	fakeList.push(i);
}

const MainPage = () => {
	return (
		<Grid>
			<GridItem height={7}>
				Top bar
			</GridItem>
			<GridItem>
				<Grid heightSub={7}>
					<GridItem height={10}>
						Search input
					</GridItem>
					<GridItem height={7}>
						Filters
					</GridItem>
					<GridItem>
						<Grid columns={5} rowGap={3}>
							{fakeList.map(n => (
								<BookItem id={n} />
							))}
						</Grid>
					</GridItem>
				</Grid>
			</GridItem>
		</Grid>
	);
}

export default MainPage;