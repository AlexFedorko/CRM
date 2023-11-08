import React from 'react';
import { withFormik, Field } from 'formik';
import { Button, Checkbox, Form, Input } from 'antd';


function CustomersAdd() {
        return (
            <Form>
                <div className="form-wrapper" style={{
                    maxWidth: '100%',
                    height: '500px',
                    display: 'flex',
                    gap: '5px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    position: 'relative',
                    marginTop: '200px'
                }}>

                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your address!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Your Age"
                        name="age"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your age!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>

                {/*<div>*/}
                {/*    <label htmlFor="name">Name: </label>*/}
                {/*    <Field type="text" id="name" name="name" />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*<label htmlFor='email'>Email: &nbsp;</label>*/}
                {/*<Field type='email' id='email' name='email' />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <label htmlFor='phone'>Phone: </label>*/}
                {/*    <Field type='text' id='phone' name='phone' />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <label htmlFor='address'>Adress: </label>*/}
                {/*    <Field type='text' id='address' name='address' />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <label htmlFor='age'>Age:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>*/}
                {/*    <Field type='text' id='age' name='age' />*/}
                {/*</div>*/}
                {/*<button type="submit" style={{marginTop: '20px'}}>Submit</button>*/}
                </div>
            </Form>
        );
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        address: '',
        age: ''
    }),

    validate: values => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        }
        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'BasicForm',
})(CustomersAdd);
