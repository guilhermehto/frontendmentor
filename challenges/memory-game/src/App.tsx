import { GameForm } from './components/GameForm'
import { ThemeProvider } from './theme/ThemeProvider'

function App() {
	return (
		<ThemeProvider>
			<GameForm />
		</ThemeProvider>
	)
}

export default App
