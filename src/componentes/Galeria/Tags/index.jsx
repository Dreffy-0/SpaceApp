import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.section`
	display: flex;
	align-items: center;
	gap: 64px;
	margin-top: 3.5rem;
`;

const TagTituloStyled = styled.h3`
	color: #d9d9d9;
	font-size: 1.5rem;
	margin: 0;
	font-weight: 400;
`;

const TagStyled = styled.button`
	font-size: 1.5rem;
	color: #fff;
	background: rgba(217, 217, 217, 0.3);
	border-radius: 10px;
	padding: 10px 8px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	box-sizing: border-box;
	border: 2px solid transparent;
	&:hover {
		border-color: #c98cf1;
	}
`;

const Div = styled.div`
	display: flex;
	gap: 24px;
	justify-content: end;
`;

const Tags = ({ setTag }) => {
	return (
		<TagsContainer>
			<TagTituloStyled>Busque por tags:</TagTituloStyled>
			<Div>
				{tags.map(tag => (
					<TagStyled key={tag.id} onClick={() => setTag(tag.tag)}>
						{tag.titulo}
					</TagStyled>
				))}
			</Div>
		</TagsContainer>
	);
};

export default Tags;
