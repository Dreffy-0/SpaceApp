import styled from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const Figure = styled.figure`
	width: ${props => (props.$expandida ? "90%" : "550px")};
	max-width: 100%;
	margin: 0;
	display: flex;
	flex-direction: column;
	& > img {
		max-width: 100%;
		border-radius: 20px 20px 0 0;
	}
	figcaption {
		background-color: #001634;
		border-radius: 0 0 20px 20px;
		color: #ffffff;
		box-sizing: border-box;
		padding: 12px;
		h3 {
			font-family: "GandhiSansBold";
		}
		h4 {
			flex-grow: 1;
			font-weight: normal;
		}
		h3,
		h4 {
			margin: 0;
			font-size: 1rem;
		}
	}
	@media (max-width: 1400px) {
		width: ${props => (props.$expandida ? "90%" : "47%")};
	}
`;

const Rodape = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {
	const IconeFavorito = foto.favorita ? "/icons/favorito-ativo.png" : "/icons/favorito.png";

	/*
	?Outra forma de fazer a mesma coisa
	let IconeFavorito = 'icons/favorito.png';
	if(foto.favorita) {
		IconeFavorito = 'icons/favorito-ativo.png'
	}
	 */

	return (
		<Figure $expandida={expandida} id={`foto-${foto.id}`}>
			<img src={foto.path} alt={foto.alt} />
			<figcaption>
				<h3>{foto.titulo}</h3>
				<Rodape>
					<h4>{foto.fonte}</h4>
					<BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
						<img src={IconeFavorito} alt="Icone de favorito" />
					</BotaoIcone>
					{!expandida && (
						<BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
							<img src="/icons/expandir.png" alt="Icone de expandir" />
						</BotaoIcone>
					)}
				</Rodape>
			</figcaption>
		</Figure>
	);
};

export default Imagem;
