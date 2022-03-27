import classnames from 'classnames'

import { Tag } from './Tag'

type JobCardProps = {
	featured?: boolean
	companyName: string
	companyLogo: string
	jobTitle: string
}

const JobCard: React.FC<JobCardProps> = ({ featured, companyName, companyLogo, jobTitle }) => {
	const classes = classnames([
		'bg-white rounded h-32 px-6 pb-6 shadow',
		{ 'border-desaturated-cyan border-l-4': featured },
	])

	return (
		<div className={classes}>
			<img className="h-12 relative bottom-6 -mb-6" src={companyLogo} alt="company logo" />
			<div className="flex flex-col gap-2">
				<CompanyNameSection companyName={companyName}>
					<Tag isPrimary>New!</Tag>
					<Tag>Featured</Tag>
				</CompanyNameSection>
				<div className="text-md text-black font-bold">{jobTitle}</div>
			</div>
		</div>
	)
}

type CompanyNameSectionProps = {
	companyName: string
}

const CompanyNameSection: React.FC<CompanyNameSectionProps> = ({ companyName, children }) => {
	return (
		<div className="flex font-bold mt-3 gap-4">
			<div className="text-desaturated-cyan text-sm">{companyName}</div>
			<div className="flex gap-2">{children}</div>
		</div>
	)
}

export { JobCard }
