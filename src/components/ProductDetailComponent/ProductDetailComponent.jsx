import { Col, Row, Image, Button } from 'antd'
import React from 'react'
import imageProduct from '../../asset/images/Item1.jpg'
import { WapperStyleNameProduct, WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleTextSell } from './style'
import {
    StarFilled,
    PlusOutlined,
    MinusOutlined
} from '@ant-design/icons';
import { formatter } from '../../formater';

export const ProductDetailComponent = () => {
    const onChange = () => {}
  return (
    <>
    
    <Row style={{padding: '16px', background: '#fff', borderRadius: '4px'}}>
        <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight: '8px'}}> 
            <Image src={imageProduct} atl='image product' preview={false}/>
        </Col>
        <Col span={14}  style={{paddingLeft: '20px'}} >
            <WapperStyleNameProduct>Mì cay Hàn Quốc 7 cấp độ</WapperStyleNameProduct>
            <div>
                <StarFilled style={{fontSize: '12px', color:'yellow'}} />
                <StarFilled style={{fontSize: '12px', color:'yellow'}} />
                <StarFilled style={{fontSize: '12px', color:'yellow'}} />
                <StarFilled style={{fontSize: '12px', color:'yellow'}} />
                <StarFilled style={{fontSize: '12px', color:'yellow'}} />
                <WrapperStyleTextSell>| Đã bán 2310</WrapperStyleTextSell>
            </div>
            <WrapperPriceProduct>
                <WrapperPriceTextProduct>{formatter(45000)}</WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <div style={{fontSize: '20px', fontWeight: '500'}}>
                <p> Vị chua chua, cay cay trong những món ăn khiến ai đã dùng qua đều phải
                    nhung nhớ mỗi khi nhắc đến. Đó là các món ăn đặc trưng đến từ xứ sở kim chi,
                    đất nước Hàn Quốc xinh đẹp. Với vị ngon của tô mì cay đong đầy tươi ngon, nồi lẩu hương kim chi khiến bạn như được đưa đến thiên đường ẩm thực chuẩn xứ Hàn. 
                    Vậy còn chần chừ gì nữa, hãy mau mau đến với Seoul Đồng An nơi vị giác được đánh thức và khơi dậy.
                </p>
            </div>
            <WrapperAddressProduct>
                <span>Giao đến </span>
                <span className='address'>Đường Sơn Thông, khóm 1, phường 7, Thành phố Trà Vinh</span> -
                <span className='change-address'> Đổi địa chỉ </span>
            </WrapperAddressProduct >
            <div style={{margin: '20px 0 40px',padding: '10px 0', borderBottom: '1px solid #e5e5e5', borderTop: '1px solid #e5e5e5'}}>
                <div style={{ marginBottom: '10px', fontSize: '18px'}}>Số lượng</div>
                <WrapperQualityProduct>
                    <Button style={{border: 'none'}}>
                        <PlusOutlined style={{fontSize: '15px', color: '#f2b705'}} />
                    </Button>    
                    <WrapperInputNumber  defaultValue={3} onChange={onChange} />
                    <Button style={{border: 'none'}}>
                        <MinusOutlined style={{fontSize: '15px', color: '#f2b705'}}/>
                    </Button>    
                </WrapperQualityProduct>
            </div>
            <div>
                <Button size={40} style={{fontSize: '15px', background: '#078c03', color: '#fff', textAlign: 'center', height: '48px', width: '220px', border: 'none', borderRadius: '4px', fontWeight: '700'}}>CHỌN MUA</Button>
            </div>
        </Col>
    </Row>

    </>
  )
}
