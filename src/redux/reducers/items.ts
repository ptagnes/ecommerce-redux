import ItemActionTypes from "../types/itemTypes";
// import * as R from "ramda";
// import json from "../../data/items.json";
import products from "../../data/productData";
import { sortItems } from "../actions//item.utils";

const initialState = {
  grid: true,
  items: products,
  search: "",
  sort: [],
};

const itemReducer = (state = initialState, action: any) => {
  //{type, payload}
  switch (action.type) {
    case ItemActionTypes.FETCH_ITEMS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ItemActionTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ItemActionTypes.FETCH_ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ItemActionTypes.TOGGLE_ITEMS_GRID:
      return {
        ...state,
        grid: !state.grid,
      };
    case ItemActionTypes.SORT_ITEMS:
      return {
        ...state,
        sort: sortItems(action.sort, action.items),
      };
    case ItemActionTypes.SEARCH_ITEMS:
      // return R.merge(state, {
      //   search: action.payload,
      // });
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default itemReducer;
