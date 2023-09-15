import styled from "styled-components";
import search from "./search.png";

const ContainerStyled = styled.div`
	position: relative;
	display: inline-block;
`;

const InputStyled = styled.input`
	height: 3.5rem;
	color: #d9d9d9;
	font-size: 1.25rem;
	font-weight: 400;
	border: 2px solid;
	border-color: #c98cf1;
	border-radius: 10px;
	background-color: transparent;
	padding: 0.75rem 1rem;
	line-height: 1.25rem;
	box-sizing: border-box;
	width: 37.625rem;
	input::placeholder {
		color: #d9d9d9;
	}
`;

const IconeLupa = styled.img`
	position: absolute;
	top: 10px;
	right: 10px;
	width: 32px;
	height: 32px;
`;

const CampoTexto = props => {
	return (
		<ContainerStyled>
			<InputStyled placeholder="O que você procura?" {...props} />
			<IconeLupa src={search} alt="ícone de lupa" />
		</ContainerStyled>
	);
};

export default CampoTexto;
