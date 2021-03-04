import styled from 'styled-components'

export const Container = styled.div`
width: 360px;
height: 49px;
margin: 13px 0 0;
box-shadow: 0 -1px 3px 0 rgba(0,0,0,0.2), 0 -2px 1px -1px rgba(0,0,0,0.12), 0 -1px 1px 0 rgba(0,0,0,0.14);
background-color: #ffffff;

display: flex;
justify-content: space-around;

.icon{
    width: 27px;
    height: 27px;

    margin: 11px;
    img{
        cursor: pointer;
        height: 100%;
        width: 100%;
    }
}
`