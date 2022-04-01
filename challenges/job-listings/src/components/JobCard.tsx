import classnames from 'classnames'

import { Job } from '../models/job'
import { Pill } from './Pill'
import { Tag } from './Tag'

type JobCardProps = {
	job: Job
	onTagClick: (tag: string) => void
}

const JobCard: React.FC<JobCardProps> = ({ job, onTagClick }) => {
	const classes = classnames([
		'bg-white rounded px-6 pb-6 lg:px-10 lg:py-8 shadow flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6 lg:justify-between',
		{ 'border-desaturated-cyan border-l-4': job.featured },
	])

	return (
		<div className={classes}>
			<div className="flex flex-col gap-2 lg:flex-row lg:gap-6">
				<img
					className="h-12 relative bottom-6 -mb-6 w-12 lg:h-22 lg:w-22 lg:bottom-0 lg:mb-0"
					src={`/${job.logo}`}
					alt="company logo"
				/>
				<div className="flex flex-col gap-2">
					<div className="flex flex-col gap-2">
						<CompanyNameSection
							companyName={job.company}
							isNew={job.isNew}
							isFeatured={job.featured}
						></CompanyNameSection>
						<div className="text-md lg:text-lg text-black font-bold hover:cursor-pointer active:text-desaturated-cyan">
							{job.position}
						</div>
					</div>

					<div className="flex text-sm lg:text-md text-dark-cyan items-center mb-3 lg:mb-0">
						{job.postedAt} <Divider /> {job.contract} <Divider /> {job.location}
					</div>

					<hr className="border-gray mb-2 lg:hidden" />
				</div>
			</div>

			<div className="flex gap-4 flex-wrap pr-2">
				{job.tags.map((tag) => (
					<Tag
						key={tag}
						onClick={() => {
							onTagClick(tag)
						}}
					>
						{tag}
					</Tag>
				))}
			</div>
		</div>
	)
}

type CompanyNameSectionProps = {
	companyName: string
	isNew: boolean
	isFeatured: boolean
}

const CompanyNameSection: React.FC<CompanyNameSectionProps> = ({
	companyName,
	isNew,
	isFeatured,
}) => {
	return (
		<div className="flex font-bold gap-4">
			<div className="text-desaturated-cyan text-sm lg:text-md">{companyName}</div>
			<div className="flex gap-2">
				{isNew ? <Pill isPrimary>New!</Pill> : undefined}
				{isFeatured ? <Pill>Featured</Pill> : undefined}
			</div>
		</div>
	)
}

const Divider = () => {
	return <span className="h-1 w-1 rounded-full bg-light-brown mx-2 lg:mx-4" />
}

export { JobCard }
