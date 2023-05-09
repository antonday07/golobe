import { configureStore } from '@reduxjs/toolkit';
import personReducer from '@/stores/personSlice';

const store = configureStore({
	reducer: {
		person: personReducer,
	},
});

export default store;