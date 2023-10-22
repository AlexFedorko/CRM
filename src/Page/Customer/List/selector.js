import {createSelector} from "reselect";
import {initial} from "../../../Global/reducer.js";


const contextGlobal = state => state.app || initial;
export const makeSelectCustomerList = () => createSelector(contextGlobal, state =>  state.customers);
