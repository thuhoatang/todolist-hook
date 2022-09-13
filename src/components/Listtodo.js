import React from 'react'
import Item from './Item'

const Listtodo = ({listtodo, ID,delItem, editItem}) => {
    const renderListtodo = listtodo.map((item, index) => {
        return <Item key={index} item={item} ID={index} delItem={delItem} editItem={editItem}/>
      })
  return (
    <div className="ui middle aligned divided list">{renderListtodo}</div>
  )
}

export default Listtodo