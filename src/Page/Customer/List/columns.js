export default [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: 'Username',
        dataIndex: 'username',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        // add link for email when click ht
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        // add link for phones when click ht
    },
    {
        title: 'Balance',
        dataIndex: 'balance',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      render: (value) => value === 1 ? 'male' : value === 0 ? 'female' : 'other'
    },
    {
        title: 'Birthday',
        dataIndex: 'birthday',
        render: (value, row, index) =>  {

            const date = new Date(value * 1000);
            return [date.getFullYear(), (date.getMonth() + 1 + '').padStart(2, '0'), (date.getDate()+ '').padStart(2, '0')].join('.')
            //return date.getFullYear() + '.' + (date.getMonth() + 1).toString().padStart(2, '0') + '.' + date.getDate().toString().padStart(2, '0');
        }
        // new Date(177033600 * 1000);
    },
];