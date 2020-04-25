import { combineReducers } from "redux";
import questionreducer from "./questionsreducer";

export default combineReducers({
  questions: questionreducer,
});
