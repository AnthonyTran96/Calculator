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
        if (operator === '%') return;
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
        if (display === memo || display === '-' + memo || display === '0') {
            if (data === display) memo += '.0';
            if (operator === '%') display += data;
            else display = data;
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
        if (display === memo) memo = newData;
        display = newData;
    }

    if (data === '.') {
        if (display === memo) {
            display = '0.';

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
        if (display !== memo || operator === '%') {
            const number = new Big(display);
            const newData = number.div(100).toString();
            display = newData;
            memo = newData;
        }
    }
    return {
        display,
        operator,
        memo,
    };
}

export default calculate;
