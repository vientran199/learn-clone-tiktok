import classNames from 'classnames/bind'
import styles from './Header.module.scss'

const cx = classNames.bind(styles) // Khong dùng classNames, thì sẽ dùng: classname={styles.postItem}, classname={style['post-item']}
//Khi dùng classname.bind : cx('post-item')

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            {/* logo */}
            {/* search */}
        </div>
    </header>;
}

export default Header;