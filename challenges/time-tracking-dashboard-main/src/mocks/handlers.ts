import { rest } from "msw";
import timeTrackingDashboardData from "../../data.json";

export const handlers = [
  rest.get("/summary", (req, res, ctx) => {
    const timeframe: string | null = req.url.searchParams.get("timeframe");

    if (
      timeframe !== "daily" &&
      timeframe !== "weekly" &&
      timeframe !== "monthly"
    ) {
      return res(ctx.status(400));
    }

    const data = timeTrackingDashboardData.map((item) => {
      return {
        title: item.title,
        current: item.timeframes[timeframe].current,
        previous: item.timeframes[timeframe].previous,
      };
    });
    return res(ctx.status(200), ctx.json([...data]));
  }),
];
