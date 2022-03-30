import { useEffect, useState } from 'react'

import { Header } from './components/Header'
import { JobCard } from './components/JobCard'
import { JobList } from './components/JobList'
import { Job } from './models/job'
import data from '../data.json'
import { FilterBar } from './components/FilterBar'

function App() {
	const jobOpenings: Array<Job> = data

	const [selectedTags, setSelectedTags] = useState<string[]>([])
	const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobOpenings)

	const handleOnTagClick = (tag: string) => {
		if (selectedTags.includes(tag)) {
			return
		}

		setSelectedTags([...selectedTags, tag])
	}

	const handleOnFilterRemoved = (removedFilter: string) => {
		const newTags = selectedTags.filter((t) => t !== removedFilter)
		setSelectedTags(newTags)
	}

	const handleOnClearClicked = () => setSelectedTags([])

	useEffect(() => {
		if (selectedTags.length === 0) {
			setFilteredJobs(jobOpenings)
			return
		}

		const filtered = jobOpenings.filter((job) =>
			selectedTags.every((tag) => job.tags.includes(tag))
		)

		setFilteredJobs(filtered)
	}, [selectedTags])

	return (
		<>
			<Header />
			<main className="bg-cyan pb-8 px-6 flex flex-col gap-6">
				{selectedTags.length > 0 ? (
					<FilterBar
						className="-mb-9 relative bottom-9"
						filters={selectedTags}
						onFilterRemoved={handleOnFilterRemoved}
						onClearClicked={handleOnClearClicked}
					/>
				) : undefined}
				<JobList>
					{filteredJobs.map((job) => (
						<JobCard key={job.id} job={job} onTagClick={handleOnTagClick} />
					))}
				</JobList>
			</main>
		</>
	)
}

export default App
