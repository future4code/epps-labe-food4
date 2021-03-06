import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;

    #input{
        width: 300px;
    }
`

export const VisibleDiv = styled.div`
    display: ${props => props.errorPassword ? 'inline-block' : 'none'};
`

export const P = styled.p`
    margin: 5px 119px 0 16px;
    color: red;
    text-align: start;
    font-size: 12px;
`