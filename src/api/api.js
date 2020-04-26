export const getAllQuestionsApi = (trending, unanswered) => {
  let url = "http://localhost:4000/questions?_embed=answers";
  if (trending !== false) {
    url = url + `&isTrending=${trending}`;
  }
  if (unanswered !== false) {
    url = url + `&isUnanswered=${unanswered}`;
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

export const getQuestionsByTopicApi = (topic, trending, unanswered) => {
  let url = `http://localhost:4000/topicquestions?name=${topic}`;
  if (trending !== false) {
    url = url + `&questions.isTrending=${trending}`;
  }
  if (unanswered !== false) {
    url = url + `&questions.isUnanswered=${unanswered}`;
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
