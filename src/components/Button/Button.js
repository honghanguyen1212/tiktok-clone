import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({ children, onClick }) => {
    return <button>{children}</button>;
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
