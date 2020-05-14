import React, { useState, useEffect } from 'react'

import './CostCenterPage.scss'

import { DataTable } from '../../datatable'

const tempData = [{
    id: 1000, name: 'Shared Cost/Executive Office',
    children: [{ id: 1010, name: 'Executive Department' },
    { id: 1020, name: 'Operations and Sales Management Trainees (OTP & SMTP)' },
    { id: 1030, name: 'Board of Directors' }]
}, {
    id: 1001, name: 'Office of the Coordinators',
    children: [{ id: 1050, name: 'Office of the Coordinators' },
    { id: 1210, name: 'Legal and Regulatory' },
    { id: 1610, name: 'Internal Audit' },
    { id: 1620, name: 'Revenue Assurance, Fraud Management and Risk Assessment' }]
},
{
    id: 1100, name: 'Human Resources and Organization Development',
    children: [{ id: 1110, name: 'Office of the HROD Head/Learning and Development' },
    { id: 1120, name: 'Talent Management' }]
}]

const headers = [
    { desc: 'Cost Center Name', key: 'name' },
    { desc: 'Cost Center Code', key: 'id' }
]

export default () => {
    const [data, setData] = useState([])
    const [ccNo, setCcNo] = useState('')
    const [ccName, setCcName] = useState('')

    // Get data from database
    useEffect(() => {
        let temp = tempData

        if (temp) {
            setData(temp)
        }
    }, [])

    const handleSearch = () => {
        let searchNo = ccNo.trim().toUpperCase()
        let searchName = ccName.trim().toUpperCase()

        let searchData = []

        if (searchNo === '' && searchName === '') {
            setData(tempData)
        }
        else {
            data.forEach(d => {
                let newChildren = d.children.filter(child => {
                    let no = child.id.toString().toUpperCase()
                    let name = child.name.toString().toUpperCase()

                    return (no.includes(searchNo) && searchNo !== '')
                        || (name.includes(searchName) && searchName != '')
                })

                if (newChildren.length === 0) {
                    let no = d.id.toString().toUpperCase()
                    let name = d.name.toString().toUpperCase()

                    d.children = []

                    if ((no.includes(searchNo) && searchNo !== '')
                        || (name.includes(searchName) && searchName != ''))
                        searchData.push(d)
                }
                else {
                    d.children = newChildren

                    searchData.push(d)
                }
            })

            setData(searchData)
        }
    }

    const renderDataTable = () => {
        return (
            data.length > 0 ? <DataTable className='data-table'
                keyField='id'
                headers={headers}
                data={data}
                noData="No records!"
                noTitle
                expandableRows
            /> : null
        )
    }

    return (
        <div className='cost-center-wrapper'>
            <div className='filter'>
                <div>
                    <label>Cost Center No</label>
                    <input onChange={(e) => setCcNo(e.target.value)} />
                </div>
                <div>
                    <label>Cost Center Name</label>
                    <input onChange={(e) => setCcName(e.target.value)} />
                </div>

                <input className='primary'
                    type='button'
                    value='Search'
                    onClick={() => handleSearch()} />
            </div>
            <div className='data'>
                {renderDataTable()}
            </div>
        </div>
    )
}