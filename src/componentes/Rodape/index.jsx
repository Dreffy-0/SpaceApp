import styled from "styled-components";
import ListaRedes from "./ListaRedes";

const RodapeStyled = styled.footer`
	margin-top: 4.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1.5rem;
	background-color: #04244f;
	height: 5rem;
	p {
		color: #fff;
		font-weight: 500;
		font-size: 1rem;
	}
`;

const Rodape = () => {
	return (
		<RodapeStyled>
			<ListaRedes />
			<p>Desenvolvido por Dreffy-0</p>
		</RodapeStyled>
	);
};

export default Rodape;
