import styled from "styled-components";

const ListaStyled = styled.ul`
	display: flex;
	list-style: none;
	align-items: center;
	gap: 35px;
	margin: 0;
	padding: 0;
`;

const ListaRedes = () => {
	return (
		<ListaStyled>
			<li>
				<a href="#">
					<img src="images/sociais/facebook.svg" alt="Icone do Facebook" />{" "}
				</a>
			</li>
			<li>
				<a href="#">
					<img src="images/sociais/twitter.svg" alt="Icone do Twitter" />{" "}
				</a>
			</li>
			<li>
				<a href="#">
					<img src="images/sociais/instagram.svg" alt="Icone do Instagram" />
				</a>
			</li>
		</ListaStyled>
	);
};

export default ListaRedes;
