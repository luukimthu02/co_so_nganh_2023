import styled from "styled-components";

export const WrapperTypeProduct = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    gap: 24px;
    justifi-content; flex-start;
    height: 40px;
`
export const WrapperButtonMore = styled.div`
    & :hover {
        background: #027353;
        boder: none;
        color: #fff;
    }
    padding-top: 20px;
    width: 100%;
    text-align: center;

`
export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px; 
    padding-top: 60px;
    flex-wrap: wrap;

    
`
export const WrapperTitle = styled.p`
    :after{
        left:0;
        bottom: -15px;
        right: 0;
        height: 4px;
        width: 80px;
        background:#f2c53d;
    }
    
`