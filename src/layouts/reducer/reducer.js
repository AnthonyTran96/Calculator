import { UPDATE_DISPLAY, UPDATE_OPERATOR, UPDATE_MEMO } from './constants';

//initState
export const initState = {
    display: '0',
    operator: null,
    memo: null,
};

//reducer
const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_DISPLAY:
            return {
                ...state,
                display: action.payload,
            };
        case UPDATE_OPERATOR:
            return {
                ...state,
                operator: action.payload,
            };
        case UPDATE_MEMO:
            return {
                ...state,
                memo: action.payload,
            };
        default:
            throw new Error('invalid action');
    }
};

export default reducer;
