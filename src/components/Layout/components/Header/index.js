import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCloudArrowDown, faMessage, faUser, faGear, faCoins, faSignOut } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as PopperWraper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'


const cx = classNames.bind(styles) // Khong dùng classNames, thì sẽ dùng: classname={styles.postItem}, classname={style['post-item']}
//Khi dùng classname.bind : cx('post-item')


const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },

    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: "/feadback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shorcut',

    },
]

const USER_MENU =[
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: "/@vien",
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: "/coin",
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: "/setting",
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: "/logout",
        separate: true,
    },
]
function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 3000)
    }, [])


    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    }

    const userCurrent = true
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="tiktok" />
            </div>
            <HeadlessTippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWraper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
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
            </HeadlessTippy>
            <div className={cx('actions')}>
                {
                    userCurrent ? (
                        <>
                            <Tippy
                            delay={[0,200]}
                                content={'Upload video'}
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowDown} />
                                </button>
                            </Tippy>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </>
                    ) :
                        (
                            <>
                                <Button text>Register</Button>
                                <Button primary>Log in</Button>
                            </>
                        )
                }
                <Menu
                    items={userCurrent? USER_MENU : MENU_ITEMS}
                    onChange={handleMenuChange}
                >
                    {userCurrent ? (
                        <img
                            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/275736270_3167451736872504_3920449088984470837_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xSFN9PBs-xgAX9SuWxq&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT_Qy0p0KZxAgc6uDIpim0uDT38KKfcdsS4HNzlYuI3mcQ&oe=6298F316"
                            className={cx('user-avatar')}
                            alt='asd'
                        />
                    ) :
                        (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )
                    }
                </Menu>
            </div>
        </div>
    </header>;
}

export default Header;