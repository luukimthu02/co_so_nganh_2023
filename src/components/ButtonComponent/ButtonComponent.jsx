import { Button } from 'antd/es/radio'
import React from 'react'
import {
    SearchOutlined,
} from '@ant-design/icons';

 const ButtonComponent = (size, styleButton, styleTextButton, textbutton= 'Tìm kiếm', disabled, ...rests) => {
  return (
    <Button
        style={{
          styleButton,
          background: disabled ? '#ccc' : styleButton.background
        }}
        size={size}
        {...rests}
      >
        <span style={styleTextButton}>{textbutton}</span>
      </Button>
  )
}
export default ButtonComponent;


