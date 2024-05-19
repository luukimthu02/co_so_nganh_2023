import React, { useState } from 'react'
/*import TypeProduct  from '../../components/TypeProduct/TypeProduct';*/
import {WrapperButtonMore, WrapperProducts}  from './style';
import SlideComponent  from '../../components/SlideComponent/SlideComponent';
import slider1 from '../../asset/images/slide_2.jpg';
import slider2 from '../../asset/images/1.jpg';
import slider3 from '../../asset/images/slide_5.jpg';
import slider4 from '../../asset/images/trai-cay-giau-canxi.jpg';
import item1 from '../../asset/images/Item1.jpg';
import item2 from '../../asset/images/featitem6.jpg';
import item3 from '../../asset/images/Item3.jpg';
import item4 from '../../asset/images/Item4.jpg';
import item5 from '../../asset/images/drink4.jpg';
import item6 from '../../asset/images/Item12.jpg';
import Process1 from '../../asset/images/say-kho-hoa-qua-2.jpg'
import Process2 from '../../asset/images/traicaysaydeo (1).jpg'
import Process3 from '../../asset/images/fresh-orange-juice-glass-dark-background.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CartComponent  from '../../components/CartComponent/CartComponent';
import { Button } from 'antd';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineMenu  } from "react-icons/ai";
import './style.scss'


const HomePages = () => {
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
  const handelJruit =() =>{
    navigate('./fruit')
  }
  const handelDrink =() =>{
    navigate('./drink')
  }
  const [isShowcategories, setShowcategories] = useState(true);
  const  [menu] = useState([

    {
     
      isShowsubmenu: false,
      child: [
          {
              name: "Đồ ăn vặt",
              path: "", 
          },
          {
              name: "Đồ ăn đêm",
              path: "", 
          },
          {
              name: "Đồ uống",
              path: "", 
          }
      ]

    },

  ])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const sliderItems = [
    {
        img:item1,
        name: "Mì cay"

    },
    {
        img: item2,
        name: "Dâu tây"

    },
    {
        img: item3,
        name: "Bánh xèo"

    },
    {
        img: item4,
        name: "Bánh ướt"

    },
    {
        img: item5,
        name: "Trà trái cây"

    },
    {
      img: item6,
      name: "Pizza"

  }
  ];
  
  return (
   <>
   <div style={{display: 'flex',background:' #efefef'}}>
      <div style={{ paddingTop: '10px'}}>
       <div className=' hero__categories'>
                    <div className='hero__categories__all' onClick={() => setShowcategories(!isShowcategories)}>
                       <AiOutlineMenu/>
                        Danh sách sản phẩm
                    </div >
                         <ul className={ isShowcategories ? "" : "hidden "} >
                         <li onClick={handelDrink}>
                              <Link to ={""}>
                               Đồ uống  
                              </Link>
                         </li>
                         <li onClick={handelJruit}>
                              <Link to ={""}>
                              Trái cây
                              </Link>
                         </li>
                     </ul> 
          </div>
      </div>

      <div className='list_menu'  style={{ padding: '0 300px',paddingTop: '10px', paddingLeft: '0'}}>
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
    </div>

    <div >
      <div style={{background:' #efefef'}}>
      <div id='container' style={{ height: 'auto',padding: '0 300px'}}>
        <div>
         <SlideComponent  arrImages={[slider1, slider2, slider3,slider4]} style={{width: '100px', outerHeight: '100px'}}>
         </SlideComponent>
         </div>

            <div className="container delivery-process" style={{paddingTop: '50px'}}>
            <h4 className='text-center display-6 fw-bold mt-4'><span style={{background: '#fff'}}>Các loại </span><span style={{background: '#09a603', color: '#fff'}}>sản phẩm mới</span></h4>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3" style={{paddingTop: '50px'}}>
            <div className="col px-5 text-center">
                <div className="mb-3">
                <img src={Process1} className='w-100 h-100' alt="" />
                </div>
                <h5>Rau củ quả sấy lạnh</h5>
                <p>
                    Giữ được hương vị của các loại rau quả trái mùa
                </p>
            </div>
            <div className=" col px-5 text-center">
                <div className="mb-3">
                <img src={Process2} className='w-100 h-100' alt="" />
                </div>
                <h5>Trái cây sấy dẻo</h5>
                <p>
                Có thể ăn hoặc tặng vào những ngày lễ tết
                </p>
            </div>
            <div className=" col px-5 text-center">
                <div className="mb-3">
                <img src={Process3} className='w-100 h-100' alt="" />
                </div>
                <h5>Nước ép rau củ quả</h5>
                <p>
                    Phù hợp với những người không thể ăn trực tiếp rau củ quả
                </p>
            </div>
            </div>
        </div>

        
        <div className='title__product' style={{paddingTop: '-20px'}}> <h4 className='text-center display-6 mt-4 fw-bold' style={{paddingTop:'0px', paddingBottom: '20px',}}><span style={{background: '#fff'}}>Sản phẩm </span><span style={{background: '#09a603', color: '#fff'}}>nổi bật</span></h4></div>
          {/*Categories Begin*/}
            <div className="container container__categories__slide">
               <Carousel responsive={responsive} className="categories__slide"> 
               {sliderItems.map((item, key) =>(
                 <div className="categories__slide__items"
                 style = {{backgroundImage: `url(${item.img})`}}
                 key = {key}
                  >
                  <p> {item.name} </p>  
                  </div>
                 
               ) )}
            </Carousel>
            </div>
            {/*Categories end*/}


         <WrapperProducts>
              <CartComponent/>
         </WrapperProducts>
         {/* <p style={{textAlign: 'center', marginTop: '50px', fontSize: '25px', textTransform: 'uppercase', fontWeight: '400', fontFamily: '-moz-initial'}}>Đồ uống</p> */}
         {/* <WrapperProducts>
          <CartDrinkComponent/>
         </WrapperProducts>
         <p style={{textAlign: 'center', marginTop: '50px', fontSize: '25px', textTransform: 'uppercase', fontWeight: '400', fontFamily: '-moz-initial'}}>Trái cây</p>
         <WrapperProducts>
              <CartFruitComponent/>
         </WrapperProducts> */}
         <div style={{width: '100%', display: 'flex', marginTop:'10px', justifyContent: 'center',textAlign: 'center'}}>
          <WrapperButtonMore>
            <Button style={{border: '1px solid #027353', color: '#000', width: '240px', borderRadius: '5px', height: '38px', fontSize: '15px', fontWeight: '500'}}>
                    Xem thêm
            </Button>
          </WrapperButtonMore>
         </div>
         
         
      </div>
      <div style={{paddingTop: '30px'}}>
             <FooterComponent/>
      </div>
      </div>
       
    
    </div>
    </>
  )
}
export default HomePages;
