import React, { useState } from 'react'

function Counter() {
    let [Item,setItem] = useState({
      product_name:"Iphone 12",
      product_img:"https://rukminim2.flixcart.com/image/416/416/l0igvww0/mobile/y/j/1/-original-imagca5ge9yrbrzq.jpeg?q=70",
      product_price:50000,
      product_qty:1
    })
    const decrHandler = () => {
      setItem({...Item,product_qty:Item.product_qty - 1})
    }
    const incrHandler = () => {
      setItem({...Item,product_qty:Item.product_qty + 1})
    }
  return (
    <React.Fragment>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <table className='table table-hover'>
              <thead className='bg-dark text-white'>
                <tr>
                  <th>Product Name</th>
                  <th>Product Img</th>
                  <th>Product Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className='bg-dark text-white'>
              {/* <tr> */}
                <td>{Item.product_name}</td>
                <td><img src={Item.product_img} height="60px" alt="" /></td>
                <td>{Item.product_price}</td>
                <td><i className="fa fa-minus-circle" onClick={decrHandler}></i>{Item.product_qty}<i className="fa fa-plus-circle" onClick={incrHandler}></i></td>
                <td>{Item.product_qty * Item.product_price}</td>
                {/* </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Counter
