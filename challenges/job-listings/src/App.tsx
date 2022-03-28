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
		role: 'Frontend',
		level: 'Senior',
		postedAt: '1d ago',
		contract: 'Full Time',
		location: 'USA Only',
		languages: ['HTML', 'CSS', 'JavaScript'],
		tools: [],
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
