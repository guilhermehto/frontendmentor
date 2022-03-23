import { useState } from 'react'

import { advicesClient } from './clients/advices-client'
import { Advice } from './components/Advice/Advice'
import { AdviceButton } from './components/Advice/AdviceButton'
import { AdviceTitle } from './components/Advice/AdviceTitle'

function App() {
	const [slip, setSlip] = useState<{ id: number; advice: string }>({
		id: 117,
		advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
	})
	const onButtonClicked = async () => {
		const newAdvice = await advicesClient.getRandomAdvice()
		setSlip(newAdvice)
	}

	return (
		<main className="font-body bg-dark-blue h-screen flex items-center justify-center px-4">
			<Advice
				title={<AdviceTitle>{`Advice #${slip.id}`}</AdviceTitle>}
				button={<AdviceButton onClick={onButtonClicked} />}
			>
				"{slip.advice}"
			</Advice>
		</main>
	)
}

export default App
