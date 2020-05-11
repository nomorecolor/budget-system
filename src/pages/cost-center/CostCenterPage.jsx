import React from 'react'

import './CostCenterPage.scss'
import DataTable from 'react-data-table-component'

const columns = [{
    name: 'Cost Center Name',
    selector: 'name',
}, {
    name: 'Cost Center Code',
    selector: 'id',
}]

const data = [{
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
}
]

const ExpanableComponent = ({ data }) => {
    return (
        <>
            {data.children.map(x => {
                return (
                    <>
                        <label>{data.name}</label>
                        <label>{data.id}</label>
                    </>
                );
            })}
        </>
    )
};

export default () => {
    return (
        <div className='cost-center-wrapper'>
            <div className='filter'>
                <label>Cost Center No</label>
                <input></input>
                <label>Cost Center Name</label>
                <input></input>

                <input type='button' className='primary' value='Search'></input>
            </div>
            <div className='data'>
                <DataTable
                    columns={columns}
                    data={data}
                    noHeader
                    expandableRows
                    expandOnRowClicked
                />
            </div>
        </div>
    )
}