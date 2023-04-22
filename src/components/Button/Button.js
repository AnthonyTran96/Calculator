import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, orange = false, className, ...passProps }) {
    const classes = cx('wrapper', { [className]: className, orange });
    return (
        <div className={classes} {...passProps}>
            {children}
        </div>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Button;
