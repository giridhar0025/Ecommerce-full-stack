import React, { useEffect, useState } from "react";
import './departments.css'
import Products from '../products/products'


const Departments = () => {

  const [department, setDepartment] = useState([])

  useEffect(() => {
    fetch('https://ecommerce-backend-v1.herokuapp.com/categories')
      .then(res => res.json())
      .then(data => {
        setDepartment(data.item[0].categories);
      })
  }, [])






  return (
    <>
      <hr/>
      <div className="choose-cat">
          <span class="material-symbols-outlined animated-arrow">arrow_forward_ios</span>
          <span className="choose-cat-span">Choose from wide Rage of products</span>
      </div>
      <hr/>
      <div className="dep-container">
        {
          department.map((data) => {
            return (
              <>
                <div className="dep-card">
                  <div className="dep">
                    <h2  style={{fontSize: "1.7em"}}><a href={data.itemlink}>{data.item}</a></h2>
                    <ul style={{fontSize: "1em"}} className="text-truncate  dep-ul">
                      <li> <a href={data.categorylink}>{data.category}</a></li>
                      <li> <a href={data.categorylink_1}>{data.category_1}</a></li>
                      <li> <a href={data.categorylink_2}>{data.category_2}</a></li>
                      <li> <a href={data.categorylink_3}>{data.category_3}</a></li>
                      <li> <a href={data.categorylink_4}>{data.category_4}</a></li>
                      <li> <a href={data.categorylink_5}>{data.category_5}</a></li>
                      <li> <a href={data.categorylink_6}>{data.category_6}</a></li>
                      <li> <a href={data.categorylink_7}>{data.category_7}</a></li>
                    </ul>
                  </div>
                  <div className="dep dep-image">
                    <img src={data.dep_image} alt="" />
                  </div>
                </div>
              </>
            )

          })
        }
      </div>
      <Products />
    </>
  );
};

export default Departments;
