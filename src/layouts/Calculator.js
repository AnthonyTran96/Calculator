import { useState } from 'react';
import classNames from 'classnames/bind';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import styles from './Calculator.module.scss';
import Display from '~/components/Display';
import Button from '~/components/Button';
import calculate from './calculate';

const cx = classNames.bind(styles);

function Calculator() {
    const [store, setStore] = useState({
        display: '0',
        operator: null,
        memo: null,
    });
    const handleClickBtn = (event) => {
        const data = event.target.innerText;
        const newStore = calculate(data, store);
        setStore(newStore);
    };
    return (
        <div className={cx('wrapper')}>
            <GitHubForkRibbon
                href="https://github.com/AnthonyTran96/Calculator.git"
                color="black"
                target="_blank"
                position="left"
            >
                Fork me on GitHub
            </GitHubForkRibbon>
            <div className={cx('display-section')}>
                {console.log(store)}
                <Display displayData={store.display} />
            </div>
            <div className={cx('button-section')} onClick={handleClickBtn}>
                <div className={cx('row')}>
                    <Button>AC</Button>
                    <Button>+/-</Button>
                    <Button>%</Button>
                    <Button orange>÷</Button>
                </div>
                <div className={cx('row')}>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    <Button orange>x</Button>
                </div>
                <div className={cx('row')}>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button orange>-</Button>
                </div>
                <div className={cx('row')}>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button orange>+</Button>
                </div>
                <div className={cx('row')}>
                    <Button className={cx('large-btn')}>0</Button>
                    <Button>.</Button>
                    <Button orange>=</Button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
