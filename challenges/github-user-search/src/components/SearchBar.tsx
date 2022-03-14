import styled from 'styled-components'
import { IconSearch } from './Icons/Search'

const Wrapper = styled.div`
	border-radius: 16px;
	padding: 16px;
	height: 24px; // something weird happening with the icon height
	background-color: ${(props) => props.theme.foregroundColor};
`

const SearchBar = () => {
	return (
		<Wrapper>
			<IconSearch />
		</Wrapper>
	)
}

export { SearchBar }
