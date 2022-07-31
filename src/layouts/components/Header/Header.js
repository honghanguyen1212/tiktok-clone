import classNames from 'classnames/bind';
import styles from 'Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return <header className={cx('wrapper-header')}>Header</header>;
};

export default Header;
