import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import './Login.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faExclamationCircle, faLock, faUser } from '@fortawesome/free-solid-svg-icons'

export default ({ msg }) => {
    const [passIcon, setPassIcon] = useState(faEye);
    const [passType, setPassType] = useState('password');
    const [info, setInfo] = useState('alert');
    const [infoLabel, setInfoLabel] = useState(msg ? msg : 'Use your LDAP account to sign in');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    let timeout;

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            setInfo('alert success')
            setInfoLabel('Login successful!!')

            history.push("/cc")
        }
        else {
            setInfo('alert danger')
            setInfoLabel('Incorrect username or password. Please try again.')
        }

        clearFields();
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter')
            handleLogin()
    }

    const clearFields = () => {
        setUsername('')
        setPassword('')
    }

    const togglePassword = () => {
        if (passType === 'password') {
            setPassIcon(faEyeSlash);
            setPassType('text');
        }
        else {
            setPassIcon(faEye);
            setPassType('password');
        }
    }

    return (
        <div className='login-container'>
            <div className='title'>
                <h2>Login</h2>
            </div>
            <div className={info}>
                <label>{infoLabel}</label>
            </div>
            <div className='form-wrapper'>
                <p>
                    <FontAwesomeIcon icon={faUser} id='icon-placeholder' />
                    <input placeholder='Username'
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e)} />
                </p>
                <p>
                    <FontAwesomeIcon icon={faLock} id='icon-placeholder' />
                    <input placeholder='Password'
                        type={passType}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e)} />
                </p>

                <div className='buttons'>
                    <input type='button'
                        className='primary'
                        value='Login'
                        onClick={handleLogin} />
                    <input type='button'
                        className='secondary'
                        value='Clear'
                        onClick={clearFields} />
                </div>
            </div>
        </div>
    )
}