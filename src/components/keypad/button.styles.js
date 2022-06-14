import styled from "styled-components";

export const CalcButton = styled.button`
	border-radius: 10px;
    background-color: #503cd1;
	border-color: transparent;
    width: 100%;
	height: 75px;
	color: #ffffff;
	font-weight: bold;
	font-size: 20px;
	cursor: pointer;
	box-shadow: 2px 2px 2px black;

	&:hover {
		background-color: #3d2bb8 !important;
	}
`;

export const EqualsButton = styled(CalcButton)`
    background-color: royalblue;
    grid-column: 3/ 5;
      
    &:hover {
        background-color: #3658bf !important;
      }
`;

export const OpenAdditionalButton = styled.button`
      background-color: #28313b;
      border-color: transparent;
      cursor: pointer;
      width: 25px;
      height: 40px;
      position: absolute;
      top: 50%;
      right: -25px;
`;
