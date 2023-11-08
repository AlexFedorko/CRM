import {  takeLatest, put} from 'redux-saga/effects'
import {LOAD_CUSTOMER, LOAD_CUSTOMER_LIST} from "../Page/Customer/List/constants.js";
import api from "./api.js";
import {
    loadCustomerError,
    loadCustomerListError,
    loadCustomerListSuccess,
    loadCustomerSuccess
} from "../Page/Customer/List/actions.js";

function* sagaLoadCustomerList(action) {
    const {filters} = action
    const filter = {};
    for (const key in filters) {
        if(filters[key]) {
            filter[key] = filters[key];
        }
    }
   let response = yield api.get('customer', {filter}).catch(v=>v);
   response = response?.data || JSON.parse(response.request.response);

   const {status, data, error} = response;
   if(status === 200) {
       yield put(loadCustomerListSuccess(data));
   } else {
       yield put(loadCustomerListError(error));
   }
}

function* sagaLoadCustomer(action) {
    const {id} = action;
    let response = yield api.get('customer', {
        filter: {id}
    });
    response = response?.data || JSON.parse(response.request.response);

    const {status, data, error} = response;
    if(status === 200) {
        yield put(loadCustomerSuccess(data[0]));
    } else {
        yield put(loadCustomerError(error));
    }
}

export default function*() {
    yield takeLatest(LOAD_CUSTOMER_LIST, sagaLoadCustomerList);
    yield takeLatest(LOAD_CUSTOMER, sagaLoadCustomer);
}