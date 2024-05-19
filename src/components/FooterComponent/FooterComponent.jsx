import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineFacebook} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {RiTiktokLine} from "react-icons/ri";
import { Col, Row } from 'antd';
import { WrapperIconFooter } from './style';

const FooterComponent = () => {
  return<footer className ="footer" style={{ background: '#FAFAD2'}}> 
    <div className='container'  >
         <Row>
            <Col span={6} style={{paddingLeft: '30px', paddingTop: '15px'}}>
                <div className='footer__about'>
                <h5><span style={{color:'#1c1c1c',background:'#F2C53D'}}>ANVAT</span> <span style={{background: '#09A603', color:'#fff',borderRadius: '5px'}}>Food</span></h5>
                    <ul>
                        <li>
                            Địa chỉ: Sơn Thông, Phường 7, Trà Vinh
                        </li>
                        <li>
                           Phone: 0387-521-506 
                        </li>
                        <li>
                            Email: luuthikimthu2002@gmail.com
                        </li>
                    </ul>
                </div>
           </Col>
            <Col span={12}>
                <div className='footer__widget' >
                    <h3 style={{paddingLeft: '200px'}}>Cửa hàng</h3>
                    <div style={{display:'flex', paddingLeft: '200px'}}>
                    <ul >
                        <li>
                            <Link to={""}>
                                Liên hệ
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                               Thông tin về chúng tôi
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                Sản phẩm kinh doanh
                            </Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to={""}>
                                Thông tin tài khoản
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                               Giỏ hàng
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                               Danh sách ưa thích
                            </Link>
                        </li>
                    </ul>
                </div>
                </div>
            </Col>
            <Col span={6}>
                <div className='footer__widget'>
                    <h3>Khuyến mãi & ưu đãi</h3>
                    <p>Đăng kí nhận thông tin tại đây </p>
                    <form action='#'>
                        <div className='input__group'>
                            <input type='text' placeholder='Nhập email'/>
                            <button type='submit' className='btn__submit'>
                                Đăng ký
                            </button>
                        </div>
                        <div className='footer__widget__social' style={{display: 'flex', fontSize: '20px'}}>
                        <WrapperIconFooter  onClick={'https://www.facebook.com/profile.php?id=100016163381462&mibextid=2JQ9oc'}>
                             <AiOutlineFacebook />            
                        </WrapperIconFooter>
                        <WrapperIconFooter style={{marginLeft: '15px'}}>
                             <AiOutlineInstagram />
                        </WrapperIconFooter>
                        <WrapperIconFooter style={{marginLeft: '15px'}}>
                              <RiTiktokLine />
                        </WrapperIconFooter>
                        </div>
                    </form>
                </div>
                </Col>
            </Row>
    
      </div> 
    </footer> 

    
};
export default FooterComponent; 
