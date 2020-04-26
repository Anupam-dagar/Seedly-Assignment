import { REQUEST_FEATURED_TOPICS } from "./types";

// featuredTopics action fetches all the featured topics.
export const featuredTopics = () => {
  console.log("REQUEST_FEATURED_TOPICS action received");
  return {
    type: REQUEST_FEATURED_TOPICS,
  };
};
