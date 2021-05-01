
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import StaffLinks from '../utils/Stafflinks';

const Primetable = () => {
    const [products, setStaff] = useState([]);
    const columns = [
        {field: 'name.first', header: 'First Name'},
        {field: 'name.last', header: 'Last Name'},
        {field: 'location.state', header: 'Home State'},
        {field: 'email', header: 'Email'},
        {field: 'login.username', header: 'User Name'},
        {field: 'phone', header: 'Phone Number'}

    ];

    const staffLinks = new StaffLinks();

    useEffect(() => {
        staffLinks.getStaffLinks().then(data => setStaff(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <div className="card">
                <DataTable value={products}>
                    {dynamicColumns}
                </DataTable>
            </div>
        </div>
    );
}
   

export default Primetable;