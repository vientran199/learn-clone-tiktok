import { useState, useEffect, useRef } from 'react'
import classNames from "classnames/bind";
import styles from "./Search.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faSpinner
} from '@fortawesome/free-solid-svg-icons'
import * as searchServices from '~/apiServices/searchServices'
import HeadlessTippy from '@tippyjs/react/headless'
import AccountItem from "~/components/AccountItem";
import { Wrapper as PopperWraper } from '~/components/Popper'
import { SearchIcon } from "~/components/Icons";
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles)
function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult,setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()

    const debounce = useDebounce(searchValue,500)

    useEffect(() => {
        if(!debounce.trim()){
            setSearchResult([])
            return
        }

        const fetchAPi = async ()=>{
            setLoading(true)
            const result = await searchServices.search(debounce);
            setSearchResult(result)

            setLoading(false)
        }
        
        fetchAPi()
    }, [debounce])

    const handleHideResult = () =>{
        setShowResult(false)
    }
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWraper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {
                            searchResult.map(account => {
                                return <AccountItem key={account.id} data={account}/>
                            } )
                        }
                    </PopperWraper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input 
                    ref={inputRef}
                    type='text'
                    value={searchValue} 
                    placeholder='Search account and video' 
                    spellCheck={false} 
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue &&!loading && (
                    <button 
                        className={cx('search-clear')} 
                        onClick={(e) => {
                            setSearchValue('')
                            setSearchResult([])
                            inputRef.current.focus()
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                { loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;