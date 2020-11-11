import React, { useState } from 'react'
import './header.css'
import MenuSharpIcon from '@material-ui/icons/MenuSharp'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom'
function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className='header'>

            <div className="header__left">

                <MenuSharpIcon />
                <Link to='/'>
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/200px-YouTube_Logo_2017.svg.png" alt="" />
                </Link>
            </div>
            <div className="header__input">

                <input type="text" placeholder="Search" onChange={e => setInputSearch(e.target.value)} value={inputSearch} />
                <Link to={`/search/${inputSearch}`}>
                    <SearchSharpIcon className="header__inputButton" />
                </Link>

            </div>

            <div className="header__icons">

                <VideoCallSharpIcon className="header__icon" />
                <AppsSharpIcon className="header__icon" />
                <NotificationsSharpIcon className="header__icon" />
                <Avatar
                    alt="Remy Sharp"
                    src="https://lh3.googleusercontent.com/MwPA1Y9ZGpu99CMNjxBzCfcntGyCJwa5sOLDF0Lo4tHPZrVMhtE-cgraHFv9UhCJQuS1ZPLA7YDvhXODuJbF6tjg7cCdngquyIrr98pRtQce48mxSRhiig2qDQrEh8izNUaNHgX4MofA0-4_3zg7ioUuftJ9ggcheNhO86vqGCmNnlw722dQs72S8RrKB_q9tUCATkvUfUvzVT3_Y9AwaBPfXIByFPkfk6Shasi9KXG0qMRZivFqXNHVYfpImTOjkVGJvmgD-46ZpZ5F4MQF9X8KLnSP8aG3mE2pgoxXaDPbBYLu75hSL1Ct7GG31tOpgYYn3ZIiAVddwyP-DtX7ztGlErkS309qvrjmPIpifieILOZJ3PasD9T1H4lzZIDuBLyatT280GSQPh0XIX5RveyLaCDEQwK104e9ocGiVjLhWOLmjU33kqZf7C-KH3ejAPoh5UIA0aOeeVayzRkXxh7UVhBo21Nc1krm0ww-e8Svr_e2PFrM4GnZ6Hnx7BmVnQ-gIQ0PJxb2-TZilbqu8S0ZC89l81bd6xC48grNvhF2LVcxP2ZdITmjhLj3hSnupp7-BxRI0S5bG_06CplyX7mxeWR9O-jLFe6Sm45-wTYry3yRF_VttpFpJ2xZTQmxHMW1-OtI3BXmylqK83Xh0NXAHzXF4eR-1a_pygpvs7RqG23-79XeYSxVgszCAw=w354-h200-no?authuser=0" />
            </div>
        </div>
    )
}

export default Header
