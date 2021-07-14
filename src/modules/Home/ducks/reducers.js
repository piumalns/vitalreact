import types from './types';
import { handleActions } from 'redux-actions';

const initialState = {
  loading: true,
  pending: false,
  hasError: false,
  data: [],
  error: {},
};

// Reducers from redux-actions
export default handleActions(
  {
    [types.GET_PRODUCTS]: state => ({
      ...state,
      allProducts: {
        ...state.allProducts,
        loading: true,
        pending: true,
      },
    }),
    [types.GET_PRODUCTS_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        allProducts: {
          ...state.allProducts,
          loading: false,
          pending: false,
          data: { payload },
        },
      };
    },
    [types.GET_PRODUCTS_FAILED]: (state, { payload }) => {
      return {
        ...state,
        allProducts: {
          ...state.allProducts,
          loading: false,
          pending: false,
          hasError: true,
          error: { payload },
        },
      };
    },
    [types.GET_AGE]: state => ({
      ...state,
      age: {
        ...state.age,
        loading: true,
        pending: true,
      },
    }),
    [types.GET_AGE_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        age: {
          ...state.age,
          loading: false,
          pending: false,
          data: { payload },
        },
      };
    },
    [types.GET_AGE_FAILED]: (state, { payload }) => {
      return {
        ...state,
        age: {
          ...state.age,
          loading: false,
          pending: false,
          hasError: true,
          error: { payload },
        },
      };
    },
  },
  initialState
);
