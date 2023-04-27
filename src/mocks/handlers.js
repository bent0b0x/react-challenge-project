import { rest } from "msw";
import { CAT_FACT } from "../fixtures/CatFactFixtures";

export const handlers = [
  rest.get("https://meowfacts.herokuapp.com", (request, response, context) => {
    return response(
      context.status(200),
      context.json({
        data: [CAT_FACT],
      })
    );
  }),
];
