import { rest } from "msw";

export const handlers = [
  rest.get("/summary", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        answer: "yes",
      })
    );
  }),
];
