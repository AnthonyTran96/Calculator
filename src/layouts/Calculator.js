import classNames from 'classnames/bind';
import styles from './Calculator.module.scss';
import Display from '~/components/Display';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Calculator() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('display-section')}>
                <Display displayData="0" />
            </div>
            <div className={cx('button-section')}>
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
                    <Button orange>X</Button>
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
