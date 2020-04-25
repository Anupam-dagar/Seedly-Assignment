export const getAllQuestionsApi = () => {
  return fetch("http://localhost:4000/questions?_embed=answers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    });
};

export const getFeaturedTopicsApi = () => {
  return fetch("http://localhost:4000/topics?isFeatured=true", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    });
};
