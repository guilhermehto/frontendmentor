import styled from 'styled-components'
import { Button } from './Button'
import { IconSearch } from './Icons/Search'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	border-radius: 16px;
	padding: 8px 8px 8px 16px;
	min-height: 24px; // something weird happening with the icon height
	background-color: ${(props) => props.theme.foregroundColor};
	justify-content: space-between;
`

const Input = styled.input`
	border: none;
	font-size: 13px;
	background: none;
	text-overflow: ellipsis;
	flex-grow: 1;
	margin-left: 8px;

	&::placeholder {
		color: ${(props) => props.theme.textColor};
	}
`

const SearchBar = () => {
	return (
		<Wrapper>
			<IconSearch />
			<Input placeholder="Search GitHub username&#8230;" />
			<Button>Search</Button>
		</Wrapper>
	)
}

export { SearchBar }
