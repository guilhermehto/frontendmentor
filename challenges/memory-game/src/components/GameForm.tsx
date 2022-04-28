import { useState } from 'react'
import styled from 'styled-components'

import { Button } from './Button/Button'
import { Card } from './Card/Card'
import { Logo } from './Logo'
import { Radio } from './Radio/Radio'

const GameWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.darkBackground};
	padding: 0 24px;
	gap: 42px;

	& svg {
		align-self: center;
	}
`

const OptionWrapper = styled.div``

const Option = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 8px;
	margin-bottom: 24px;

	& > div {
		flex: 1;
	}
`

const OptionLabel = styled.p`
	font-size: 15px;
	color: ${({ theme }) => theme.secondaryTextColor};
	margin-bottom: 12px;
`

const GameForm = () => {
	const [theme, setTheme] = useState<string>('numbers')
	const [numberOfPlayers, setNumberOfPlayers] = useState<number>(1)
	const [gridSize, setGridSize] = useState<number>(4)

	return (
		<GameWrapper>
			<Logo isWhite />
			<Card>
				<OptionWrapper>
					<OptionLabel>Select Theme</OptionLabel>
					<Option>
						<Radio
							name="theme"
							value="numbers"
							checked={theme === 'numbers'}
							onChange={(newValue: string) => setTheme(newValue)}
						>
							Numbers
						</Radio>
						<Radio
							name="theme"
							value="icons"
							checked={theme === 'icons'}
							onChange={(newValue: string) => setTheme(newValue)}
						>
							Icons
						</Radio>
					</Option>
				</OptionWrapper>
				<OptionWrapper>
					<OptionLabel>Number of Players</OptionLabel>
					<Option>
						<Radio
							name="playerNumber"
							value={'1'}
							checked={numberOfPlayers === parseInt('1')}
							onChange={(newValue: string) => setNumberOfPlayers(parseInt(newValue))}
						>
							1
						</Radio>
						<Radio
							name="playerNumber"
							value={'2'}
							checked={numberOfPlayers === parseInt('2')}
							onChange={(newValue: string) => setNumberOfPlayers(parseInt(newValue))}
						>
							2
						</Radio>
						<Radio
							name="playerNumber"
							value={'3'}
							checked={numberOfPlayers === parseInt('3')}
							onChange={(newValue: string) => setNumberOfPlayers(parseInt(newValue))}
						>
							3
						</Radio>
						<Radio
							name="playerNumber"
							value={'4'}
							checked={numberOfPlayers === parseInt('4')}
							onChange={(newValue: string) => setNumberOfPlayers(parseInt(newValue))}
						>
							4
						</Radio>
					</Option>
				</OptionWrapper>
				<OptionWrapper>
					<OptionLabel>Grid Size</OptionLabel>
					<Option>
						<Radio
							name="gridSize"
							value={'4'}
							checked={gridSize === 4}
							onChange={(newValue: string) => setGridSize(parseInt(newValue))}
						>
							4x4
						</Radio>
						<Radio
							name="gridSize"
							value={'6'}
							checked={gridSize === 6}
							onChange={(newValue: string) => setGridSize(parseInt(newValue))}
						>
							6x6
						</Radio>
					</Option>
				</OptionWrapper>
				<Button variant="primary" size="small">
					Start Game
				</Button>
			</Card>
		</GameWrapper>
	)
}

export { GameForm }
