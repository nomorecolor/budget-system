import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Subnavbar } from '../../navbar'

import './Navbar.scss'

import Icon from '../../assets/icon.png'

let defaultLink = {
    'subLink': 'cc',
    'links': [
        { 'name': 'Operating Expense', 'link': 'oe' },
        { 'name': 'Capital Expenditure', 'link': 'ce' },
        { 'name': 'Other Staff Expense', 'link': 'ose' }
    ],
    'default': '/cc/oe'
}

export default () => {
    const [subnavbar, setSubnavbar] = useState(defaultLink)

    let history = useHistory()

    const handleSubnavbar = tag => {
        switch (tag) {
            case 'cc':
                defaultLink =
                {
                    'subLink': 'cc',
                    'links': [
                        { 'name': 'Operating Expense', 'link': 'oe' },
                        { 'name': 'Capital Expenditure', 'link': 'ce' },
                        { 'name': 'Other Staff Expense', 'link': 'ose' }
                    ],
                    'default': '/cc/oe'
                }
                break
            case 'rev':
                defaultLink = {
                    'subLink': 'rev',
                    'links': [
                        { 'name': 'Detailed', 'link': 'det' },
                        { 'name': 'Consolidated', 'link': 'con' }
                    ],
                    'default': '/rev/det'
                }
                break
        }

        setSubnavbar(defaultLink)

        history.push(defaultLink.default)
    }

    return (
        <>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <img src={Icon} id='logo' alt='website logo' />
                    <li className="nav-item" onClick={() => handleSubnavbar('cc')} >
                        <h3>Cost Centers</h3>
                    </li>
                    <li className="nav-item" onClick={() => handleSubnavbar('rev')} >
                        <h3>Revenue</h3>
                    </li>
                    <li className="nav-item">
                        <h3>Fixed Staff Expenses</h3>
                    </li>
                    <li className="nav-item">
                        <h3>Others</h3>
                    </li>
                    <li className="nav-item">
                        <h3>Reports</h3>
                    </li>
                    <li className="nav-item">
                        <h3>Admin</h3>
                    </li>
                    <div className='user'>
                        <label>Hi, Admin!</label>
                        <label>Log-out</label>
                    </div>
                </ul>
            </nav>
            <Subnavbar value={subnavbar} />
        </>
    )
}