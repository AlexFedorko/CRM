import {  takeLatest, call, put} from 'redux-saga/effects'
import {LOAD_CUSTOMER_LIST} from "../Page/Customer/List/constants.js";
import api from "./api.js";
import {loadCustomerListError, loadCustomerListSuccess} from "../Page/Customer/List/actions.js";

export function* sagaLoadCustomer() {
   let response = yield api.get('customer').catch(v=>v);
   response = response?.data || JSON.parse(response.request.response);

   const {status, data, error} = response;
   if(status === 200) {
       yield put(loadCustomerListSuccess(data));
   } else {
       yield put(loadCustomerListError(error));
   }
}


export default function*() {
    yield takeLatest(LOAD_CUSTOMER_LIST, sagaLoadCustomer)
}