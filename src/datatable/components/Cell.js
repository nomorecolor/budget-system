import styled from 'styled-components';

export const CellBase = styled.div`
    width: 100%;
    min-width: 100px;
    min-height: 50px;
    display: flex;
    align-items: center;

    overflow: hidden;
    text-overflow: ellipsis;

    padding: 1em;
`

export const Cell = styled(CellBase)`

`

export const HeaderCell = styled(CellBase)`

`

export const ExpandableCell = styled(CellBase)`
    width: auto;
    min-width: 20px;
    justify-content: center;
    transition: transform .3s;
    ${props => props.expanded && 'transform: rotate(-180deg);'}
`


export const ExpanderCell = styled(CellBase)`
    padding-left: 5em;
`