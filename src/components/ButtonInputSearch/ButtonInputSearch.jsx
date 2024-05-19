import InputComponent  from '../InputComponent/InputComponent';
import React from 'react'
import {
  SearchOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';

const ButtonInputSearch = (props) => {
      const {
        size, placeholder, textbutton = 'Tìm kiếm',
        bordered, backgroundColorInput = '#fff',
        backgroundColorButton = '#f2c53d',
        colorButton = '#fff'
      } = props
  return (
    <div style={{display: 'flex'}}>
        <InputComponent
         size={size} 
         placeholder={placeholder} 
         bordered={bordered} 
         style={{background:backgroundColorInput, width: '600px'}}
        />
        <Button
          style={{fontSize: '10px', border: !bordered && 'none',background: backgroundColorButton}}
        >
            
           <SearchOutlined color={colorButton} style={{ color: '#fff' }} />
           <span  style={{fontSize: '15px'}}>{textbutton}</span>
        </Button>
    </div>
  )
}
export default ButtonInputSearch;
