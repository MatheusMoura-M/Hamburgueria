import React from 'react'
import { Product } from '../Product/product'
import { SectionProduct } from './style'
import { v4 as uuidv4 } from 'uuid'

export const ProductsList = ({products, handleClick}) => {
  return (
    <SectionProduct>
        <ul>
          {products.map(product => <Product handleClick={handleClick} product={product} key={uuidv4()}/>)}
        </ul>
    </SectionProduct>
  )
}
