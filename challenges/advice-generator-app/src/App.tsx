import { Advice } from './components/Advice/Advice'
import { AdviceButton } from './components/Advice/AdviceButton'
import { AdviceTitle } from './components/Advice/AdviceTitle'

function App() {
	const onButtonClicked = () => {
		console.log('button clicked')
	}

	return (
		<main className="font-body bg-dark-blue h-screen flex items-center justify-center px-4">
			<Advice
				title={<AdviceTitle>Advice #117</AdviceTitle>}
				button={<AdviceButton onClick={onButtonClicked} />}
			>
				"It is easy to sit up and take notice, what's difficult is getting up and taking
				action."
			</Advice>
		</main>
	)
}

export default App
