import React from 'react'

import './LoginPage.scss'

import { Login } from '../../login'

import Icon from '../../assets/icon.png'

export default () => {
    return (
        <div className='login-wrapper'>
            {/* <img src={Icon} id='logo' alt='website logo' /> */}
            <div id='login'>
                <h1>Budget System Automation</h1>
                <Login />
            </div>
        </div>
    )
}