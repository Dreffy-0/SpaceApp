import styled from "styled-components";
import Tags from "./Tags";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
	display: flex;
	gap: 24px;
`;

const SecaoFluida = styled.section`
	flex-grow: 1;
`;

const ImagesContainer = styled.section`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 24px;
`;

const Galeria = ({ fotos = [], setTag, aoFotoSelecionada, aoAlternarFavorito }) => {
	return (
		<>
			<Tags setTag={setTag} />
			<GaleriaContainer>
				<SecaoFluida>
					<Titulo>Navegue pela galeria</Titulo>
					<ImagesContainer>
						{fotos.map(foto => (
							<Imagem
								aoZoomSolicitado={aoFotoSelecionada}
								aoAlternarFavorito={aoAlternarFavorito}
								key={foto.id}
								foto={foto}
							/>
						))}
					</ImagesContainer>
				</SecaoFluida>
				<Populares />
			</GaleriaContainer>
		</>
	);
};

export default Galeria;
