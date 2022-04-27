import { useState } from 'react'
import styled from 'styled-components'
import { Button } from './components/Button/Button'

import { Card } from './components/Card/Card'
import { Logo } from './components/Logo'
import { Radio } from './components/Radio/Radio'
import { ThemeProvider } from './theme/ThemeProvider'

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

function App() {
	const [theme, setTheme] = useState<string>('numbers')
	const [numberOfPlayers, setNumberOfPlayers] = useState<number>(1)
	const [gridSize, setGridSize] = useState<number>(4)
	return (
		<ThemeProvider>
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
								onChange={(newValue) => setTheme(newValue)}
							>
								Numbers
							</Radio>
							<Radio
								name="theme"
								value="icons"
								checked={theme === 'icons'}
								onChange={(newValue) => setTheme(newValue)}
							>
								Icons
							</Radio>
						</Option>
					</OptionWrapper>
					<OptionWrapper>
						<OptionLabel>Number of Players</OptionLabel>
						<Option>
							{['1', '2', '3', '4'].map((numberOfPlayersOption) => {
								console.log('called')

								return (
									<Radio
										key={numberOfPlayers}
										name="playerNumber"
										value={numberOfPlayersOption}
										checked={
											numberOfPlayers === parseInt(numberOfPlayersOption)
										}
										onChange={(newValue) =>
											setNumberOfPlayers(parseInt(newValue))
										}
									>
										{numberOfPlayersOption}
									</Radio>
								)
							})}
						</Option>
					</OptionWrapper>
					<OptionWrapper>
						<OptionLabel>Grid Size</OptionLabel>
						<Option>
							<Radio
								name="gridSize"
								value={'4'}
								checked={gridSize === 4}
								onChange={(newValue) => setGridSize(parseInt(newValue))}
							>
								4x4
							</Radio>
							<Radio
								name="gridSize"
								value={'6'}
								checked={gridSize === 6}
								onChange={(newValue) => setGridSize(parseInt(newValue))}
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
		</ThemeProvider>
	)
}

export default App
