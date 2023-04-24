import calculate from '../calculate';

//create a local test Store
let store = {
    display: '0',
    operator: null,
    memo: null,
};

//create a middleware calculate function
const _calculate = (arrData) => {
    arrData.forEach((data) => {
        const newStore = calculate(data, store);
        store = { ...newStore };
    });
};

afterEach(() => {
    //reset store
    store = {
        display: '0',
        operator: null,
        memo: null,
    };
});

describe('Test number buttons', () => {
    test('0 to 1', () => {
        _calculate(['1']);
        console.log(store);
        expect(store.display).toBe('1');
    });
    test('0 to 1 to 2', () => {
        _calculate(['1', '2']);
        expect(store.display).toBe('12');
    });
    test('0 to 1 to 2 to 3', () => {
        _calculate(['1', '2', '3']);
        expect(store.display).toBe('123');
    });
});

describe('Test Operator Buttons', () => {
    test('1/2/x', () => {
        _calculate(['1', '2', 'x']);
        expect(store.display).toBe('12');
    });
    test('1/2/x/3', () => {
        _calculate(['1', '2', 'x', '3']);
        expect(store.display).toBe('3');
    });
    test('1/2/x/3/4', () => {
        _calculate(['1', '2', 'x', '3', '4']);
        expect(store.display).toBe('34');
    });
    test('1/2/x/3/4/=', () => {
        _calculate(['1', '2', 'x', '3', '4', '=']);
        expect(store.display).toBe('408');
    });
    test('1/2/x/3/4/=/5', () => {
        _calculate(['1', '2', 'x', '3', '4', '=', '5']);
        expect(store.display).toBe('5');
    });
    test('1/2/x/3/4/=/5/6', () => {
        _calculate(['1', '2', 'x', '3', '4', '=', '5', '6']);
        expect(store.display).toBe('56');
    });
    test('2/x/2/3/=', () => {
        _calculate(['2', 'x', '2', '3', '=']);
        expect(store.display).toBe('46');
    });
    test('1/2/x/3/4/=/5/6/-', () => {
        _calculate(['1', '2', 'x', '3', '4', '=', '5', '6', '-']);
        expect(store.display).toBe('56');
    });
    test('1/2/x/3/4/=/5/6/-/7', () => {
        _calculate(['1', '2', 'x', '3', '4', '=', '5', '6', '-', '7']);
        expect(store.display).toBe('7');
    });
    test('1/2/x/3/4/=/5/6/-/7/8', () => {
        _calculate(['1', '2', 'x', '3', '4', '=', '5', '6', '-', '7', '8']);
        expect(store.display).toBe('78');
    });
    test('1/2/x/3/4/=/5/6/-/7/8/÷', () => {
        _calculate(['1', '2', 'x', '3', '4', '=', '5', '6', '-', '7', '8', '÷']);
        expect(store.display).toBe('-22');
    });
    test('1/2/x/3/4/=/5/6/-/7/8/÷/2', () => {
        _calculate(['1', '2', 'x', '3', '4', '=', '5', '6', '-', '7', '8', '÷', '2']);
        expect(store.display).toBe('2');
    });
    test('1/2/x/3/4/=/5/6/-/7/8/÷/2/0', () => {
        _calculate(['1', '2', 'x', '3', '4', '=', '5', '6', '-', '7', '8', '÷', '2', '0']);
        expect(store.display).toBe('20');
    });
    test('1/2/x/3/4/=/5/6/-/7/8/÷/2/0/=', () => {
        _calculate(['1', '2', 'x', '3', '4', '=', '5', '6', '-', '7', '8', '÷', '2', '0', '=']);
        expect(store.display).toBe('-1.1');
    });
});

describe('Test plus/minus button', () => {
    test('(+/-)', () => {
        _calculate(['+/-']);
        expect(store.display).toBe('0');
    });
    test('1/(+/-)', () => {
        _calculate(['1', '+/-']);
        expect(store.display).toBe('-1');
    });
    test('1/(+/-)/(+/-)', () => {
        _calculate(['1', '+/-', '+/-']);
        expect(store.display).toBe('1');
    });
    test('1/(+/-)/2', () => {
        _calculate(['1', '+/-', '2']);
        expect(store.display).toBe('-12');
    });
    test('1/2/x/3/4/(+/-)', () => {
        _calculate(['1', '2', 'x', '3', '4', '+/-']);
        expect(store.display).toBe('-34');
    });
    test('1/2/x/3/4/(+/-)/(+/-)', () => {
        _calculate(['1', '2', 'x', '3', '4', '+/-', '+/-']);
        expect(store.display).toBe('34');
    });
    test('1/2/x/3/4/(+/-)/=', () => {
        _calculate(['1', '2', 'x', '3', '4', '+/-', '=']);
        expect(store.display).toBe('-408');
    });
    test('1/2/x/3/4/(+/-)/=/1/2/x/3/4/+', () => {
        _calculate(['1', '2', 'x', '3', '4', '+/-', '=', '1', '2', 'x', '3', '4', '+']);
        expect(store.display).toBe('408');
    });
    test('1/2/x/3/4/(+/-)/=/1/2/x/3/4/+/(+/)', () => {
        _calculate(['1', '2', 'x', '3', '4', '+/-', '=', '1', '2', 'x', '3', '4', '+', '+/-']);
        expect(store.display).toBe('-408');
    });
    test('1/2/x/3/4/(+/-)/=/1/2/x/3/4/+/(+/)/5', () => {
        _calculate(['1', '2', 'x', '3', '4', '+/-', '=', '1', '2', 'x', '3', '4', '+', '+/-', '5']);
        expect(store.display).toBe('5');
    });
    test('1/2/x/3/4/(+/-)/=/1/2/x/3/4/+/(+/)/5/6', () => {
        _calculate(['1', '2', 'x', '3', '4', '+/-', '=', '1', '2', 'x', '3', '4', '+', '+/-', '5', '6']);
        expect(store.display).toBe('56');
    });
    test('1/2/x/3/4/(+/-)/=/1/2/x/3/4/+/(+/)/5/6/=', () => {
        _calculate(['1', '2', 'x', '3', '4', '+/-', '=', '1', '2', 'x', '3', '4', '+', '+/-', '5', '6', '=']);
        expect(store.display).toBe('-352');
    });
});

describe('Test % Button', () => {
    test('%', () => {
        _calculate(['%']);
        expect(store.display).toBe('0');
    });
    test('1/(%)', () => {
        _calculate(['1', '%']);
        expect(store.display).toBe('0.01');
    });
    test('1/(%)/(%)', () => {
        _calculate(['1', '%', '%']);
        expect(store.display).toBe('0.0001');
    });
    test('1/(%)/2', () => {
        _calculate(['1', '%', '2']);
        expect(store.display).toBe('0.012');
    });
    test('1/2/x/3/4/(%)', () => {
        _calculate(['1', '2', 'x', '3', '4', '%']);
        expect(store.display).toBe('4.08');
    });
    test('1/2/x/3/4/(%)/(%)', () => {
        _calculate(['1', '2', 'x', '3', '4', '%', '%']);
        expect(store.display).toBe('4.08');
    });
    test('1/2/x/3/4/(%)/=', () => {
        _calculate(['1', '2', 'x', '3', '4', '%', '=']);
        expect(store.display).toBe('4.08');
    });
    test('1/2/x/3/4/(%)/=/1/2/x/3/4/+', () => {
        _calculate(['1', '2', 'x', '3', '4', '%', '=', '1', '2', 'x', '3', '4', '+']);
        expect(store.display).toBe('408');
    });
    test('1/2/x/3/4/(%)/=/1/2/x/3/4/+/(%)', () => {
        _calculate(['1', '2', 'x', '3', '4', '%', '=', '1', '2', 'x', '3', '4', '+', '%']);
        expect(store.display).toBe('408');
    });
    test('1/2/x/3/4/(%)/=/1/2/x/3/4/+/(+/)/5', () => {
        _calculate(['1', '2', 'x', '3', '4', '%', '=', '1', '2', 'x', '3', '4', '+', '%', '5']);
        expect(store.display).toBe('5');
    });
    test('1/2/x/3/4/(%)/=/1/2/x/3/4/+/(+/)/5/6', () => {
        _calculate(['1', '2', 'x', '3', '4', '%', '=', '1', '2', 'x', '3', '4', '+', '%', '5', '6']);
        expect(store.display).toBe('56');
    });
    test('1/2/x/3/4/(%)/=/1/2/x/3/4/+/(+/)/5/6/=', () => {
        _calculate(['1', '2', 'x', '3', '4', '%', '=', '1', '2', 'x', '3', '4', '+', '%', '5', '6', '=']);
        expect(store.display).toBe('464');
    });
});

describe('Test dot. Button', () => {
    test('.', () => {
        _calculate(['.']);
        expect(store.display).toBe('0.');
    });
    test('1/(.)', () => {
        _calculate(['1', '.']);
        expect(store.display).toBe('1.');
    });
    test('1/(.)/(.)', () => {
        _calculate(['1', '.', '.']);
        expect(store.display).toBe('1.');
    });
    test('1/(.)/2', () => {
        _calculate(['1', '.', '2']);
        expect(store.display).toBe('1.2');
    });
    test('1/+/3/=/3/.', () => {
        _calculate(['1', '3', '=', '3', '.']);
        expect(store.display).toBe('3.');
    });
    test('1/2/x/3/4/(.)', () => {
        _calculate(['1', '2', 'x', '3', '4', '.']);
        expect(store.display).toBe('34.');
    });
    test('1/2/x/3/4/(.)/(.)', () => {
        _calculate(['1', '2', 'x', '3', '4', '.', '.']);
        expect(store.display).toBe('34.');
    });
    test('1/2/x/3/4/(.)/=', () => {
        _calculate(['1', '2', 'x', '3', '4', '.', '=']);
        expect(store.display).toBe('408');
    });
    test('1/2/x/3/4/(.)/=/1/2/x/3/4/+', () => {
        _calculate(['1', '2', 'x', '3', '4', '.', '=', '1', '2', 'x', '3', '4', '+']);
        expect(store.display).toBe('408');
    });
    test('1/2/x/3/4/(.)/=/1/2/x/3/4/+/(.)', () => {
        _calculate(['1', '2', 'x', '3', '4', '.', '=', '1', '2', 'x', '3', '4', '+', '.']);
        expect(store.display).toBe('0.');
    });
    test('1/2/x/3/4/(.)/=/1/2/x/3/4/+/(.)/5', () => {
        _calculate(['1', '2', 'x', '3', '4', '.', '=', '1', '2', 'x', '3', '4', '+', '.', '5']);
        expect(store.display).toBe('0.5');
    });
    test('1/2/x/3/4/(.)/=/1/2/x/3/4/+/(.)/5/6', () => {
        _calculate(['1', '2', 'x', '3', '4', '.', '=', '1', '2', 'x', '3', '4', '+', '.', '5', '6']);
        expect(store.display).toBe('0.56');
    });
    test('1/2/x/3/4/(.)/=/1/2/x/3/4/+/(.)/5/6/=', () => {
        _calculate(['1', '2', 'x', '3', '4', '.', '=', '1', '2', 'x', '3', '4', '+', '.', '5', '6', '=']);
        expect(store.display).toBe('408.56');
    });
});

describe('Test AC buttons', () => {
    test('AC', () => {
        _calculate(['AC']);
        expect(store.display).toBe('0');
    });
    test('1/2/AC', () => {
        _calculate(['1', '2', 'AC']);
        expect(store.display).toBe('0');
    });
    test('1/2/AC/1/2/+/3/4/=', () => {
        _calculate(['1', '2', 'AC', '1', '2', '+', '3', '4', '=']);
        expect(store.display).toBe('46');
    });
});
