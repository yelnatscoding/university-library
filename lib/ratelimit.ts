import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import { redis } from "../database/redis";

// Create a new ratelimiter, that allows 10 requests per 10 seconds
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 m"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

export default ratelimit;
