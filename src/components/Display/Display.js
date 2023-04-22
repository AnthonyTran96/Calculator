import classNames from 'classnames/bind';
import styles from './Display.module.scss';

const cx = classNames.bind(styles);

function Display({ displayData }) {
    return <div className={cx('wrapper')}>{displayData}</div>;
}

export default Display;
