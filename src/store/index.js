import { configureStore } from '@reduxjs/toolkit';
import summaryReducer from './reducers/summaryReducer';
import loadingStateReducer from './reducers/loadingStateReducer';
import errorReducer from './reducers/errorReducer';

const store = configureStore({
    reducer: {
        summary: summaryReducer,
        loadingState: loadingStateReducer,
        error: errorReducer
    }
})

export default store;
