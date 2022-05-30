import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'

import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as PopperWraper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'


const cx = classNames.bind(styles) // Khong dùng classNames, thì sẽ dùng: classname={styles.postItem}, classname={style['post-item']}
//Khi dùng classname.bind : cx('post-item')

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 3000)
    }, [])
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="tiktok" />
            </div>
            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWraper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>

                        </PopperWraper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input type='text' placeholder='Search account and video' spellCheck={false} />
                    <button className={cx('search-clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button primary>Log in</Button>
            </div>
        </div>
    </header>;
}

export default Header;