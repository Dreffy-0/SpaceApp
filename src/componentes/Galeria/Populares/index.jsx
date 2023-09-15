import styled from "styled-components";
import Titulo from "../../Titulo";

import fotos from "./fotos-populares.json";

const ColunaFotos = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

const Imagem = styled.img`
	max-width: 212px;
	border-radius: 20px;
`;

const BotaoVerMais = styled.button`
	border-radius: 10px;
	font-size: 1.25rem;
	font-weight: 400;
	padding: 14px 29px;
	background-color: transparent;
	border: 2px solid #c98cf1;
	color: #fff;
	cursor: pointer;
	margin-top: 1.5rem;
	width: 100%;
`;

const Populares = () => {
	return (
		<section>
			<Titulo $align="center">Populares</Titulo>
			<ColunaFotos>
				{fotos.map(foto => (
					<Imagem key={foto.id} src={foto.path} alt={foto.alt} />
				))}
			</ColunaFotos>
			<BotaoVerMais>Ver mais</BotaoVerMais>
		</section>
	);
};

export default Populares;
