import React from 'react'
import { Link } from "react-router-dom";

const Item = ({item, ID, delItem, editItem}) => {
  return (
    <>
        <div className="item">
        
        <div className="right floated content">
          <div className="ui button" onClick={() => editItem(ID)}>EDIT</div>
          <div className="ui button" onClick={() => delItem(ID)}>DELETE</div>
        </div>
        <Link to={`/detail/${ID}`}  className="content">
          {item}
        </Link>
        
      </div>
    </>
  )
}

export default Item