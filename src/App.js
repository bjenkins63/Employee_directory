
import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'


function App() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "id" },
    // { title: "Photo", field: "user.picture.thumbnail" },
    { title: "Name", field: "name" },
    { title: "City", field: "address.city" },
    { title: "Username", field: "username" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
  ]
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
        
      })
  }, [])

  // console.log(data);

  return (
    <div className="App">
      <h1 align="center">Jenkins</h1>
      <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default App;