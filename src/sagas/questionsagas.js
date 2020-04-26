import {
  SUCCESS_ALL_QUESTIONS,
  FAILURE_ALL_QUESTIONS,
  FAILURE_TOPIC_QUESTION,
  SUCCESS_TOPIC_QUESTION,
} from "../actions/types";
import { put, call } from "redux-saga/effects";
import { getAllQuestionsApi, getQuestionsByTopicApi } from "../api/api";

// make a get request to fetch all questions and update the store accordingly
export function* retrieveAllQuestions(data) {
  try {
    const response = yield call(
      getAllQuestionsApi,
      data.trending,
      data.unanswered,
      data.page
    );

    yield put({
      type: SUCCESS_ALL_QUESTIONS,
      payload: response,
      page: data.page,
    });
  } catch (error) {
    const errorMessage = error.message !== undefined ? error.message : error;
    yield put({
      type: FAILURE_ALL_QUESTIONS,
      error: errorMessage,
    });
  }
}

// make a get request to fetch all questions of a topic and update the store accordingly
export function* retrieveTopicQuestions(topic) {
  try {
    const response = yield call(
      getQuestionsByTopicApi,
      topic.topic,
      topic.trending,
      topic.unanswered,
      topic.page
    );
    yield put({
      type: SUCCESS_TOPIC_QUESTION,
      payload: response.questions,
      page: topic.page,
      numAnswers: response.numQuestions,
    });
  } catch (error) {
    const errorMessage = error.message !== undefined ? error.message : error;
    yield put({
      type: FAILURE_TOPIC_QUESTION,
      error: errorMessage,
    });
  }
}
