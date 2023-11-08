import {
    LOAD_CUSTOMER, LOAD_CUSTOMER_ERROR,
    LOAD_CUSTOMER_LIST,
    LOAD_CUSTOMER_LIST_ERROR,
    LOAD_CUSTOMER_LIST_SUCCESS, LOAD_CUSTOMER_SUCCESS
} from "../Page/Customer/List/constants.js";
import {produce} from 'immer';
//import customers from '../Page/Customer/List/customer'

export const initial = {
    customers: [],
    customer: {},
    errors: [],
    loading: false
}
export default (state = initial, action) => produce(state, draft => {

    switch(action.type){
        case LOAD_CUSTOMER_LIST:
            draft.loading = true;
            break;
        case LOAD_CUSTOMER_LIST_SUCCESS:
           draft.customers = action.items
            draft.loading = false;
        break;
        case LOAD_CUSTOMER_LIST_ERROR:
            draft.errors.push(action.error);
            draft.loading = false;
            alert(action.error);
            break;
        case LOAD_CUSTOMER:
            draft.loading = true;
            break;
        case LOAD_CUSTOMER_SUCCESS:
            draft.customer = action.item
            draft.loading = false;
            break;
        case LOAD_CUSTOMER_ERROR:
            draft.errors.push(action.error);
            draft.loading = false;
            break;
    }
})