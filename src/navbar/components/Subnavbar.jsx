import React from 'react'
import { NavLink } from 'react-router-dom'

import './Subnavbar.scss'

export default ({ value }) => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav sub">
                {
                    value.links.map(sub => (
                        <li className="nav-item" key={sub.name}>
                            <NavLink className='nav-link' to={`/${value.subLink}/${sub.link}`} exact>
                                <h3>{sub.name}</h3>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav >
    )
}