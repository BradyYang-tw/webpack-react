import React from "react";
import CheckList from './CheckList'
import './App.css'

const App = () => {
  return <div className="App">
    <h1>TODO <strong>List</strong></h1>
    <p>A Simple todolist built react hooks & context</p>
    <CheckList />
  </div>;
};

export default App;
