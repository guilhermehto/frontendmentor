import styled from 'styled-components'
import { commonValues } from '../styles/common-theme'
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
	box-shadow: ${(props) => props.theme.shadow};
	@media screen and (min-width: ${(props) => props.theme.tabletBreakPoint}px) {
		padding: 32px 24px 20px 24px;
	}

	@media screen and (min-width: ${(props) => props.theme.desktopBreakPoint}px) {
		padding: 48px;
	}
`

const Profile = styled.div`
	display: flex;
	gap: 20px;
	margin-bottom: 36px;
	align-items: center;
	h1 {
		font-size: 16px;
	}

	@media screen and (min-width: ${(props) => props.theme.desktopBreakPoint}px) {
		font-size: 18px;
	}
`

const ProfileAvatar = styled.img`
	border-radius: 50%;
	height: 70px;
	@media screen and (min-width: ${(props) => props.theme.tabletBreakPoint}px) {
		height: 117px;
	}
`

const ProfileText = styled.div`
	display: flex;
	flex-direction: column;

	& a {
		color: ${(props) => props.theme.primary};
	}

	@media screen and (min-width: ${(props) => props.theme.tabletBreakPoint}px) {
		& a,
		p {
			font-size: 16px;
		}

		h1 {
			font-size: 26px;
		}
	}

	@media screen and (min-width: ${(props) => props.theme.desktopBreakPoint}px) {
		flex-wrap: wrap;
		max-height: 74px;
		justify-content: space-between;
		width: 100%;
		& p {
			text-align: end;
		}
	}
`

const BioText = styled.p`
	margin-bottom: 24px;

	@media screen and (min-width: ${(props) => props.theme.tabletBreakPoint}px) {
		font-size: 15px;
	}
`

const Summary = styled.div`
	display: flex;
	padding: 16px;
	border-radius: 10px;
	margin-bottom: 16px;
	background-color: ${(props) => props.theme.backgroundColor};
	@media screen and (min-width: ${(props) => props.theme.tabletBreakPoint}px) {
		padding: 16px 32px;
	}
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

	@media screen and (min-width: ${(props) => props.theme.tabletBreakPoint}px) {
		align-items: start;
		& p {
			font-size: 13px;
		}

		& h3 {
			text-align: left;
			font-size: 22px;
		}
	}
`

const InfoSection = styled.div`
	display: flex;
	gap: 16px;
	flex-direction: column;
	@media screen and (min-width: ${(props) => props.theme.tabletBreakPoint}px) {
		max-height: 72px;
		flex-wrap: wrap;
	}
`

const InfoSectionLine = styled.div`
	display: flex;
	align-items: center;
	font-size: 13px;
	gap: 16px;
	fill: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.textColor)};
	color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.textColor)};

	& a {
		&:hover {
			text-decoration: underline;
		}
	}
`

// hate this but don't know an easier way i.e. without changing the whole dom structure
const DesktopWrapper = styled.div`
	margin-left: 138px;
	margin-top: -40px;
`

const UserProfile = () => {
	const isDesktop: boolean = window.innerWidth >= commonValues.desktopBreakPoint

	return (
		<Card>
			<Profile>
				<ProfileAvatar src="https://avatars.githubusercontent.com/u/20494771?v=4" />
				<ProfileText>
					<h1>The Octocat</h1>
					<a href="#">@octocat</a>
					<p>Joined 25 Jan 2011</p>
				</ProfileText>
			</Profile>
			<DesktopWrapper>
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
						<IconWebsite /> <a href="https://github.com">https://github.com</a>
					</InfoSectionLine>

					<InfoSectionLine disabled>
						<IconTwitter /> Not Available
					</InfoSectionLine>
					<InfoSectionLine>
						<IconCompany /> @github
					</InfoSectionLine>
				</InfoSection>
			</DesktopWrapper>
		</Card>
	)
}
