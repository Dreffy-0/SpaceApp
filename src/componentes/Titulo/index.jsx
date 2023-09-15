import styled from "styled-components";

const Titulo = styled.h2`
	color: #7b78e5;
	font-size: 2rem;
	font-weight: 400;
	text-align: ${props => (props.$align ? props.$align : "left")};
`;

export default Titulo;
