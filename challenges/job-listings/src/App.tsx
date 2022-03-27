import { Header } from './components/Header'
import { JobCard } from './components/JobCard'
import { JobList } from './components/JobList'
import photoSnapLogo from './assets/photosnap.svg' // this needs to change

function App() {
	return (
		<>
			<Header />
			<main className="bg-cyan h-screen">
				<JobList>
					<JobCard
						featured
						companyName="Photosnap"
						companyLogo={photoSnapLogo}
						jobName="Senior Frontend Developer"
					/>
				</JobList>
			</main>
		</>
	)
}

export default App
