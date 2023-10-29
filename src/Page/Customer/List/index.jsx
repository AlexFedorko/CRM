import React, {useEffect, useMemo, useState} from 'react';
import {Col, Input, Row, Table} from "antd";
import columns from "./columns.js";
import {useDispatch, useSelector} from "react-redux";
import {loadCustomerList} from "./actions.js";
import {makeSelectCustomerList} from "./selector.js";

// 1. Для фильтров добавь грид. Сделай так.
// Чтобы на телефоне было 1 поле в строку.
// На планшете 2, на ПК 4 поля в строку.
// Грид сделай используя antd
// 2. Сделай фильтр возраст. ЧТобы можно было вписать от и до
// 3. Сделай универсальный поиск по всем полям ( отдельный инпут)
// 4. Сделай страницу добавление клиента

const initial = {
    name: '',
    email: '',
    phone: '',
    address: '',
    age: '',
    ageFrom: '',
    ageTill: ''
}
function CustomersListPage() {
    const [filters, setFilters] = useState(initial);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCustomerList());
    }, []);

    const customers = useSelector(makeSelectCustomerList())
    console.log(customers);
    return customers.map(customer => customer.username + ', ');
    const customersNormalize = useMemo(() => {
        const res = [];
        for(const v of customers){
            const item = {...v};

            for (const key of ['name', 'email', 'address']) {
                item[key] = item[key].toLowerCase();
            }
            item.phone = item.phone.replace(/\D+/g, '');
            item.age = item.age.toString();
            res.push(item);
        }
        return res;
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
            <Row gutter={[16,16]}>
                <Col span={24}>
                    <Input
                    value={filters.name}
                    onChange={onChangeFilter('name')}
                    placeholder='Global Search'
                    />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <Input
                        value={filters.name}
                        onChange={onChangeFilter('name')}
                        placeholder='Name'
                    />
                </Col>
                <Col span={6}>
                    <Input
                        value={filters.email}
                        onChange={onChangeFilter('email')}
                        placeholder='Email'
                    />
                </Col>
                <Col span={6}>
                    <Input
                        value={filters.phone}
                        onChange={onChangeFilter('phone')}
                        placeholder='Phone'
                    />
                </Col>
                <Col span={6}>
                    <Input
                        value={filters.address}
                        onChange={onChangeFilter('address')}
                        placeholder='Address'
                    />
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <Input
                        value={filters.age}
                        onChange={onChangeFilter('age')}
                        placeholder='Age'
                    />
                </Col>
                <Col span={4}>
                    <Input
                        value={filters.age}
                        onChange={onChangeFilter('age')}
                        placeholder='Age search from'
                    />
                </Col>
                    <Col span={4}>
                    <Input
                        value={filters.age}
                        onChange={onChangeFilter('age')}
                        placeholder='Age search till'
                    />
                </Col>
            </Row>

            <Table rowKey='id' columns={columns} dataSource={customersFiltered}/>
        </>
    );
        }

export default CustomersListPage;
