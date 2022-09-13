import React from 'react'
import { useParams } from "react-router-dom";

const Detail = ({listtodo}) => {
    let params = useParams()
    console.log(params.id);
  return (
    <div>
        <h3>detail name: {listtodo[params.id]}</h3>
    </div>
  )
}

export default Detail