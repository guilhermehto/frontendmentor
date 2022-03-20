import styled from 'styled-components'
import { IconCompany } from './Icons/Company'
import { IconLocation } from './Icons/Location'
import { IconTwitter } from './Icons/Twitter'
import { IconWebsite } from './Icons/Website'

const Card = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 16px;
	margin-top: 16px;
	padding: 32px 24px 48px 24px;
	min-height: 24px; // something weird happening with the icon height
	background-color: ${(props) => props.theme.foregroundColor};
	justify-content: space-between;
`

const Profile = styled.div`
	display: flex;
	gap: 20px;
	margin-bottom: 36px;
`

const ProfileAvatar = styled.img`
	border-radius: 50%;
	max-height: 70px;
`

const ProfileText = styled.div`
	display: flex;
	flex-direction: column;

	& a {
		color: ${(props) => props.theme.primary};
		text-decoration: none;
	}
`

const BioText = styled.p`
	margin-bottom: 24px;
`

const Summary = styled.div`
	display: flex;
	padding: 16px;
	border-radius: 10px;
	margin-bottom: 16px;
	background-color: ${(props) => props.theme.backgroundColor};
`

const SummaryStat = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	& p {
		font-size: 11px;
	}
`

const InfoSection = styled.div`
	display: flex;
	gap: 16px;
	flex-direction: column;
`

const InfoSectionLine = styled.div`
	display: flex;
	align-items: center;
	font-size: 13px;
	gap: 16px;
	fill: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.textColor)};
	color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.textColor)};
`

const UserProfile = () => {
	return (
		<Card>
			<Profile>
				<ProfileAvatar src="https://avatars.githubusercontent.com/u/20494771?v=4" />
				<ProfileText>
					<h3>The Octocat</h3>
					<a href="#">@octocat</a>
					<p>Joined 25 Jan 2011</p>
				</ProfileText>
			</Profile>

			<BioText>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
				volutpat mattis eros.
			</BioText>

			<Summary>
				<SummaryStat>
					<p>Repos</p>
					<h3>8</h3>
				</SummaryStat>

				<SummaryStat>
					<p>Followers</p>
					<h3>3938</h3>
				</SummaryStat>

				<SummaryStat>
					<p>Following</p>
					<h3>9</h3>
				</SummaryStat>
			</Summary>

			<InfoSection>
				<InfoSectionLine>
					<IconLocation /> San Francisco
				</InfoSectionLine>

				<InfoSectionLine>
					<IconWebsite /> https://github.com
				</InfoSectionLine>

				<InfoSectionLine disabled>
					<IconTwitter /> Not Available
				</InfoSectionLine>
				<InfoSectionLine>
					<IconCompany /> @github
				</InfoSectionLine>
			</InfoSection>
		</Card>
	)
}

export { UserProfile }
