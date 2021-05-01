import React, { useEffect, useState } from "react";
import axios from "axios";

const NewTable = () => {
    const [employee, setemployee] = useState();
    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=12").then((res) => {
            console.log(res.data);
            setemployee(res.data);
        });
    }, []);
    return <div>{
    !employee ? ("No data found"):(
        <table className='table'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Country</th>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Photo</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map((employee, index) => (
                        <tr key={employee.id}>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.location.country}</td>
                            <td>{employee.id.value}</td>
                            <td>{employee.email}</td>
                            <td>{employee.picture.thumbnail}</td>
                            <td>{employee.phone}</td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
        
    )
}</div>;
}

export default NewTable;