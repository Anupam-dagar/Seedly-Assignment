// API call to get all questions.
export const getAllQuestionsApi = (trending, unanswered, page) => {
  let url = `http://localhost:4000/questions?_embed=answers&isUnanswered=${unanswered}&_page=${page}&_limit=10`;

  trending !== false && (url = url + `&isTrending=${trending}`);

  return fetch(url, {
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

// API call to get all featured topics
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

// API call to get all questions for a given topic.
export const getQuestionsByTopicApi = (topic, trending, unanswered, page) => {
  let url = `http://localhost:4000/topicquestions?name=${topic}&questions.isUnanswered=${unanswered}&_page=${page}&_limit=10`;

  trending !== false && (url = url + `&questions.isTrending=${trending}`);

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data[0]) {
        const questions = [];
        const response = {};

        response.numQuestions = data[0].numQuestions;
        data.map((question, index) => questions.push(question.questions));
        response.questions = questions;
        return response;
      }
      return data;
    });
};
