import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)
function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/275736270_3167451736872504_3920449088984470837_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xSFN9PBs-xgAX9SuWxq&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT_Qy0p0KZxAgc6uDIpim0uDT38KKfcdsS4HNzlYuI3mcQ&oe=6298F316" alt=""/>
        <div className={cx('info')}>
            <p className={cx('name')}>
                <span>Nguyen Van A</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <span className={cx('username')}>Nguyenvana</span>
        </div>
    </div>;
}

export default AccountItem;