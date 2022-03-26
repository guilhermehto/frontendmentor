import classnames from 'classnames'

type JobCardProps = {
	featured?: boolean
}

const JobCard: React.FC<JobCardProps> = ({ featured }) => {
	const classes = classnames([
		'bg-white rounded h-32 px-6 pt-8 pb-6 shadow',
		{ 'border-desaturated-cyan border-l-4': featured },
	])
	return <div className={classes}>Job Card card</div>
}

export { JobCard }
