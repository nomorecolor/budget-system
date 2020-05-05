import React, { useState } from 'react'

import './login.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export default () => {
    const [passIcon, setPassIcon] = useState(faEye);
    const [passType, setPassType] = useState('password');
    const [info, setInfo] = useState('alert hidden');
    const [infoLabel, setInfoLabel] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let timeout;

    const handleLogin = () => {
        clearTimeout(timeout)
        setInfo('alert hidden')

        if (username === 'admin' && password === 'admin') {
            setInfo('alert success shown')
            setInfoLabel('Login successful!!')
        }
        else {
            setInfo('alert danger shown')
            setInfoLabel('Invalid credentials. Please try again.')
        }

        timeout = setTimeout(() => {
            setInfo('alert hidden')
        }, 3000);

        clearFields();
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
            <div className={info}>
                <FontAwesomeIcon icon={faExclamationCircle} />
                <label>{infoLabel}</label>
            </div>
            <div className='form-wrapper'>
                <p>
                    <label htmlFor='username'>Username</label>
                    <input type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </p>
                <p>
                    <label htmlFor='password'>Password</label>
                    <input type={passType}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <FontAwesomeIcon icon={passIcon} id='icon' onClick={togglePassword} />
                </p>

                <div className='buttons'>
                    <input type='submit'
                        id='Login'
                        value='Login'
                        onClick={handleLogin} />
                    <input type='button'
                        id='Clear'
                        value='Clear'
                        onClick={clearFields} />
                </div>
            </div>
        </div>
    )
}