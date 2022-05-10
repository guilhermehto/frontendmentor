import { useState } from 'react'
import { Game } from './components/Game'

import { GameForm } from './components/GameForm'
import { ThemeProvider } from './theme/ThemeProvider'

function App() {
	const [gameStatus, setGameStatus] = useState<'starting' | 'started'>('starting')

	const handleOnGameStart = () => {
		setGameStatus('started')
	}

	return (
		<ThemeProvider>
			{gameStatus === 'starting' && <GameForm onGameStart={handleOnGameStart} />}
			{gameStatus === 'started' && <Game />}
		</ThemeProvider>
	)
}

export default App
