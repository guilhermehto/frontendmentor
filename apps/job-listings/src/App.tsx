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
			<main className="min-h-screen px-6 flex justify-center">
				<div className="max-w-lg flex-1">
					{selectedTags.length > 0 ? (
						<FilterBar
							className="-mb-8 relative bottom-8 lg:-mb-17"
							filters={selectedTags}
							onFilterRemoved={handleOnFilterRemoved}
							onClearClicked={handleOnClearClicked}
						/>
					) : undefined}
					<JobList className="mt-8 lg:mt-19">
						{filteredJobs.map((job) => (
							<JobCard key={job.id} job={job} onTagClick={handleOnTagClick} />
						))}
					</JobList>
				</div>
			</main>
		</>
	)
}

export default App
