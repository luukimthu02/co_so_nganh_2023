import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextValue } from './style'
import {Checkbox, Rate} from 'antd'



const NavbarComponent = () => {
    const onChange =() =>{}
    const renderContent = (type, options) =>{
        switch(type){
            case 'text':
                return options.map((option) =>{
                        return (
                            <WrapperTextValue>{option}</WrapperTextValue>
                        )
                })
            case 'checkbox':
                return(
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                        {options.map((option) =>{
                            return (
                                <Checkbox value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                        
                    </Checkbox.Group>

                )
                case 'star':
                    return options.map((option) =>{
                                return (
                                    <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> 
                                        <Rate disabled defaultValue={option} />
                                        <span > từ {option} sao </span>
                                    </div>
                                )
                            })
                case 'price':
                    return options.map((option) =>{
                        return (
                            <div style={{padding: '3px',borderRadius: '10px', background: '#ccc', width: 'fit-content'}}>
                                {option}
                            </div>
                        )
                })

                 default:
                return{}
        }
    }
  return (
    <div>
        <WrapperLabelText>Thông tin chi tiết</WrapperLabelText>
        <WrapperContent style={{marginBottom: '20px'}}>
            {renderContent('text', ['Thức ăn đêm', 'Thức ăn vặt', 'Đồ uống'])}
        </WrapperContent>
        <WrapperContent style={{marginBottom: '20px'}}>
            {renderContent('checkbox', 
                [{value: 'a', label: 'A'},
                {value: 'b', label: 'B'}      
            ])}
        </WrapperContent>
        <WrapperContent style={{marginBottom: '20px'}}>
            {renderContent('star', [3,4,5])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('price', ['dưới 20.000','trên 20.000', 'từ 20.000 đến 100.000', 'trên 100.000'])}
        </WrapperContent>
    </div>
  )
}
export default NavbarComponent;