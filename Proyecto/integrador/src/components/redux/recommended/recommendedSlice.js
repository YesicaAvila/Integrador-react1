import { createSlice } from '@reduxjs/toolkit';
import { randomProducts } from '../../utils/randomProducts';


const INITIAL_STATE = {
    recommended: randomProducts(4),
};

export const recommendedSlice = createSlice({
    name:'recommended',
    initialState: INITIAL_STATE,
    reducers: {
        randomRecommended: (state) => {
            return state;
        },
    },
});

export const { randomRecommended } = recommendedSlice.actions;

export default recommendedSlice.reducer;