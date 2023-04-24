import Big from 'big.js';

// const [store, setStore] = useState({
//     display: '0',
//     operator: null,
//     memo: null,
// });
function calculate(data, store) {
    let { display, operator, memo } = { ...store };
    if (!isNaN(data)) {
        if (display === '0') display = data;
        else display += data;
    }

    return {
        display,
        operator,
        memo,
    };
}

export default calculate;
