import { REQUEST_FEATURED_TOPICS } from "./types";

// featuredTopics action fetches all the featured topics.
export const featuredTopics = () => {
  return {
    type: REQUEST_FEATURED_TOPICS,
  };
};
