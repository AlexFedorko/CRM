import {
    LOAD_CUSTOMER, LOAD_CUSTOMER_ERROR,
    LOAD_CUSTOMER_LIST,
    LOAD_CUSTOMER_LIST_ERROR,
    LOAD_CUSTOMER_LIST_SUCCESS,
    LOAD_CUSTOMER_SUCCESS
} from "./constants.js";

export function loadCustomerList (filters={}) {
    return {
        type: LOAD_CUSTOMER_LIST,
        filters
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

export function loadCustomer (id) {
    return {
        type: LOAD_CUSTOMER,
        id
    }
}

export function loadCustomerSuccess (item) {
    return {
        type: LOAD_CUSTOMER_SUCCESS,
        item
    }
}
export function loadCustomerError (error) {
    return {
        type: LOAD_CUSTOMER_ERROR,
        error
    }
}
