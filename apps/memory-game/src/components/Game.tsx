import styled from 'styled-components'
import { Button } from './Button/Button'
import { GameBoard } from './GameBoard'
import { Logo } from './Logo'

const Wrapper = styled.div`
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	justify-content: space-between;
	padding: 24px;
`

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Footer = styled.footer`
	display: flex;
	justify-content: space-evenly;
`

const Game = () => {
	return (
		<Wrapper>
			<Header>
				<Logo size="small" />
				<Button variant="primary" size="xs">
					Menu
				</Button>
			</Header>
			<GameBoard />
			<Footer>
				<div> item </div>
				<div> item </div>
			</Footer>
		</Wrapper>
	)
}

export { Game }
