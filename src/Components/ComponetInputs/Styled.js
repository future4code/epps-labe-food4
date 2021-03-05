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
    margin: 8px 0 0 15px;
    color: red;
    text-align: start;
    font-size: 15px;
`