import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import { Button, Col, Row } from 'antd'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
import {WrapperNavbar, WrapperProducts,StyleNameProduct, WrapperCartStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import {
     StarFilled
 } from '@ant-design/icons';
import { formatter } from '../../formater'
import { IoCartOutline } from 'react-icons/io5';

export const TypeProductPage = () => {
             const product =[
        {
            "id": 1,
            "name": "Khóm",
            "price": 12000,
            "buy": "Đã bán 101+",
            "thumbnail": require ("../../asset/images/featiem2.jpg")
        },
        {
            "id": 2,
            "name": "Xoài",
            "buy": "Đã bán 211+",
            "price": 17000,
            "thumbnail": require ("../../asset/images/featitem4.jpg")
        },
        {
            "id": 3,
            "name": "Dưa hấu",
            "buy": "Đã bán 91+",
            "price": 13000,
            "thumbnail": require ("../../asset/images/featitem5.jpg")
        },
        {
            "id": 4,
            "name": "Dâu tây",
            "buy": "Đã bán 306+",
            "price": 200000,
            "thumbnail":  require ("../../asset/images/featitem6.jpg")
        },
        {
            "id": 5,
            "name": "Cherry",
            "buy": "Đã bán 238+",
            "price": 500000,
            "thumbnail": require ("../../asset/images/featitem10.jpg")
        },        {
            "id": 6,
            "name": "Chôm chôm",
            "buy": "Đã bán 96+",
            "price": 22000,
            "thumbnail": require ("../../asset/images/chom_chom.jpg")
        },
        {
            "id": 7,
            "name": "Măng cụt",
            "buy": "Đã bán 126+",
            "price": 35000,
            "thumbnail": require ("../../asset/images/mang_cut.jpeg")
        }, 
        {
            "id": 8,
            "name": "Me ngâm",
            "buy": "Đã bán 106+",
            "price": 20000,
            "thumbnail": require ("../../asset/images/me_ngam.jpg")
        }, 
        {
            "id": 9,
            "name": "Sầu riêng",
            "buy": "Đã bán 46+",
            "price": 120000,
            "thumbnail": require ("../../asset/images/sau_rieng.jpg")
        },
        {
            "id": 10,
            "name": "Táo đỏ",
            "buy": "Đã bán 401+",
            "price": 37000,
            "thumbnail": require ("../../asset/images/tao_do.jpg")
        }, 

        {
            "id": 11,
            "name": "Trân châu đường đen",
            "price": 17000,
            "buy": "Đã bán 97+",
            "sale": "7%",
            "thumbnail": require ("../../asset/images/drink1.jpg")
        },
        {
            "id": 12,
            "name": "Trà chanh dây",
            "buy": "Đã bán 241+",
            "price": 23000,
            "thumbnail": require ("../../asset/images/drink_chanh_day.jpg")
        },
        {
            "id": 13,
            "name": "Nước cam",
            "buy": "Đã bán 121+",
            "price": 15000,
            "thumbnail": require ("../../asset/images/drink_nuoc_cam.jpg")
        },
        {
            "id": 14,
            "name": "Sinh tố xoài",
            "buy": "Đã bán 346+",
            "price": 30000,
            "thumbnail":  require ("../../asset/images/drink_sinh_to_xoai.jpg")
        },
        {
            "id": 15,
            "name": "Trà dâu tây",
            "buy": "Đã bán 238+",
            "price": 32000,
            "thumbnail": require ("../../asset/images/drink_tra_dau.jpg")
        },        {
            "id": 16,
            "name": "Nước ép ổi",
            "buy": "Đã bán 66+",
            "price": 30000,
            "thumbnail": require ("../../asset/images/drink5.jpg")
        },
        {
            "id": 17,
            "name": "Chè dưỡng nhan",
            "buy": "Đã bán 126+",
            "price": 28000,
            "thumbnail": require ("../../asset/images/drink_che_duong_nhan.jpg")
        }, 
        {
            "id": 18,
            "name": "Trà mãng cầu",
            "buy": "Đã bán 266+",
            "price": 17000,
            "thumbnail": require ("../../asset/images/drink_tra_mang_cau.jpg")
        }, 
        {
            "id": 19,
            "name": "Trà tắc",
            "buy": "Đã bán 426+",
            "price": 17000,
            "thumbnail": require ("../../asset/images/drink_tra_tac.jpg")
        }, 
        {
            "id": 20,
            "name": "Trà dâu tây",
            "buy": "Đã bán 238+",
            "price": 32000,
            "thumbnail": require ("../../asset/images/drink_tra_dau.jpg")
        },        {
            "id": 21,
            "name": "Nước ép ổi",
            "buy": "Đã bán 66+",
            "price": 30000,
            "thumbnail": require ("../../asset/images/Item12.jpg")
        },
        {
            "id": 22,
            "name": "Chè dưỡng nhan",
            "buy": "Đã bán 126+",
            "price": 28000,
            "thumbnail": require ("../../asset/images/Item1.jpg")
        }, 
        {
            "id": 23,
            "name": "Trà mãng cầu",
            "buy": "Đã bán 266+",
            "price": 17000,
            "thumbnail": require ("../../asset/images/Item3.jpg")
        }, 
        {
            "id": 24,
            "name": "Trà tắc",
            "buy": "Đã bán 426+",
            "price": 17000,
            "thumbnail": require ("../../asset/images/featItem8.jpg")
        },


    ]
  return (
     <>
    <div style={{ background: '#efefef'}}>
    <div style={{padding: '0 120px'}}>
    <Row style={{flexWrap:'nowrap', paddingTop: '10px'}}>
       < WrapperNavbar span={4} >
            < NavbarComponent/>
       </ WrapperNavbar>

       <Col span={20}>
       <WrapperProducts style={{paddingTop: '20px'}}>
    {product.map((product)=>(
       
       <WrapperCartStyle 
        hoverable
        headStyle={{width:'200px', height:'200px'}}
        style={{ width: 200, borderRadius: '5px'}}
        bodyStyle={{padding: '10px' }}
        cover={<img alt="example" src={product.thumbnail} />}
    >
        <StyleNameProduct style={{fontSize: '18px', fontWeight: '600', fontFamily: 'serif',textAlign: 'center'}}>{product.name}</StyleNameProduct>
       <WrapperReportText > 
        <span style={{marginRight: '4px'}}>
            <span>{product.rating}</span>
            <StarFilled style={{ fontSize:'12px', color: 'yellow'}} /> 
            <WrapperStyleTextSell>| {product.buy}</WrapperStyleTextSell>
        </span>
        </WrapperReportText >
        <WrapperPriceText >
            <span style={{marginRight: '8px'}}>{formatter(product.price)}</span>
            <WrapperDiscountText>
               {product.sale}
            </WrapperDiscountText>
        </WrapperPriceText>
        <Button href='#' style={{textDecoration: 'none',justifyContent: 'center', display: 'flex', fontFamily: 'serif', fontWeight: '600', border: '1px solid #f2c53d', cursor: 'pointer'}}>
            Thêm vào 
            <div style={{alignItems: 'center', fontSize: '18px', paddingLeft:'5px', marginTop:'-5px'}} >
                <IoCartOutline/>
            </div>
         </Button>
    </WrapperCartStyle>
        
    ))}
    </WrapperProducts>
       </Col>
     
    </Row>
    </div>
    <div style={{paddingTop: '20px'}}> 
    <FooterComponent/>
    </div>
    </div>
     
   
    </>
  )
}
