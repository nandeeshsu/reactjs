import { configureStore } from '@reduxjs/toolkit';
import newCompAppReduce from '../Store/NewCompAppSlice';

export default configureStore({
    reducer: newCompAppReduce,
});