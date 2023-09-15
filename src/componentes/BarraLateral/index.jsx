import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaStyled = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	width: 13.25rem;
`;

const BarraLateral = () => {
	return (
		<aside>
			<nav>
				<ListaStyled>
					<ItemNavegacao
						iconeAtivo="/icons/home-ativo.png"
						iconeInativo="/icons/home-inativo.png"
						ativo={true}
					>
						Início
					</ItemNavegacao>
					<ItemNavegacao
						iconeAtivo="/icons/mais-vistas-ativo.png"
						iconeInativo="/icons/mais-vistas-inativo.png"
					>
						Mais vistos
					</ItemNavegacao>
					<ItemNavegacao
						iconeAtivo="/icons/mais-curtidas-ativo.png"
						iconeInativo="/icons/mais-curtidas-inativo.png"
					>
						Mais curtidas
					</ItemNavegacao>
					<ItemNavegacao iconeAtivo="/icons/novas-ativo.png" iconeInativo="/icons/novas-inativo.png">
						Novas
					</ItemNavegacao>
					<ItemNavegacao
						iconeAtivo="/icons/surpreenda-me-ativo.png"
						iconeInativo="/icons/surpreenda-me-inativo.png"
					>
						Supreenda-me
					</ItemNavegacao>
				</ListaStyled>
			</nav>
		</aside>
	);
};

export default BarraLateral;
