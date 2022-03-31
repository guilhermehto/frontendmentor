type JobListProps = {
	className?: string
}

const JobList: React.FC<JobListProps> = ({ children, className }) => {
	return <div className={`flex flex-col gap-10 pt-6 ${className}`}>{children}</div>
}

export { JobList }
