import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUser, faGear, faCoins, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'
import images from '~/assets/images';
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import Image from '~/components/Image'
import Search from '~/layouts/components/Search'
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons'
import config from '~/config'


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

const USER_MENU = [
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
            <Link to={config.routes.home} className={cx('logo')}>
                <Image src={images.logo} alt="tiktok" />
            </Link>

            <Search />

            <div className={cx('actions')}>
                {
                    userCurrent ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content={'Upload video'}
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content={'Message'}
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content={'Inbox'}
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
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
                    items={userCurrent ? USER_MENU : MENU_ITEMS}
                    onChange={handleMenuChange}
                >
                    {userCurrent ? (
                        <Image
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