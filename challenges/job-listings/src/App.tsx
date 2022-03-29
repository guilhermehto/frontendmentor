import { useState } from 'react'

import { Header } from './components/Header'
import { JobCard } from './components/JobCard'
import { JobList } from './components/JobList'
import { Job } from './models/job'
import data from '../data.json'

function App() {
	const jobOpenings: Array<Job> = data

	const [selectedTags, setSelectedTags] = useState<string[]>([])

	const handleOnTagClick = (tag: string) => {
		if (selectedTags.includes(tag)) {
			return
		}

		setSelectedTags([...selectedTags, tag])
		console.log(selectedTags)
	}

	return (
		<>
			<Header />
			<main className="bg-cyan pb-8">
				<JobList>
					{jobOpenings.map((job) => (
						<JobCard key={job.id} job={job} onTagClick={handleOnTagClick} />
					))}
				</JobList>
			</main>
		</>
	)
}

export default App
