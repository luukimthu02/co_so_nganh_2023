import React from 'react'
import { ProductDetailComponent } from '../../components/ProductDetailComponent/ProductDetailComponent'
import { useNavigate } from 'react-router-dom'

export const ProductDetailPage = () => {

  return (
    <div style={{padding: '0 120px', background: '#efefef', height: '1000px'}}>
        <h5 >Trang chủ</h5>
            <ProductDetailComponent/>      

    </div>
  )
}
