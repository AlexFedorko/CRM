import {createSelector} from "reselect";
import {initial} from "../../../Global/reducer.js";


const contextGlobal = state => state.app || initial;
export const makeSelectCustomerList = () => createSelector(contextGlobal, state =>  state.customers);
export const makeSelectCustomerLoading = () => createSelector(contextGlobal, state => state.loading);
export const makeSelectCustomer = () => createSelector(contextGlobal, state => state.customer);