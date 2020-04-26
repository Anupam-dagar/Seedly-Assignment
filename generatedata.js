const faker = require("faker");
const fs = require("fs");
const _ = require("lodash");

const data = {};
const users = [];
const levels = [];
const topics = [];
const questions = [];
const answers = [];
const topicquestions = [];

for (let i = 1; i <= 6; i++) {
  const level = {};

  const id = i;
  const name = `Level ${i}`;

  level.id = id;
  level.name = name;

  levels.push(level);
}

for (let i = 1; i <= 10; i++) {
  const user = {};

  const id = i;
  const name = faker.fake("{{name.firstName}} {{name.lastName}}");
  const designation = faker.fake("{{name.jobTitle}}");
  const level = levels[Math.floor(Math.random() * levels.length)];

  user.id = id;
  user.name = name;
  user.designation = designation;
  user.level = level;

  users.push(user);
}

for (let i = 1; i <= 50; i++) {
  const topic = {};

  const id = i;
  const name = faker.fake("{{random.word}}");
  const isFeatured = faker.fake("{{random.boolean}}");

  topic.id = id;
  topic.name = name;
  topic.isFeatured = isFeatured;

  topics.push(topic);
}

for (let i = 1; i <= 80; i++) {
  const question = {};

  const id = i;
  const title = faker.fake("{{lorem.sentences}}");
  const followers = Math.floor(Math.random() * users.length);
  const isTrending = faker.fake("{{random.boolean}}");
  const isUnanswered = false;
  const questionTopics = [];
  const numTopics = Math.floor(Math.random() * topics.length);
  const topicMap = {};
  let j = 0;
  while (j < numTopics) {
    const getTopic = Math.floor(Math.random() * topics.length);
    if (!(getTopic in topicMap)) {
      const questionTopic = topics[getTopic];
      questionTopics.push(questionTopic);
      j++;
    }
  }

  question.id = id;
  question.title = title;
  question.followers = followers;
  question.isTrending = isTrending;
  question.isUnanswered = isUnanswered;
  question.topics = questionTopics;

  questions.push(question);
}

for (let i = 1; i <= 20; i++) {
  const question = {};

  const id = i;
  const title = faker.fake("{{lorem.sentences}}");
  const followers = Math.floor(Math.random() * users.length);
  const isTrending = faker.fake("{{random.boolean}}");
  const isUnanswered = true;
  const questionTopics = [];
  const numTopics = Math.floor(Math.random() * topics.length);
  const topicMap = {};
  let j = 0;
  while (j < numTopics) {
    const getTopic = Math.floor(Math.random() * topics.length);
    if (!(getTopic in topicMap)) {
      const questionTopic = topics[getTopic];
      questionTopics.push(questionTopic);
      j++;
    }
  }

  question.id = id;
  question.title = title;
  question.followers = followers;
  question.isTrending = isTrending;
  question.isUnanswered = isUnanswered;
  question.topics = questionTopics;

  questions.push(question);
}

const quesans = _.cloneDeep(questions);

for (let i = 0; i < quesans.length; i++) {
  quesans[i].answers = [];
}

const markAns = {};

for (let i = 1; i <= 200; i++) {
  const answer = {};

  const id = i;
  const content = faker.fake("{{lorem.paragraphs}}");
  const questionId = Math.ceil(Math.random() * 80);
  const user = users[Math.floor(Math.random() * users.length)];
  const likeCount = Math.floor(Math.random() * users.length);
  const answerUpdated = Math.floor(Math.random() * 24);
  markAns[questionId] = 1;

  answer.id = id;
  answer.content = content;
  answer.questionId = questionId;
  answer.user = user;
  answer.likeCount = likeCount;
  answer.answerUpdated = answerUpdated;

  quesans[questionId - 1].answers.push(answer);

  answers.push(answer);
}

for (let i = 1; i <= 80; i++) {
  let j = 201;
    if (!(i in markAns)) {
    const answer = {};

    const id = j;
    const content = faker.fake("{{lorem.paragraphs}}");
    const questionId = i;
    const user = users[Math.floor(Math.random() * users.length)];
    const likeCount = Math.floor(Math.random() * users.length);
    const answerUpdated = Math.floor(Math.random() * 24);
    markAns[questionId] = 1;

    answer.id = id;
    answer.content = content;
    answer.questionId = questionId;
    answer.user = user;
    answer.likeCount = likeCount;
    answer.answerUpdated = answerUpdated;

    quesans[questionId - 1].answers.push(answer);

    answers.push(answer);
  }
}

const topicques = {};

for (let i = 0; i < topics.length; i++) {
  topicques[topics[i].name] = [];
}

for (let i = 0; i < quesans.length; i++) {
  for (let j = 0; j < quesans[i].topics.length; j++) {
    topicques[quesans[i].topics[j].name].push(quesans[i]);
  }
}

for (let key in topicques) {
  for (let i = 0; i < topicques[key].length; i++) {
    const data = {};
    data.name = key;
    data.questions = topicques[key][i];
    topicquestions.push(data);
  }
}

data.users = users;
data.levels = levels;
data.topics = topics;
data.questions = questions;
data.answers = answers;
data.topicquestions = topicquestions;

fs.writeFile("data.json", JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log("Mock Data Generated");
});
