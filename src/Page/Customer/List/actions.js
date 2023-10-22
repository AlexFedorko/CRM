import {LOAD_CUSTOMER_LIST, LOAD_CUSTOMER_LIST_ERROR, LOAD_CUSTOMER_LIST_SUCCESS} from "./constants.js";

export function loadCustomerList (params={}) {
    return {
        type: LOAD_CUSTOMER_LIST,
        params
    }
}

export function loadCustomerListSuccess (items) {
    return {
        type: LOAD_CUSTOMER_LIST_SUCCESS,
        items
    }
}

export function loadCustomerListError (error) {
    return {
        type: LOAD_CUSTOMER_LIST_ERROR,
        error
    }
}

