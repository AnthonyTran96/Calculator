import { UPDATE_DISPLAY, UPDATE_OPERATOR, UPDATE_MEMO } from './constants';

export const updateDisplay = (payload) => {
    return {
        type: UPDATE_DISPLAY,
        payload,
    };
};

export const updateOperator = (payload) => {
    return {
        type: UPDATE_OPERATOR,
        payload,
    };
};

export const updateMemo = (payload) => {
    return {
        type: UPDATE_MEMO,
        payload,
    };
};
