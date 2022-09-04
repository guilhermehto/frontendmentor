import { useState } from 'react'

import { RatingCard } from './Components/RatingCard'
import { ThankYouCard } from './Components/ThankYouCard'

function App() {
	const [selectedRating, setSelectedRating] = useState(0)
	const handleOnSubmit = (rating: number) => {
		setSelectedRating(rating)
	}

	return (
		<main className="bg-very-dark-blue h-screen px-6 flex flex-col justify-center">
			{selectedRating === 0 ? (
				<RatingCard onSubmit={handleOnSubmit} />
			) : (
				<ThankYouCard rating={selectedRating.toString()} />
			)}
		</main>
	)
}

export default App
