import React from 'react'
const handleClick=(props)=>{
  props.handleClick(props.stock.id)
}

const Stock = (props) => (
  <div>

    <div onClick={()=>handleClick(props)}
    className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            props.stock.price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
