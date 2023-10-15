import React, {useMemo, useState} from 'react';
import customers from './customer.json'
import {Input, Table} from "antd";
import columns from "./columns.js";


function Customers() {
    const [filterName, setFilterName] = useState('');
    const [filterEmail, setFilterEmail] = useState('');
    const customersFiltered = useMemo(() => {
        if(!filterName && !filterEmail) {
            return customers;
        }
        const filterNameLower = filterName.toLowerCase();
        const filterEmailLower = filterEmail.toLowerCase();
        return customers.filter(v =>
            (filterNameLower && v.name.toLowerCase().includes(filterNameLower)) ||
            (filterEmailLower && v.email.toLowerCase().includes(filterEmailLower))
        );
    }, [customers, filterName, filterEmail]);

    return <>
        <div>
            <Input
                value={filterName}
                onChange={e => setFilterName(e.target.value)}
            />
            <Input
                value={filterEmail}
                onChange={e => setFilterEmail(e.target.value)}
            />
        </div>
        <Table rowKey='id' columns={columns} dataSource={customersFiltered}/>
    </>
}

export default Customers;
