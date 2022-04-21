import { configureStore } from '@reduxjs/toolkit';
import summaryReducer from './reducers/summaryReducer';
import loadingStateReducer from './reducers/loadingStateReducer';

const store = configureStore({
    reducer: {
        summary: summaryReducer,
        loadingState: loadingStateReducer
    }
})

export default store;

