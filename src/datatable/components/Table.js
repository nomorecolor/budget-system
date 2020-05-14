import styled from 'styled-components';

export const Table = styled.div`
    border: 1px solid #d8d8d8;
    
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    box-sizing: border-box;

    ${props => props.even && 'border-bottom: none'}
`

