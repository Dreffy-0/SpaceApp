import { styled } from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderStyled = styled.header`
	padding: 3.75rem 0;
	display: flex;
	justify-content: space-between;
	img {
		max-width: 212px;
	}
`;

const Cabecalho = () => {
	return (
		<HeaderStyled>
			<img src="/images/logo.png" alt="Logo Space App" />
			<CampoTexto />
		</HeaderStyled>
	);
};

export default Cabecalho;
