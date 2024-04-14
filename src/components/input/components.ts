import styled from 'styled-components'

export const StyledInput = styled.input<{ error?: boolean }>`
	width: 252px;
	height: 30px;
	border: ${props => props.error ? '1px solid red' : '1px solid white'};
	outline: none;
	margin-bottom: 5px;
	padding: 4px 9px 4px 9px;
`

export const StyledText = styled.p`
	color: rgb(255, 255, 255);
	font-family: Nunito;
	font-size: 10px;
	font-weight: 400;
	line-height: 14px;
	letter-spacing: 0%;
	text-align: left;
	margin: 0;
`

export const StyledImg = styled.img`
	position: absolute;
	top: 15%;
	left: 87%;
	cursor: pointer;
`