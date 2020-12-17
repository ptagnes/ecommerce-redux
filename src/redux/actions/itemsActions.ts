import ItemActionTypes from "../types/itemTypes";
import { Dispatch } from "redux";

// import json from "../../data/items.json";
import products from "../../data/productData";

export const fetchItemsStart = () => ({
  type: ItemActionTypes.FETCH_ITEMS_START,
});
export const fetchItemsSuccess = (itemsData: any) => ({
  type: ItemActionTypes.FETCH_ITEMS_SUCCESS,
  payload: itemsData,
});
export const fetchItemsFailure = (errorMessage: any) => ({
  type: ItemActionTypes.FETCH_ITEMS_FAILURE,
  payload: errorMessage,
});
export const fetchItemsStartAsync = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchItemsStart());
    dispatch(fetchItemsSuccess(products));
  };
};
export const searchItems = (text: any) => (dispatch: Dispatch) => {
  dispatch({
    type: ItemActionTypes.SEARCH_ITEMS,
    payload: text,
  });
};
export const toggleItemsGrid = () => ({
  type: ItemActionTypes.TOGGLE_ITEMS_GRID,
});
export const sortItems = (sort: any, items: any) => ({
  type: ItemActionTypes.SORT_ITEMS,
  sort: sort,
  items: items,
});
