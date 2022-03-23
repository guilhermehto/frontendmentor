import { Advice } from './components/Advice/Advice'
import { AdviceTitle } from './components/Advice/AdviceTitle'

function App() {
	return (
		<main className="font-body bg-dark-blue h-screen flex items-center justify-center px-4">
			<Advice title={<AdviceTitle>Advice #117</AdviceTitle>}>
				"It is easy to sit up and take notice, what's difficult is getting up and taking
				action."
			</Advice>
		</main>
	)
}

export default App
