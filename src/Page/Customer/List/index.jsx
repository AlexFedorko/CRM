import React, {useMemo, useState} from 'react';
import customers from './customer.json'
import {Col, Input, Row, Table} from "antd";
import columns from "./columns.js";

const initial = {
    name: '',
    email: '',
    phone: '',
    address: '',
    age: ''
}
function Customers() {

    const [filters, setFilters] = useState(initial);


    const customersNormalize = useMemo(() => {
        return customers.map(v => {
            for (const key of ['name', 'email', 'address']) {
                v[key] = v[key].toLowerCase();
            }
            v.phone = v.phone.replace(/\D+/g, '');
            v.age = v.age.toString();
            return v;
        })
    }, [customers])

    const customersFiltered = useMemo(() => {
        if (!Object.values(filters).some((v) => v)) {
            return customers;
        }

        const filtersNameLower = filters.name.toLowerCase();
        const filtersEmailLower = filters.email.toLowerCase();
        const filtersAddressLower = filters.address.toLowerCase();
        const filtersPhoneOnlyNumbers = filters.phone.replace(/\D+/g, '');

        return customers.filter((_, index) => {
                const v = customersNormalize[index];
                return (filtersNameLower && v.name.includes(filtersNameLower)) ||
                    (filtersEmailLower && v.email.includes(filtersEmailLower)) ||
                    (filters.phone && v.phone.includes(filtersPhoneOnlyNumbers)) ||
                    (filters.address && v.address.includes(filtersAddressLower)) ||
                    (filters.age && v.age.includes(filters.age))
            }
        );
    }, [customersNormalize, filters]);

    const onChangeFilter = (inputName) => {
        return e => setFilters(prev => {
            prev[inputName] = e.target.value;
            return {...prev};
        })
    }

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Input
                        value={filters.name}
                        onChange={onChangeFilter('name')}
                        placeholder='Name'
                    />
                </Col>
                <Col span={12}>
                    <Input
                        value={filters.email}
                        onChange={onChangeFilter('email')}
                        placeholder='Email'
                    />
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Input
                        value={filters.phone}
                        onChange={onChangeFilter('phone')}
                        placeholder='Phone'
                    />
                </Col>
                <Col span={12}>
                    <Input
                        value={filters.address}
                        onChange={onChangeFilter('address')}
                        placeholder='Address'
                    />
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Input
                        value={filters.age}
                        onChange={onChangeFilter('age')}
                        placeholder='Age'
                    />
                </Col>
            </Row>

            <Table rowKey='id' columns={columns} dataSource={customersFiltered}/>
        </>
    );
        }


export default Customers;
