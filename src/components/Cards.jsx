import React from 'react'

const Cards = ({title, text, children}) => {
  return (
  <div className="card" style={{width: '18rem'}}>
      {children}
      <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <button className="btn btn-primary">Go somewhere</button>
      </div>
  </div>
  )
}

export default Cards;
