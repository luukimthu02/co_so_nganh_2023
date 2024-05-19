import React from 'react'
import { StyleNameProduct, WrapperButtonCart, WrapperCartStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import {
    StarFilled
} from '@ant-design/icons';
import item1 from '../../asset/images/Item12.jpg'
import item2 from '../../asset/images/Item1.jpg'
import item3 from '../../asset/images/Item3.jpg'
import item4 from '../../asset/images/featItem8.jpg'
import item5 from '../../asset/images/featitem3.png'
import item6 from '../../asset/images/featitem5.jpeg'
import { formatter } from '../../formater';
import { useNavigate } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";


const CartComponent = () => {
    const navigate = useNavigate()
    const handelNevigateDetails = () =>{
        navigate('./product-details1')
    }

    const ahandelNevigateDetails = () =>{
        navigate('./product-details2')
    }
    const bhandelNevigateDetails = () =>{
        navigate('./product-details3')
    }
    const chandelNevigateDetails = () =>{
        navigate('./product-details4')
    }
    const dhandelNevigateDetails = () =>{
        navigate('./product-details5')
    }
    const ehandelNevigateDetails = () =>{
        navigate('./product-details6')
    }
  return (
    <>
    <WrapperCartStyle onClick={ ahandelNevigateDetails}
        hoverable
        headStyle={{width:'200px', height:'200px'}}
        style={{ width: 200, borderRadius: '5px'}}
        bodyStyle={{padding: '10px' }}
        cover={<img alt="example" src={item1} />}
    >
        <StyleNameProduct style={{fontSize: '18px', fontWeight: '600', fontFamily: 'serif',textAlign: 'center'}}>Pizza</StyleNameProduct>
       <WrapperReportText > 
        <span style={{marginRight: '4px'}}>
            <span>4.95</span>
            <StarFilled style={{ fontSize:'12px', color: 'yellow'}} /> 
            <WrapperStyleTextSell>| Đã bán 234+</WrapperStyleTextSell>
        </span>
        </WrapperReportText >
        <WrapperPriceText >
            <span style={{marginRight: '8px'}}>{formatter(220000)}</span>
            <WrapperDiscountText>
                -7%
            </WrapperDiscountText>
        </WrapperPriceText>
        <WrapperButtonCart href='#' style={{textDecoration: 'none',justifyContent: 'center', display: 'flex', fontFamily: 'serif', fontWeight: '600', border: '1px solid #f2c53d', cursor: 'pointer'}}>
            Thêm vào 
            <div style={{alignItems: 'center', fontSize: '18px', paddingLeft:'5px', marginTop:'-5px'}} >
                <IoCartOutline/>
            </div>
         </WrapperButtonCart>
    </WrapperCartStyle>
    
    <WrapperCartStyle onClick={handelNevigateDetails}
        hoverable
        headStyle={{width:'200px', height:'200px'}}
        style={{ width: 200, borderRadius: '5px'}}
        bodyStyle={{padding: '10px' }}
        cover={<img alt="example" src={item2} />}
    >
        <StyleNameProduct style={{fontSize: '18px', fontWeight: '600', fontFamily: 'serif',textAlign: 'center'}}>Mì cay</StyleNameProduct>
    <WrapperReportText > 
        <span style={{marginRight: '4px'}}>
            <span>4.5</span>
            <StarFilled style={{ fontSize:'12px', color: 'yellow'}} /> 
            <WrapperStyleTextSell>| Đã bán 2310+</WrapperStyleTextSell>
        </span>
        </WrapperReportText >
        <WrapperPriceText >
            <span style={{marginRight: '8px'}}>{formatter(45000)}</span>
            <WrapperDiscountText>
                -5%
            </WrapperDiscountText>
        </WrapperPriceText>
        <WrapperButtonCart href='#' style={{textDecoration: 'none',justifyContent: 'center', display: 'flex', fontFamily: 'serif', fontWeight: '600', border: '1px solid #f2c53d', cursor: 'pointer'}}>
            Thêm vào 
            <div style={{alignItems: 'center', fontSize: '18px', paddingLeft:'5px', marginTop:'-5px'}} >
                <IoCartOutline/>
            </div>
         </WrapperButtonCart>
    </WrapperCartStyle>

    <WrapperCartStyle onClick={bhandelNevigateDetails}
        hoverable
        headStyle={{width:'200px', height:'200px'}}
        style={{ width: 200, borderRadius: '5px'}}
        bodyStyle={{padding: '10px' }}
        cover={<img alt="example" src={item3} />}
    >
        <StyleNameProduct style={{fontSize: '18px', fontWeight: '600', fontFamily: 'serif',textAlign: 'center'}}>Bánh xèo</StyleNameProduct>
    <WrapperReportText > 
        <span style={{marginRight: '4px'}}>
            <span>4.0</span>
            <StarFilled style={{ fontSize:'12px', color: 'yellow'}} /> 
            <WrapperStyleTextSell>| Đã bán 345+</WrapperStyleTextSell>
        </span>
        </WrapperReportText >
        <WrapperPriceText >
            <span style={{marginRight: '8px'}}>{formatter(22000)}</span>
            <WrapperDiscountText>
                -5%
            </WrapperDiscountText>
        </WrapperPriceText>
        <WrapperButtonCart href='#' style={{textDecoration: 'none',justifyContent: 'center', display: 'flex', fontFamily: 'serif', fontWeight: '600', border: '1px solid #f2c53d', cursor: 'pointer'}}>
            Thêm vào 
            <div style={{alignItems: 'center', fontSize: '18px', paddingLeft:'5px', marginTop:'-5px'}} >
                <IoCartOutline/>
            </div>
         </WrapperButtonCart>
    </WrapperCartStyle>

    <WrapperCartStyle onClick={chandelNevigateDetails}
        hoverable
        headStyle={{width:'200px', height:'200px'}}
        style={{ width: 200, borderRadius: '5px'}}
        bodyStyle={{padding: '10px' }}
        cover={<img alt="example" src={item4} />}
    >
        <StyleNameProduct style={{fontSize: '18px', fontWeight: '600', fontFamily: 'serif',textAlign: 'center'}}>Burger</StyleNameProduct>
    <WrapperReportText > 
        <span style={{marginRight: '4px'}}>
            <span>4.90</span>
            <StarFilled style={{ fontSize:'12px', color: 'yellow'}} /> 
            <WrapperStyleTextSell>| Đã bán 456+</WrapperStyleTextSell>
        </span>
        </WrapperReportText >
        <WrapperPriceText >
            <span style={{marginRight: '8px'}}>{formatter(58000)}</span>
            <WrapperDiscountText>
                -8%
            </WrapperDiscountText>
        </WrapperPriceText>
        <WrapperButtonCart href='#' style={{textDecoration: 'none',justifyContent: 'center', display: 'flex', fontFamily: 'serif', fontWeight: '600', border: '1px solid #f2c53d', cursor: 'pointer'}}>
            Thêm vào 
            <div style={{alignItems: 'center', fontSize: '18px', paddingLeft:'5px', marginTop:'-5px'}} >
                <IoCartOutline/>
            </div>
         </WrapperButtonCart>
    </WrapperCartStyle>

    <WrapperCartStyle onClick={dhandelNevigateDetails}
        hoverable
        headStyle={{width:'200px', height:'200px'}}
        style={{ width: 200, borderRadius: '5px'}}
        bodyStyle={{padding: '10px' }}
        cover={<img alt="example" src={item5} />}
    >
        <StyleNameProduct style={{fontSize: '18px', fontWeight: '600', fontFamily: 'serif',textAlign: 'center'}}>Mì ý</StyleNameProduct>
    <WrapperReportText > 
        <span style={{marginRight: '4px'}}>
            <span>4.57</span>
            <StarFilled style={{ fontSize:'12px', color: 'yellow'}} /> 
            <WrapperStyleTextSell>| Đã bán 398+</WrapperStyleTextSell>
        </span>
        </WrapperReportText >
        <WrapperPriceText >
            <span style={{marginRight: '8px'}}> {formatter(120000)}</span>
            <WrapperDiscountText>
                -10%
            </WrapperDiscountText>
        </WrapperPriceText>
        <WrapperButtonCart href='#' style={{textDecoration: 'none',justifyContent: 'center', display: 'flex', fontFamily: 'serif', fontWeight: '600', border: '1px solid #f2c53d', cursor: 'pointer'}}>
            Thêm vào 
            <div style={{alignItems: 'center', fontSize: '18px', paddingLeft:'5px', marginTop:'-5px'}} >
                <IoCartOutline/>
            </div>
         </WrapperButtonCart>
    </WrapperCartStyle>

    <WrapperCartStyle onClick={ehandelNevigateDetails}
        hoverable
        headStyle={{width:'200px', height:'200px'}}
        style={{ width: 200, borderRadius: '5px'}}
        bodyStyle={{padding: '10px' }}
        cover={<img alt="example" src={item6} />}
    >
        <StyleNameProduct style={{fontSize: '18px', fontWeight: '600', fontFamily: 'serif',textAlign: 'center'}}>Gỏi cuốn</StyleNameProduct>
    <WrapperReportText > 
        <span style={{marginRight: '4px'}}>
            <span>4.79</span>
            <StarFilled style={{ fontSize:'12px', color: 'yellow'}} /> 
            <WrapperStyleTextSell>| Đã bán 796+</WrapperStyleTextSell>
        </span>
        </WrapperReportText >
        <WrapperPriceText >
            <span style={{marginRight: '8px'}}> {formatter(35000)}</span>
            <WrapperDiscountText>
                -5%
            </WrapperDiscountText>
        </WrapperPriceText>
        <WrapperButtonCart href='#' style={{textDecoration: 'none',justifyContent: 'center', display: 'flex', fontFamily: 'serif', fontWeight: '600', border: '1px solid #f2c53d', cursor: 'pointer'}}>
            Thêm vào 
            <div style={{alignItems: 'center', fontSize: '18px', paddingLeft:'5px', marginTop:'-5px'}} >
                <IoCartOutline/>
            </div>
         </WrapperButtonCart>
    </WrapperCartStyle>


</>
  )
}
export default CartComponent;
