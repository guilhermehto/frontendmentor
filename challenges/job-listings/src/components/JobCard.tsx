import classnames from 'classnames'

import { Job } from '../models/job'
import { Tag } from './Tag'

type JobCardProps = {
	job: Job
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
	const classes = classnames([
		'bg-white rounded px-6 pb-6 shadow flex flex-col gap-2',
		{ 'border-desaturated-cyan border-l-4': job.featured },
	])

	return (
		<div className={classes}>
			<img
				className="h-12 relative bottom-6 -mb-6 w-12"
				src={`/src/assets/${job.logo}`}
				alt="company logo"
			/>

			<div className="flex flex-col gap-2">
				<CompanyNameSection companyName={job.company}>
					{job.isNew ? <Tag isPrimary>New!</Tag> : undefined}
					{job.featured ? <Tag>Featured</Tag> : undefined}
				</CompanyNameSection>
				<div className="text-md text-black font-bold">{job.position}</div>
			</div>

			<div className="flex text-sm text-dark-cyan items-center mb-3">
				{job.postedAt} <Divider /> {job.contract} <Divider /> {job.location}
			</div>
			<hr className="border-gray" />
		</div>
	)
}

type CompanyNameSectionProps = {
	companyName: string
}

const CompanyNameSection: React.FC<CompanyNameSectionProps> = ({ companyName, children }) => {
	return (
		<div className="flex font-bold gap-4">
			<div className="text-desaturated-cyan text-sm">{companyName}</div>
			<div className="flex gap-2">{children}</div>
		</div>
	)
}

const Divider = () => {
	return <span className="h-1 w-1 rounded-full bg-light-brown mx-2" />
	return <span className="text-sm text-light-brown mx-2">&#8226;</span>
}

export { JobCard }
