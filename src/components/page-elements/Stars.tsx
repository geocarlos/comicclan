import React from 'react';
import styled from 'styled-components';

export const FullStar = () => {
	return (
		<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_d)">
				<path d="M16.5 21.0875L8.775 25.75L10.825 16.9625L4 11.05L12.9875 10.2875L16.5 2L20.0125 10.2875L29 11.05L22.175 16.9625L24.225 25.75L16.5 21.0875Z" fill="url(#paint0_linear)" />
			</g>
			<defs>
				<filter id="filter0_d" x="0" y="0" width="33" height="31.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
					<feOffset dy="2" />
					<feGaussianBlur stdDeviation="2" />
					<feColorMatrix type="matrix" values="0 0 0 0 0.133333 0 0 0 0 0.133333 0 0 0 0 0.133333 0 0 0 0.7 0" />
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
				</filter>
				<linearGradient id="paint0_linear" x1="29" y1="2" x2="29" y2="25.75" gradientUnits="userSpaceOnUse">
					<stop stopColor="#F4C782" />
					<stop offset="1" stopColor="#E4964B" />
				</linearGradient>
			</defs>
		</svg>
	)
}

export const EmptyStar = () => {
	return (
		<svg width="33" height="32" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.5 19.0875L4.775 23.75L6.825 14.9625L0 9.05L8.9875 8.2875L12.5 0L16.0125 8.2875L25 9.05L18.175 14.9625L20.225 23.75L12.5 19.0875Z" fill="#777777" />
		</svg>
	)
}

interface IProps {
	rating: number;
}

const ratingToStars = (rating: number) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		if (rating - i >= 0) {
			stars.unshift(<FullStar key={i} />);
		} else {
			stars.push(<EmptyStar key={i} />)
		}
	}
	return stars;
}

const Rating = styled.div`
	display: inline-flex;
	flex-wrap: no-wrap;
	align-items: center;
`;

const Stars = ({ rating }: IProps) => {
	return (
		<Rating>
			{ratingToStars(rating)}
		</Rating>
	)
}

export default Stars;