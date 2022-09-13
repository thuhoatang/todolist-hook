import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Detail from "./components/Detail";

const Main = () => {
  const [listtodo, setListtodo] = useState(["To do 1", "To do 2", "To do 3"]);
  const [term, setTerm] = useState("");
  const [ID, setID] = useState(null);
  const [status, setStatus] = useState("CREATE");

  const addTodo = (term) => {
    let listdotonew = listtodo;
    listdotonew.push(term);
    setListtodo(listdotonew);
    // console.log(listtodo);
  };

  const delItem = (id) => {
    let listdotonew = listtodo;
    listdotonew = listdotonew.filter((item, index) => index != id);
    setListtodo(listdotonew);
  };

  const editItem = (id) => {
    setStatus("EDIT");
    setID(id);
    let tilteOld = listtodo[id];
    setTerm(tilteOld);
  };

  const update = (id) => {
    setStatus("CREATE");
    let listdotonew = listtodo;
    let arrUpdate = listdotonew.map((item, index) => {
      return index == id ? term : item;
    });
    setListtodo(arrUpdate);
    //    console.log(id);
  };

  const setNewterm = (newterm) => {
    setTerm(newterm);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <App
            listtodo={listtodo}
            term={term}
            setTerm={setTerm}
            addTodo={addTodo}
            setNewterm={setNewterm}
            ID={ID}
            delItem={delItem}
            status={status}
            editItem={editItem}
            update={update}
          />
        }
      />

      <Route path="/detail/:id" element={<Detail listtodo={listtodo}/>} />
    </Routes>
  );
};

export default Main;
