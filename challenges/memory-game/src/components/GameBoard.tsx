import { useEffect, useState } from 'react'
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

	const [gridArray, setGridArray] = useState<Array<number>>([])
	const [pairedValues, setPairedValues] = useState<Array<number>>([])
	const [selectedIndexes, setSelectedIndexes] = useState<[number, number]>([-1, -1])

	const buttonSize = gameOptions.gridSize === 4 ? 'medium' : 'small'

	useEffect(() => {
		setGridArray(getBoardValues(gameOptions.gridSize))
	}, [])

	const handleButtonClicked = (value: number) => {
		selectedIndexes[selectedIndexes.findIndex((e) => e === -1)] = value
		setSelectedIndexes(selectedIndexes)
		console.log(selectedIndexes)
	}

	const getButtonVariant = (value: number, index: number) => {
		if (selectedIndexes.includes(index)) return 'primary'
		if (pairedValues.includes(value)) return 'secondary'

		return 'dark'
	}

	const getButtonDisplayValue = (value: number, index: number) => {
		if (selectedIndexes.includes(index)) return value
		if (pairedValues.includes(value)) return value

		return ''
	}

	return (
		<Wrapper>
			<BoardWrapper size={gameOptions.gridSize}>
				{gridArray.map((value: number, index: number) => {
					console.log('called render')
					return (
						<Button
							key={index}
							variant={getButtonVariant(value, index)}
							shape="circle"
							size={buttonSize}
							onClick={() => handleButtonClicked(value)}
						>
							{pairedValues[0]}
						</Button>
					)
				})}
			</BoardWrapper>
		</Wrapper>
	)
}

const getBoardValues = (gridSize: number) => {
	const boardArray = Array(gridSize * gridSize).fill(-1)
	for (let x = 0; x < (gridSize * gridSize) / 2; x++) {
		for (let y = 0; y < 2; y++) {
			let arrayIndex = Math.floor(Math.random() * boardArray.length)
			while (boardArray[arrayIndex] !== -1) {
				arrayIndex = Math.floor(Math.random() * boardArray.length)
			}
			boardArray[arrayIndex] = x
		}
	}

	return boardArray
}
export { GameBoard }
