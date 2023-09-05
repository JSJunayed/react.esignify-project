import styled from 'styled-components';

export const ProjectSection = styled.div`
	padding: 100px 0;
    padding-bottom: 4px;
	position: relative;
	margin: 0 auto;

	@media screen and (max-width: 768px) {
		padding: 70px 0;
		margin-top: 10rem;
	}
`;

export const ProjectTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;

	&:before {
		width: 40px;
		height: 2px;
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		background-color: #ef4b6c;
		transform: translateX(-50%);
	}
`;

export const ProjectTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
`;

export const ProjectText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 1.3rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
