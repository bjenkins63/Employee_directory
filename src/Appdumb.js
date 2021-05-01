import React, { useMemo, useState, useEffect } from "react";

import Table from "./utils/Table";

function App() {

  /* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */
  const columns = useMemo(
    () => [
    {
        Header: "Photo",
        column: "person.name.first"
    },
    {
        Header: "First Name",
        column: "person.name.first"
    },
    {
        Header: "Last Name",
        column: "person.name.last"
    },
    {
        Header: "Email",
        column: "person.email"
    },
    {
        Header: "Phone",
        column: "person.phone"
    },
    ],
    []
  );


  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;