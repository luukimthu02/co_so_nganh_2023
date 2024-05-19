
import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight } from '../SiginPage/style'
import { Image } from 'antd'
import itemBackground from '../../asset/images/hero1.png'
import { BsEnvelope, BsClock } from "react-icons/bs";
import { FaHeadphonesAlt, FaFacebook  } from "react-icons/fa";
import { WrapperText } from './style';
import { IoHomeOutline } from "react-icons/io5";


export const ContactPages = () => {
  return (
    <>    
{/* // <Image src={backgroundcontact} preview={false}> */}
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'rgba(1,1,1,0.53)', }}>
    <div style={{display: 'flex',width: '1000px', height: '600px', borderRadius: '6px', background: '#fff', }}>
        <WrapperContainerLeft style={{border:'1px solid #efefef'}}>
          <h2 style={{textAlign: 'center'}}>THÔNG TIN CHI TIẾT</h2>
          <div style={{paddingLeft: '30px', paddingTop: '20px'}}>
          <div style={{paddingTop: '10px'}}><BsClock /> Mở cửa: <WrapperText>7AM - 22PM</WrapperText></div>
          <div style={{paddingTop: '10px'}}><BsEnvelope /> Email: <WrapperText>luuthikimthu2002@gmail.com</WrapperText></div> 
          <div style={{paddingTop: '10px'}}><FaHeadphonesAlt /> Số điện thoại:<WrapperText>0387521506</WrapperText> </div> 
          <div style={{paddingTop: '10px'}}><FaFacebook /> Facebook: <WrapperText>Luu Kim Thu</WrapperText></div>
          <div style={{paddingTop: '10px'}}><IoHomeOutline /> Địa chỉ: <WrapperText>Đường Sơn Thông, khóm 1, phường 7, thành phố Trà Vinh</WrapperText></div>

          </div>
          <div class="input-group mb-3 mt-4 w-100" style={{paddingTop: '20px'}}>
          <input
            type="text"
            class="form-control p-2"
            placeholder="Đóng góp ý kiến?"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button class="btn btn-warning px-4" type="button" id="button-addon2">
           Gửi
          </button>
        </div>
        <h3 style={{paddingTop: '120px', fontFamily: 'unset', color: '#1c1c1c', textAlign: 'center',fontSize: '18px'}}>Cảm ơn quý khách đã ghé thăm <span style={{background:'#F2C53D', color:'#000', borderRadius: '5px',}}> ANVATFood</span> ạ!</h3>

        </WrapperContainerLeft>
        <WrapperContainerRight>
            <Image src={itemBackground } preview={false} style={{ height: '203px', width: '210px'}}/>
            <h4 style={{fontSize: '18px'}}>Ăn vặt cùng <span style={{background:'#F2C53D', color:'#000', borderRadius: '5px',}}>ANVATFood!</span></h4>
        </WrapperContainerRight>
       
   </div>
  </div>
    
  </>
  )
}
