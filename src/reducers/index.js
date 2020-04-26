import { combineReducers } from "redux";
import questionreducer from "./questionsreducer";
import topicsreducer from "./topicsreducer";
import filterreducer from "./filterreducer";

export default combineReducers({
  questions: questionreducer,
  topics: topicsreducer,
  filterParam: filterreducer,
});
