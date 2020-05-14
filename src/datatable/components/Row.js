import styled from 'styled-components';

export const RowBase = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
`

export const Row = styled(RowBase)`
    background-color: white;
    cursor: pointer;

    &:nth-child(odd) {
        border-top: 1px solid #d8d8d8;
        border-bottom: 1px solid #d8d8d8;
    }

    &:hover {
        transition: all 0.3s;
        background-color: #f3f3f3;
    }
`

export const HeaderRow = styled(RowBase)`
    background-color: #f3f3f3;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 1px solid #d8d8d8;
`

export const ExpandableRow = styled(RowBase)`
    display: flex;
    flex-direction: column;
`