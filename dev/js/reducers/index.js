import {combineReducers} from "redux";
import TasksReducer from './reducer-tasks';
import ActiveTaskReducer from './reducer-active-task'


const allReducers = combineReducers({
    tasks: TasksReducer,
    activeTask: ActiveTaskReducer
});

export default allReducers;