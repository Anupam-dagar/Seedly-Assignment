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
