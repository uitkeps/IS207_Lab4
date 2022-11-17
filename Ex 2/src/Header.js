import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontsize="large" className="header__icon"/>
            </IconButton>
            <img className='header__logo' src="logo192.png" alt="header"/>
            <IconButton>
                <PersonIcon fontsize="large" className="header__icon"/>
            </IconButton>
        </div>
    )
}
export default Header 