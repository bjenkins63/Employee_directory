import React, { useState, useEffect } from 'react';
import '../App.css';
import MaterialTable from 'material-table'


function TableStuff() {

  const [data, setData] = useState([])
  const columns = [
    { title: "Photo", field: "picture.medium" },
    { title: "First Name", field: "name.first" },
    { title: "Last Name", field: "name.last" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
  ]
  useEffect(() => {
    fetch("https://api.randomuser.me/?results=12")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
        console.log(data)
      })
  }, [])

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Material Table</h4>
      <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default TableStuff;