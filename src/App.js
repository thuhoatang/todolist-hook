import React, {useState} from 'react'
import Input from './components/Input'
import Listtodo from './components/Listtodo'


const App = ({listtodo, term, setTerm, addTodo, setNewterm, ID, delItem, editItem, status, update}) => {
  
  
  return (
    <div className="ui container">
      <Input term={term} setTerm={setTerm} addTodo={addTodo} setNewterm={setNewterm} editItem={editItem} status={status} update={update} ID={ID}/>
      <Listtodo listtodo={listtodo} ID={ID} delItem={delItem} editItem={editItem}/>
    </div>
  )
}

export default App
