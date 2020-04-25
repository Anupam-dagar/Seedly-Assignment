import { combineReducers } from "redux";
import questionreducer from "./questionsreducer";
import topicsreducer from "./topicsreducer";

export default combineReducers({
  questions: questionreducer,
  topics: topicsreducer,
});
