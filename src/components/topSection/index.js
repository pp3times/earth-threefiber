import React from "react"
import styled from "styled-components"

const TopSectionContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: #1756dd21;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 99;
`

const Logo = styled.h1`
	margin: 0;
	color: #fff;
	font-weight: 800;
	font-size: 80px;
`

const Slogan = styled.h4`
	margin: 0;
	color: #fff;
	font-weight: 700;
	font-size: 30px;
	margin-top: 1em;
`

const Paragraph = styled.p`
	margin: 0;
	margin-top: 3em;
	color: #fff;
	font-size: 14px;
	line-height: 1.5;
	font-weight: 500;
	max-width: 40%;
	text-align: center;
`

const ContinueButton = styled.button`
	margin-top: 3em;
	padding: 1em 2em;
	border: none;
	border-radius: 5px;
	background-color: #fff;
	color: #1756dd;
	font-weight: 700;
	font-size: 18px;
	cursor: pointer;
	transition: all 0.5s ease-in-out;
	&:hover {
		background-color: #1756dd;
		color: #fff;
	}
`

export function TopSection() {
	return <TopSectionContainer>
		<Logo>Heal the world</Logo>
		<Slogan>Make it a better place</Slogan>
		<Paragraph>For you and for me, and the entire human race
			There are people dying
			If you care enough for the living
			Make a better place for you and for me.</Paragraph>
		<ContinueButton>Continue</ContinueButton>
	</TopSectionContainer>
}