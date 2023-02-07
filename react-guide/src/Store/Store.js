import { configureStore, combineReducers } from '@reduxjs/toolkit';
import newCompAppReduce from '../Store/NewCompAppSlice';
import reducer from './Reducer';

export const rootReducer = combineReducers({
    newCompAppReduce: newCompAppReduce,
    reducer: reducer,
  });

export default configureStore({
    reducer: rootReducer,
});