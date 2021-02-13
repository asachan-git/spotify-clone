import { SearchOutlined } from '@material-ui/icons'
import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from "./DataLayer"

function Header({ spotify }) {
    const [{ user }, dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input  
                    placeholder="Search for Artists, Songs or Albums"
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="user.display_name" />
                <h4>Aniket Sachan</h4>
            </div>
        </div>
    )
}

export default Header
