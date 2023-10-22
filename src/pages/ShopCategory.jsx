import { useContext } from 'react'
import './CSS/ShopCategory.css'

import React from 'react'
import { ShopContext } from '../components/ShopContext/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../components/Item/Item'


const ShopCategory = ({banner,category}) => {
  const {all_products}=useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={banner} alt="" />

      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {
          all_products.map((item,i)=>{
            // (category===item.category)&&

            if(category===item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }else{
              return null;
            }
          })
        }
      </div>
    </div>
  )
}

export default ShopCategory
