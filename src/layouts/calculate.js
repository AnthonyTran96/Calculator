import Big from 'big.js';

// const [store, setStore] = useState({
//     display: '0',
//     operator: null,
//     memo: null,
// });

function calculate(data, store) {
    let { display, operator, memo } = { ...store };
    const reset = () => {
        display = '0';
        operator = null;
        memo = null;
    };

    const math = () => {
        if (operator === null || memo === null) return;
        const num1 = new Big(memo);
        const num2 = new Big(display);
        let result = null;
        switch (operator) {
            case '+':
                result = num1.plus(num2).toString();
                break;
            case '-':
                result = num1.minus(num2).toString();
                break;
            case 'x':
                result = num1.mul(num2).toString();
                break;
            case '÷':
                result = num1.div(num2).toString();
                break;
            default:
                throw new Error('invalid calculate');
        }
        display = result;
        operator = null;
        return result;
    };

    if (data === 'AC') reset();

    if (!isNaN(data)) {
        if ((display === memo && display !== data) || display === '0') {
            display = data;
            return {
                display,
                operator,
                memo,
            };
        }
        display += data;
    }

    if (['+', '-', 'x', '÷'].includes(data)) {
        let result = null;
        if (display !== memo) result = math();

        operator = data;
        result ? (memo = result) : (memo = display);
    }

    if (data === '=') {
        const result = math();
        result ? (memo = result) : (memo = display);
    }

    if (data === '+/-') {
        const number = new Big(display);
        const newData = number.mul(-1).toString();
        display = newData;
    }

    if (data === '.') {
        if (operator === null && memo !== null) {
            display = '0.';
            memo = null;
            return {
                display,
                operator,
                memo,
            };
        }
        if (display.includes('.'))
            return {
                display,
                operator,
                memo,
            };
        if (display === '0' || display === memo) display = '0.';
        else display += data;
    }

    if (data === '%') {
        math();
        const number = new Big(display);
        const newData = number.div(100).toString();
        display = newData;
    }
    return {
        display,
        operator,
        memo,
    };
}

export default calculate;
