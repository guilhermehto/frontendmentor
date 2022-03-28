import { Header } from './components/Header'
import { JobCard } from './components/JobCard'
import { JobList } from './components/JobList'
import { Job } from './models/job'

function App() {
	const job: Job = {
		id: 1,
		company: 'Photosnap',
		logo: '/photosnap.svg',
		isNew: true,
		featured: true,
		position: 'Senior Frontend Developer',
		postedAt: '1d ago',
		contract: 'Full Time',
		location: 'USA Only',
		tags: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
	}
	return (
		<>
			<Header />
			<main className="bg-cyan h-screen">
				<JobList>
					<JobCard job={job} />
				</JobList>
			</main>
		</>
	)
}

export default App
