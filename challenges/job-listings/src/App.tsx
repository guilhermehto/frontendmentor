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
					<JobCard featured companyName="Photosnap" companyLogo={photoSnapLogo} />
				</JobList>
			</main>
		</>
	)
}

export default App
