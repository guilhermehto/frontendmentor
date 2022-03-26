import { Header } from './components/Header'
import { JobCard } from './components/JobCard'
import { JobList } from './components/JobList'

function App() {
	return (
		<>
			<Header />
			<main className="bg-cyan h-screen">
				<JobList>
					<JobCard featured />
					<JobCard />
					<JobCard />
				</JobList>
			</main>
		</>
	)
}

export default App
