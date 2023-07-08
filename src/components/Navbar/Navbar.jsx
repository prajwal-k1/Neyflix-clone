import React, { useState } from 'react'
import './navbar.scss'
import logo from '../../images/logo.png'
import { Search } from '@mui/icons-material'
import { AccountCircle, ArrowDropDown, Notifications } from '@material-ui/icons'

export default function Navbar() {

    const [scroll, setScroll] = useState(false);
    window.onscroll = () => {
        setScroll(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    return (
        <div className={scroll ? 'navbar scrolled' : 'navbar'}>
            <div className='left-side'>
                <img src={logo} alt="Netflix" />
                <span>Home</span>
                <span>TV Shows</span>
                <span>Movies</span>
                <span>New & Popular</span>
                <span>My List</span>
                <span>Browse by Languages</span>
            </div>
            <div className='right-side'>
                <Search className='icons' />
                <Notifications className='icons' />
                <div className='profile'>
                    <AccountCircle className='icons' />
                    <ArrowDropDown />
                    <div className='dropdown'>
                        <span className='dropdown-text'>Settings</span>
                        <span className='dropdown-text'>Log-out</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
