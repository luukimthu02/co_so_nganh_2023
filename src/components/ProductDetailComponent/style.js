import { InputNumber } from "antd";
import styled from "styled-components";

export const WapperStyleNameProduct = styled.h1`
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    word-break: break-word;
`
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120,120,120);
`
export const WrapperPriceProduct = styled.div`
    background: rgb(250, 250, 250);
    border-radius: 4px;
`
export const WrapperPriceTextProduct = styled.h1`
   font-size: 32px;
   line-height: 40px;
   margin-right: 8px;
   font-weight: 500;
   padding: 10px;
   margin-top: 10px;
`

export const WrapperAddressProduct = styled.div`
    span.address{
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    },
    span.change-address{
        color: #f2b705;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
    }
`
export const WrapperQualityProduct = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    margin-top: 10px;
    width: 150px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

export const WrapperInputNumber = styled(InputNumber)`
    width: 60px;
    border-top: none;
    border-bottom: none;

`

