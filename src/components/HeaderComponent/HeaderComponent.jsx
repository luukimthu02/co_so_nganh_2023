import { Badge, Col} from 'antd';
import React from 'react'
import { WrapperHeader, WrapperTextHeader,WrapperHeaderAcount,WrapperTextHeaderSmall } from './style';
import {
    UserAddOutlined,
    BellOutlined,
    FacebookOutlined,
    InstagramOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';


const HeaderComponent = () => {
    const navigate = useNavigate()
    const handelNevigatelogin = () =>{
        navigate('./sign-in')
    }
    const handelHomePages =() =>{
        navigate('./')
      }
  return (
    <div>
        <WrapperHeader>
            <Col span={6}>
               <WrapperTextHeader style={{color:'#000', borderRadius: '5px',}} onClick={handelHomePages}>
                <span style={{color:'#1c1c1c',background:'#F2C53D'}}>ANVAT </span><span style={{background: '#09A603', color:'#fff',borderRadius: '5px'}}>Food</span>
               </WrapperTextHeader> 
            </Col>
            <Col span={12}>  
            <ButtonInputSearch 
             bordered = {false}
             size='small'
             placeholder='Bạn đang thèm gì?' 
             textButton='Tìm kiếm'
            />
            </Col>
            <Col span={6} style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                <WrapperHeaderAcount>
                    <UserAddOutlined style={{fontSize: '25px', color:'#272727'}} />
                    <div onClick={handelNevigatelogin} style={{cursor: 'pointer'}}>
                        <WrapperTextHeaderSmall >Đăng nhập/ Đăng ký</WrapperTextHeaderSmall>
                        <div>
                            <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                            <BellOutlined style={{marginRight:'5px' }} />
                            <FacebookOutlined style={{marginLeft: '5px', marginRight: '5px'}}  />
                            <InstagramOutlined />
                        </div>
                       
                    </div>
                </WrapperHeaderAcount>
                <div>
                    <Badge count='4' size='small'>
                        <ShoppingCartOutlined style={{fontSize: '20px', color: '#272727'}} />
                    </Badge>
                    <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                </div>
            </Col>
        </WrapperHeader>
    </div>
  )
}
export default HeaderComponent;
