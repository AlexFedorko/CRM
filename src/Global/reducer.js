import {LOAD_CUSTOMER_LIST} from "../Page/Customer/List/constants.js";
import {produce} from 'immer';


import customers from '../Page/Customer/List/customer'
export const initial = {
    customers: []
}
export default (state = initial, action) => produce(state, draft => {

    switch(action.type){
        case LOAD_CUSTOMER_LIST:
            draft.customers = customers;
        break;
    }
})