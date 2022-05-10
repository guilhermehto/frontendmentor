import { useState } from 'react'
import styled, { css } from 'styled-components'

import { useGameStore } from '../store/game-store'
import { Button } from './Button/Button'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`
type BoardWrapperProps = {
	size: number
}

const BoardWrapper = styled.div<BoardWrapperProps>`
	display: grid;
	row-gap: 10px;

	${(props) => {
		switch (props.size) {
			case 6:
				return css`
					grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
				`
			default:
				return css`
					grid-template-columns: 1fr 1fr 1fr 1fr;
				`
		}
	}}
`

const GameBoard = () => {
	const gameOptions = useGameStore((state) => state.gameOptions)
	console.log(gameOptions.gridSize)
	const buttonSize = gameOptions.gridSize === 4 ? 'medium' : 'small'
	const array = Array(gameOptions.gridSize * gameOptions.gridSize).fill('')

	return (
		<Wrapper>
			<BoardWrapper size={gameOptions.gridSize}>
				{array.map((_, index) => (
					<Button key={index} variant="dark" shape="circle" size={buttonSize}>
						{' '}
					</Button>
				))}
			</BoardWrapper>
		</Wrapper>
	)
}

type BoardButtonProps = {
	size: 'small' | 'medium'
}

const BoardButton: React.FC<BoardButtonProps> = ({ size }) => {
	return (
		<Button variant="dark" shape="circle" size={size}>
			{' '}
		</Button>
	)
}

export { GameBoard }
