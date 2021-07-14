import actions from './actions';
import types from './types';
import axios from 'axios';
var value = '';

const { createLogic } = require('redux-logic');

//get all Products
const getProducts = createLogic({
  type: types.GET_PRODUCTS,
  latest: true,
  debounce: 1000,

  process({ MockHTTPClient }, dispatch, done) {
    console.log('mame');
    axios
      .get('https://randomuser.me/api/?results=3')
      .then(resp => {
        value = resp.data;
        dispatch(actions.getProductsSuccess(resp.data));
      })
      .then(data => {
        // dispatch(actions.getProductsSuccess(data));
      })
      .catch(err => {
        var errorMessage = 'Failed to get regions';
        if (err && err.code === 'ECONNABORTED') {
          errorMessage = 'Please check your internet connection.';
        }
        dispatch(
          actions.getProductsFail({
            title: 'Error!',
            message: errorMessage,
          })
        );
      })
      .then(() => done());
  },
});

const getAge = createLogic({
  type: types.GET_AGE,
  latest: true,
  debounce: 1000,

  process({ MockHTTPClient, getState, action }, dispatch, done) {
    axios
      .get(
        `https://api.agify.io/?name[]=${value.results[0].name.last}&name[]=${value.results[1].name.last}&name[]=${value.results[2].name.last}`
      )
      .then(resp => resp.data)
      .then(data => {
        dispatch(actions.getAgeSuccess(data));
        console.log('action param', action.params);
      })
      .catch(err => {
        var errorMessage = 'Failed to get regions';
        if (err && err.code === 'ECONNABORTED') {
          errorMessage = 'Please check your internet connection.';
        }
        dispatch(
          actions.getAgeFail({
            title: 'Error!',
            message: errorMessage,
          })
        );
      })
      .then(() => done());
  },
});

export default [getProducts, getAge];
