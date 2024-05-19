import React from 'react'
import { StyleNameProduct, WrapperCartStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import {
    StarFilled
} from '@ant-design/icons';
import { formatter } from '../../formater';
import { WrapperButtonCart } from '../CartComponent/style';
import { IoCartOutline } from 'react-icons/io5';
import { WrapperProducts } from '../../pages/Homepages/style';
import { Link, useNavigate } from 'react-router-dom';
import Certificate from '../../asset/images/whitney-wright-TgQkxQc-t_U-unsplash.jpg'
import FooterComponent from '../FooterComponent/FooterComponent';
import { LiaShippingFastSolid } from "react-icons/lia";
import './style.scss'

const CartDrinkComponent = () => {

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
            "name": "Sữa tươi trân châu đường đen",
            "price": 17000,
            "buy": "Đã bán 97+",
            "sale": "7%",
            "thumbnail": require ("../../asset/images/drink1.jpg")
        },
        {
            "id": 2,
            "name": "Trà chanh dây",
            "buy": "Đã bán 241+",
            "price": 23000,
            "thumbnail": require ("../../asset/images/drink_chanh_day.jpg")
        },
        {
            "id": 3,
            "name": "Nước cam",
            "buy": "Đã bán 121+",
            "price": 15000,
            "thumbnail": require ("../../asset/images/drink_nuoc_cam.jpg")
        },
        {
            "id": 4,
            "name": "Sinh tố xoài",
            "buy": "Đã bán 346+",
            "price": 30000,
            "thumbnail":  require ("../../asset/images/drink_sinh_to_xoai.jpg")
        },
        {
            "id": 5,
            "name": "Trà dâu tây",
            "buy": "Đã bán 238+",
            "price": 32000,
            "thumbnail": require ("../../asset/images/drink_tra_dau.jpg")
        },        {
            "id": 6,
            "name": "Nước ép ổi",
            "buy": "Đã bán 66+",
            "price": 30000,
            "thumbnail": require ("../../asset/images/drink5.jpg")
        },
        {
            "id": 7,
            "name": "Chè dưỡng nhan",
            "buy": "Đã bán 126+",
            "price": 28000,
            "thumbnail": require ("../../asset/images/drink_che_duong_nhan.jpg")
        }, 
        {
            "id": 8,
            "name": "Trà mãng cầu",
            "buy": "Đã bán 266+",
            "price": 17000,
            "thumbnail": require ("../../asset/images/drink_tra_mang_cau.jpg")
        }, 
        {
            "id": 9,
            "name": "Trà tắc",
            "buy": "Đã bán 426+",
            "price": 17000,
            "thumbnail": require ("../../asset/images/drink_tra_tac.jpg")
        }, 

    ]
  return (
        <>
  
    <div style={{background:' #efefef'}}>

    
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
      <div className="container-fluid col-xl-6 px-3 py-4 hero-container">
            <div className="row flex-lg-row-reverse align-items-center g-5">
            <div className="col-10 col-sm-8 col-lg-5">
                <img
                src={Certificate}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
                />
            </div>
            <div className="col-lg-6 py-5 hero-text">
                <h3 className="display-4 fw-bold ">
                <span>Thực phẩm sạch,không hóa chất độc hại</span>
                </h3>
                <div className="d-flex align-items-center my-5">
                
                <div className='hero__text'>
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
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                </div>
            </div>
            </div>
        </div>

    <WrapperProducts style={{ padding: '0 300px', paddingTop: '50px'}}>
    {product.map((product)=>(
    <div style={{ gap:'15px',marginTop: '10px', flexWrap: 'wrap', justifyContent: 'center', paddingLeft: '12px',}}>
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
            <WrapperStyleTextSell style={{paddingLeft: '10px'}}>| {product.buy}</WrapperStyleTextSell>
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
    </div>  
    ))}
    </WrapperProducts>
    
    <div style={{paddingTop: '20px'}}>
    <FooterComponent/>
    </div>
    </div>
</>
  )
};
export default CartDrinkComponent;
