import types from './types';
import { createAction } from 'redux-actions';

export default {
  getProducts: createAction(types.GET_PRODUCTS),
  getProductsSuccess: createAction(types.GET_PRODUCTS_SUCCESS),
  getProductsFail: createAction(types.GET_PRODUCTS_FAILED),

  getAge: createAction(types.GET_AGE),
  getAgeSuccess: createAction(types.GET_AGE_SUCCESS),
  getAgeFail: createAction(types.GET_AGE_FAILED),
};
