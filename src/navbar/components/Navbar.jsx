import React, { useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom'

import { Subnavbar } from '../../navbar'

import './Navbar.scss'

import Icon from '../../assets/icon.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { faMoneyBillWave, faWallet, faEllipsisH, faFileAlt, faUserCog } from '@fortawesome/free-solid-svg-icons'

// let defaultLink = {
//     'subLink': 'cc',
//     'links': [
//         { 'name': 'Operating Expense', 'link': 'oe' },
//         { 'name': 'Capital Expenditure', 'link': 'ce' },
//         { 'name': 'Other Staff Expense', 'link': 'ose' }
//     ],
//     'default': '/cc/oe'
// }

export default () => {
    // const [subnavbar, setSubnavbar] = useState(defaultLink)

    // let history = useHistory()

    // const handleSubnavbar = tag => {
    //     switch (tag) {
    //         case 'cc':
    //             defaultLink =
    //             {
    //                 'subLink': 'cc',
    //                 'links': [
    //                     { 'name': 'Operating Expense', 'link': 'oe' },
    //                     { 'name': 'Capital Expenditure', 'link': 'ce' },
    //                     { 'name': 'Other Staff Expense', 'link': 'ose' }
    //                 ],
    //                 'default': '/cc/oe'
    //             }
    //             break
    //         case 'rev':
    //             defaultLink = {
    //                 'subLink': 'rev',
    //                 'links': [
    //                     { 'name': 'Detailed', 'link': 'det' },
    //                     { 'name': 'Consolidated', 'link': 'con' }
    //                 ],
    //                 'default': '/rev/det'
    //             }
    //             break
    //     }

    //     setSubnavbar(defaultLink)

    //     history.push(defaultLink.default)
    // }

    return (
        <>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <img src={Icon} id='logo' alt='website logo' />
                    <li>
                        <NavLink to='/cc' className="nav-item">
                            <FontAwesomeIcon icon={faBitcoin} className='icon' />
                            <p>Cost Centers</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/rev' className="nav-item">
                            <FontAwesomeIcon icon={faMoneyBillWave} className='icon' />
                            <p>Revenue</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/fse' className="nav-item">
                            <FontAwesomeIcon icon={faWallet} className='icon' />
                            <p>Fixed Staff Expenses</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/oth' className="nav-item">
                            <FontAwesomeIcon icon={faEllipsisH} className='icon' />
                            <p>Others</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/rep' className="nav-item">
                            <FontAwesomeIcon icon={faFileAlt} className='icon' />
                            <p>Reports</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/adm' className="nav-item">
                            <FontAwesomeIcon icon={faUserCog} className='icon' />
                            <p>Admin</p>
                        </NavLink>
                    </li>
                    <div className='user'>
                        <label>Hi, Admin!</label>
                        <label>Log-out</label>
                    </div>
                </ul>
            </nav>
        </>
    )
}