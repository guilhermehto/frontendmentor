import { Tag } from './Tag'

type FilterBarProps = {
	filters: string[]
	className?: string
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, className }) => {
	return (
		<div className={`bg-white flex flex-wrap gap-4 p-5 rounded shadow ${className}`}>
			{filters.map((filter: string) => (
				<Tag key={filter}>{filter}</Tag>
			))}
		</div>
	)
}

export { FilterBar }
