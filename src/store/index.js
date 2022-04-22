import { configureStore } from '@reduxjs/toolkit';
import summaryReducer from './reducers/summaryReducer';
import loadingStateReducer from './reducers/loadingStateReducer';
import errorReducer from './reducers/errorReducer';
import modalReducer from './reducers/modalReducer';

const store = configureStore({
    reducer: {
        summary: summaryReducer,
        loadingState: loadingStateReducer,
        error: errorReducer,
        modal: modalReducer
    }
})

export default store;
