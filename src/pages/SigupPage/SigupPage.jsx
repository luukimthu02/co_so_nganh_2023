import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from '../SiginPage/style'
import InputForm from '../../components/InputForm/InputForm'
import { Button, Image } from 'antd'
import itemBackground from '../../asset/images/2.jpeg'

export const SigupPage = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'rgba(0,0,0,0.53)'}}>
    <div style={{display: 'flex',width: '800px', height: '443px', borderRadius: '6px', background: '#fff'}}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập hoặc Tạo tài khoản</p>
          <InputForm style={{marginBottom: '10px'}} placeholder='abc@gmail.com'/>
          <InputForm placeholder='Password' style={{marginBottom: '10px'}}/>
          <InputForm placeholder='Confirm Password'/>
          <Button size={40} style={{fontSize: '18px', background: '#d93e30', color: '#fff', textAlign: 'center', height: '48px', border: 'none', borderRadius: '4px', fontWeight: '400', width: '100%', margin: '26px 0 10px', }}>Đăng ký </Button>
          <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
          <p>Bạn đã có tài khoản? <WrapperTextLight>Đăng ký</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
            <Image src={itemBackground } preview={false} style={{ height: '203px', width: '203px'}}/>
            <h4>Ăn vặt cùng tui!</h4>
        </WrapperContainerRight>
   </div>
  </div>
  )
}
