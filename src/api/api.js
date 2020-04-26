// API call to get all questions.
export const getAllQuestionsApi = (trending, unanswered, query, page) => {
  let url = `http://localhost:4000/questions?_embed=answers&isUnanswered=${unanswered}&_page=${page}&_limit=10`;
  if (trending !== false) {
    url = url + `&isTrending=${trending}`;
  }
  if (query !== null) {
    url = url + `&q=${query}`;
  }

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
export const getQuestionsByTopicApi = (
  topic,
  trending,
  unanswered,
  query,
  page
) => {
  let url = `http://localhost:4000/topicquestions?name=${topic}&questions.isUnanswered=${unanswered}&_page=${page}&_limit=10`;
  if (trending !== false) {
    url = url + `&questions.isTrending=${trending}`;
  }
  if (query !== null) {
    url = url + `&q=${query}`;
  }
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
        data.map((question, index) => questions.push(question.questions));
        return questions;
      }
      return data;
    });
};
