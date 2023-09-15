import styled from "styled-components";

const FigureStyled = styled.figure`
	background-image: ${props => `url(${props.$backgroundImage})`};
	flex-grow: 1;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	min-height: 20.5rem;
	margin: 0;
	border-radius: 20px;
	max-width: 100%;
`;

const TituloStyled = styled.h1`
	font-weight: 400;
	font-size: 2.5rem;
	line-height: 48px;
	color: #fff;
	max-width: 18.75rem;
	padding: 0 4rem;
`;

const Banner = ({ texto, backgroundImage }) => {
	return (
		<FigureStyled $backgroundImage={backgroundImage}>
			<TituloStyled>{texto}</TituloStyled>
		</FigureStyled>
	);
};

export default Banner;
