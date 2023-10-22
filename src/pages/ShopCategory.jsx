import { useContext } from "react";
import "./CSS/ShopCategory.css";
import all_product from "../assets/all_product";
import React from "react";
import { ShopContext } from "../components/ShopContext/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = ({ banner, category }) => {
  const { all_products } = useContext(ShopContext);
  return (
    <div className="shop-category">
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
        hello
        {console.log(all_product)}
        {all_product.map((item) => {
          console.log(category);
          if (category === item.Category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return "";
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
