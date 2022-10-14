import timeTrackingDashboardData from './data.json'

export const getTimeframes = (timeframe: string): any => {
	return timeTrackingDashboardData.map((item: any) => {
		return {
			title: item.title,
			current: item.timeframes[timeframe].current,
			previous: item.timeframes[timeframe].previous,
		}
	})
}
