import Big from 'big.js';
import { updateDisplay, updateOperator, updateMemo } from './reducer/actions';

const clickBtn = (data, store, dispatch) => {
    const { display, operator, memo } = store;
    const setDisplay = (payload) => dispatch(updateDisplay(payload));
    const setOperator = (payload) => dispatch(updateOperator(payload));
    const setMemo = (payload) => dispatch(updateMemo(payload));
    const calculate = () => {
        if (operator === null || memo === null) return;
        const _num1 = new Big(memo);
        const _num2 = new Big(display);
        let result = '';
        switch (operator) {
            case '+':
                result = _num1.plus(_num2).toString();
                break;
            case '-':
                result = _num1.minus(_num2).toString();
                break;
            case 'x':
                result = _num1.mul(_num2).toString();
                break;
            case '÷':
                result = _num1.div(_num2).toString();
                break;
            default:
                throw new Error('Calculate Error!!');
        }
        setDisplay(result);
        setOperator(null);
        return result;
    };
    const reset = () => {
        setDisplay('0');
        setOperator(null);
        setMemo(null);
    };

    if (!isNaN(data)) {
        if (display === '0') {
            setDisplay(data);
            return;
        }
        if (display === memo) {
            setDisplay(data);
            return;
        }
        setDisplay(display + data);
    }

    if (data === 'AC') {
        reset();
    }
    if (data === '+/-') {
        const number = new Big(display);
        const newData = number.mul(-1).toString();
        setDisplay(newData);
    }
    if (data === '%') {
        calculate();
        console.log(display);
        const number = new Big(display);
        const newData = number.div(100).toString();
        setDisplay(newData);
    }
    if (['+', '-', 'x', '÷'].includes(data)) {
        let result = null;
        if (display !== memo) result = calculate();
        setOperator(data);
        result ? setMemo(result) : setMemo(display);
    }
    if (data === '=') {
        const result = calculate();
        result ? setMemo(result) : setMemo(display);
    }
    if (data === '.') {
        if (operator === null && memo !== null) {
            setDisplay('0.');
            setMemo(null);
            return;
        }
        if (display.includes('.')) return;
        if (display === '0' || display === memo) setDisplay('0.');
        else setDisplay(display + data);
    }
};

export default clickBtn;
