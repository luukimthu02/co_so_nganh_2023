import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding: 10px 200px;
    background-color: #FAFAD2;
    align-items:center;
    gap: 16px;
    flex-wrap: nowrap;
    height: 80px;

`
export const WrapperTextHeader = styled.span`
    font-size: 27px;
    color: #1c1c1c;
    font-weigth: bold;
    font-family: "Roboto";
    text-align: left;
`
export const WrapperHeaderAcount = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const WrapperTextHeaderSmall = styled.span`
    font-size: 15px;
    white-space: nowrap;
`