import React, { useState, useEffect } from 'react';
// import '../App.css';
import MaterialTable from 'material-table'
import { render } from 'react-dom';

function StaffTable() {

  const [data, setData] = useState([])
  const columns = [
    { title: "phone", field: "phone" },
    { title: "email", field: "email"}
  ]

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=12")
    .then(resp => resp.json())
    .then(resp => {
      (setData(resp))
      console.log(data);
  },[])

  render()
  
  return (
    <div className = "App">
      <h1 aligh="center">React-App</h1>
    <MaterialTable
    title="Employee Data"
    data={data}
    columns={columns}
    />
    </div>
  )

  })
};

export default StaffTable;