import React, { useState } from 'react'

import './DataTable.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

import { Cell, ExpandableCell, ExpanderCell } from './Cell'
import { Row, HeaderRow, ExpandableRow } from './Row'
import { Table } from './Table'


export default props => {

    let title = props.title
    let headers = props.headers || []
    let data = props.data || []
    let keyField = props.keyField || 'id'
    let noData = props.noData || 'No records found.'
    let noTitle = props.noTitle || false
    let expandableRows = props.expandableRows || false
    let expandableRowsHidden = props.expandableRowsHidden || false

    const [rows, setRows] = useState(data.map(d => ({ isExpanded: false })))

    const handleExpandableRowOnClick = (index) => {
        const newRows = [...rows];
        newRows[index].isExpanded = !newRows[index].isExpanded;

        setRows(newRows);
    }

    const renderTitle = () => {
        return (
            <div className='tblTitle'>
                {title}
            </div>
        )
    }

    const renderHeader = () => {
        let expander = expandableRows ? (
            <ExpandableCell className='tblExpandableCell'>
            </ExpandableCell>
        )
            : ''

        let headerView =
            <HeaderRow className='tblHeaderRow'>
                {expander}
                {headers.map((header, index) => {
                    return (
                        <Cell className='tblHeaderCell' key={index}>
                            <div>{header.desc}</div>
                        </Cell>
                    )
                })}
            </HeaderRow>

        return headerView
    }

    const renderContent = () => {
        let contentView = data.map((row, index) => {
            let id = row[keyField];

            let tds = headers.map((header, headIndex) => {
                let content = row[header.key]
                let cell = header.cell;

                if (cell) {
                    if (typeof (cell) === "function") {
                        content = cell(row);
                    }
                }

                return (
                    <Cell className='tblCell'
                        key={headIndex}
                        data-id={id}
                        data-row={index}>
                        <div>
                            {content}
                        </div>
                    </Cell>
                )
            })

            let children = row.children.map((child, childIndex) => {
                let id = child[keyField];

                let tds = headers.map((header, headIndex) => {
                    let content = child[header.key]

                    return (
                        <ExpanderCell className='tblExpanderCell'
                            key={headIndex}
                            data-id={id}
                            data-row={childIndex}>
                            <div>
                                {content}
                            </div>
                        </ExpanderCell>
                    )
                })

                return (
                    <Row className='tblRow'
                        key={childIndex}>
                        {tds}
                    </Row>
                )
            })

            let expander = expandableRows ? (
                <ExpandableCell className='tblExpandableCell' expanded={rows[index].isExpanded}>
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                </ExpandableCell>
            )
                : ''

            let childrenRow = expandableRows
                ? rows[index].isExpanded ? '' : (
                    <ExpandableRow className='tblExpandableRow'>
                        {children}
                    </ExpandableRow>
                ) : ''

            return (
                <>
                    <Row className='tblRow'
                        key={index}
                        onClick={() => handleExpandableRowOnClick(index)}>
                        {expander}
                        {tds}
                    </Row>
                    {childrenRow}
                </>
            )
        })

        return contentView
    }

    const renderNoData = () => {
        return (
            <Row className='tblRow'>
                <Cell className='tblCell tblNoData'>
                    <div>
                        {noData}
                    </div>
                </Cell>
            </Row>
        )
    }

    const renderTable = () => {
        let titleView = noTitle
            ? ''
            : renderTitle()
        let headerView = renderHeader()
        let contentView = data.length > 0
            ? renderContent()
            : renderNoData()

        return (
            <Table className="tblTable" even={data.length % 2 === 0}>
                {titleView}
                {headerView}
                {contentView}
            </Table>
        );
    }

    return renderTable()
}