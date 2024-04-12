import styled from 'styled-components'

export const StyledForm = styled.form`
	width: 380px;
	height: 350px;
	background: #4e4d4d;
	border-radius: 20px 20px 0 0;
	margin: 0 auto;
`

export const StyledWrapper = styled.div`
	padding: 40px 54px 30px 54px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 20px;
`

export const StyledInput = styled.input<{ error?: boolean }>`
	width: 252px;
	height: 30px;
	border: ${props => props.error ? '1px solid red' : '1px solid white'};
	outline: none;
	margin-bottom: 5px;
	padding: 4px 9px 4px 9px;
`

export const StyledButton = styled.button`
	width: 380px;
	height: 77px;
	color: rgb(255, 255, 255);
	font-family: Nunito;
	font-size: 20px;
	font-weight: 700;
	line-height: 27px;
	letter-spacing: 0%;
	background-color: #4e4d4d;
	border-radius: 0 0 20px 20px;
	border: none;
	border-top: 2px solid white;
	cursor: pointer;
`

export const StyledImg = styled.img`
	position: absolute;
	top: 15%;
	left: 87%;
	cursor: pointer;
`

export const StyledBlock = styled.div``

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

export const StyledTitle = styled.h1`
	color: rgb(255, 255, 255);
	font-family: Nunito;
	font-size: 30px;
	font-weight: 700;
	line-height: 41px;
	letter-spacing: 0%;
	margin: 0;
`
