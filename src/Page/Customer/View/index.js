import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadCustomer} from "../List/actions.js";
import {useParams} from "react-router-dom";
import {makeSelectCustomer} from "../List/selector.js";

const CustomerViewPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(loadCustomer(id));
    }, []);

    const customer = useSelector(makeSelectCustomer());
    console.log(customer)
    return 1;
}

export default CustomerViewPage;