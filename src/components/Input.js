import React from "react";

const Input = ({term, setTerm, addTodo, setNewterm, status, update, ID}) => {
    // console.log(term);
    const renderNameBtn = () => { 
        return status == "CREATE" ? "ADD" : "SAVE"
    }

    const changeOnClikBtn = () => { 
        return status == "CREATE" ? ()=>{ addTodo(term); setNewterm("")}
         : ()=>{ update(ID); setNewterm("")};  
    }
  return (
    <>
      <form className="ui form">
        <div className="field">
          <label>To do name</label>
          <input 
          value={term}
          type="text" placeholder="type here..."
            onChange={(e) => setNewterm(e.target.value) }/>
        </div>
        <button className="ui button" type="button" onClick={changeOnClikBtn()}>
          {renderNameBtn()}
        </button>
      </form>
    </>
  );
};

export default Input;
