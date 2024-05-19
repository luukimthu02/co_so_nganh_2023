import { Col, Card } from "antd";
import styled from "styled-components";

export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px; 
    margin-top: 20px;
    flex-wrap: wrap; 
`

export const WrapperNavbar= styled(Col)`
    margin-right: 10px;
    border-radius: 5px;
    background: #fff;
    padding: 10px;
    height: fit-content;
    margin-top: 20px;
`

export const WrapperCartStyle = styled(Card)`
    width: 200px;
    & img {
        height: 200px;
        width: 200px;
    }
`

export const StyleNameProduct = styled.div`
    font-weight: 400px;
    font-size: 12px;
    line-height: 16px;
    color: rgb(56,56,61);
`
export const WrapperReportText = styled.div`
    font-size: 13px;
    color: rgb(128,128,137);
    display: flex;
    align-items: center;
    margin: 6px 0 0px;

`
export const WrapperPriceText = styled.div`
    display: flex;
    font-size:16px;
    font-weight: 500;
    color: #BF2604;
    justify-content: center;
    
`
export const WrapperDiscountText = styled.div`
    font-size:12px;
    font-weight: 500;
    color: rgb(255, 66, 78);
`
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120,120,120);
`