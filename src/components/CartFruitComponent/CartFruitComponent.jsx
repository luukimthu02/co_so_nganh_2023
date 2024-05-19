import React from 'react'
import { StyleNameProduct, WrapperCartStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import {
    StarFilled
} from '@ant-design/icons';
import { formatter } from '../../formater';
import { WrapperButtonCart } from '../CartComponent/style';
import { IoCartOutline } from 'react-icons/io5';
import { WrapperProducts } from '../../pages/Homepages/style';
import { AiOutlinePhone} from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import { Link, useNavigate } from 'react-router-dom';
import './style.scss'
import FooterComponent from '../FooterComponent/FooterComponent';


const CartFruitComponent = () => {

    const navigate = useNavigate()
    const handelHomePages =() =>{
      navigate('./')
    }
    const handelContact =() =>{
      navigate('./contact')
    }
    const handelProduct =() =>{
      navigate('./:type')
    }
    const handelAbout =() =>{
      navigate('./about')
    }

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

    ]
  return (
    <>
    <div style={{background: '#efefef'}}>

    <div className='list_menu'  style={{padding: '0 300px', display: 'flex',paddingTop: '30px'}}>
        <ul >
          <li onClick={ handelHomePages}>
            TRANG CHỦ
          </li>
          <li onClick={handelProduct}>
            SẢN PHẨM
          </li>
          <li onClick={handelAbout}>
            BÀI VIẾT
          </li>
          <li onClick={handelContact}>
            LIÊN HỆ
          </li>
        </ul>
      </div>

    <div style={{ padding: '0 300px'}}>
            <div className='col-lg-9 hero__search__container'>

                    <div className='hero__item'>
                        <div className='hero__text'>
                            <span>
                               
                            </span>
                            <h2>
                                 Ăn vặt tại đây!
                            </h2>
                            <p>Giao hàng trên toàn quốc
                            <div className='hero__icon'>
                                <LiaShippingFastSolid />
                            </div>    
                            </p>
                            
                            <Link to="" className='primary_btn'>
                                Đặt hàng ngay                                    
                            </Link>
                        </div>

                    </div>
               
            </div>


         

    
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
        <WrapperButtonCart href='#' style={{textDecoration: 'none',justifyContent: 'center', display: 'flex', fontFamily: 'serif', fontWeight: '600', border: '1px solid #f2c53d', cursor: 'pointer'}}>
            Thêm vào 
            <div style={{alignItems: 'center', fontSize: '18px', paddingLeft:'5px', marginTop:'-5px'}} >
                <IoCartOutline/>
            </div>
         </WrapperButtonCart>
    </WrapperCartStyle>
        
    ))}
    </WrapperProducts>
    </div>
    <div style={{paddingTop: '20px'}}>
        <FooterComponent/>
    </div>
    </div>
</>
  )
}
export default CartFruitComponent;
