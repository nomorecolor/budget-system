import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useRouteMatch
} from "react-router-dom";

import './DashboardPage.scss'

import { Navbar } from '../../navbar'

import { CostCenterPage, OperatingExpensePage } from '../'

export default () => {

    let { path } = useRouteMatch();

    return (
        <>
            dashboard
        </>
    )
}