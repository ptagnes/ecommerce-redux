import { createSelector } from "reselect";
const selectItem = (state: any) => state.itemsState;

export const selectItems = createSelector(
  [selectItem],
  (itemsState) => itemsState
);
export const selectTopCategories = createSelector([selectItems], (items) =>
  items ? items.items : []
);
export const searchItemsMemoized = createSelector([selectItems], (items) => {
  const itm = items.items;
  const searchVal = items.search;
  let arr: any = [];
  for (let key in itm) {
    if (itm.hasOwnProperty(key)) {
      const im = itm[key];
      im.filter((it: any) => {
        const list = it.productList;
        list.filter((li: any) => {
          const m = li.items;
          const filtered = m.filter((t: any) => {
            return t.name.toLowerCase().includes(searchVal);
          });
          arr.push(filtered);
        });
      });
    }
  }
  return items ? [].concat(...arr) : [];
});

export const searchItems = (params: any) =>
  createSelector([selectItems], (items) => {
    const { category, subcat, subsubcat } = params;
    const categories = items.items[category];
    const subcategories = categories.find((x: any) => x.routeName === subcat);
    const subsubcategories = subcategories.productList.find(
      (y: any) => y.routeName === subsubcat
    );
    const itm = subsubcategories.items;
    const result: any = [];
    for (var i = 0; i < itm.length; ++i) {
      if (itm[i].name.toLowerCase().includes(items.search)) {
        result.push(itm[i]);
      }
    }
    return result;
  });
export const selectItemsTopCategories = createSelector([selectItems], (items) =>
  items ? Object.keys(items).map((key) => items[key]) : []
);
export const selectItemCategories = (collectionUrlParam: any) =>
  createSelector([selectItems], (items) => {
    return items ? items.items[collectionUrlParam] : null;
  });
export const selectItemSubCategories = (urlParam: any) =>
  createSelector([selectItems], (items) => {
    const category = items.items[urlParam.category];
    const subcategories = category.find(
      (x: any) => x.routeName === urlParam.subcat
    );
    return items ? subcategories : null;
  });
export const selectItemSubSubCategories = (urlParam: any) =>
  createSelector([selectItems], (items) => {
    const res = items.items[urlParam];
    return res[0].productList[0].items; //todo check
  });
export const selectProduct = (
  urlParam: any,
  urlsubCat: any,
  urlsubsubCat: any,
  urlId: any
) =>
  createSelector([selectItems], (items) => {
    const res = items.items[urlParam];
    let result;
    res.map((val: any) => {
      if (val.routeName === urlsubCat) {
        val.productList.map((val: any) => {
          if (val.routeName === urlsubsubCat) {
            const xklj = val.items.find((x: any) => {
              return x.id.toString() === urlId;
            });
            result = xklj;
          }
        });
      }
    });
    return result;
  });

export const selectIsCollectionFetching = createSelector(
  [selectItem],
  (itemsState) => itemsState.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectItem],
  (itemsState) => !!itemsState.collections
);

export const selectItemsGrid = createSelector(
  [selectItem],
  (item) => item.grid
);

/***********************************************************************************
 * // Object.values(allItems).forEach((value: any) => {
    // });
    // Object.keys(allItems).forEach((key) => {
    //   topCategories.push(key);
    // });
 */
// export const searchItems = (state: any) => {
//   const items = state.itemsState.items;
//   const searchVal = state.itemsState.search;
//   var array: any = [];
//   for (var i = 0; i < items.length; ++i) {
//     if (items[i].name.toLowerCase().includes(searchVal)) {
//       array.push(items[i]);
//     }
//   }
//   return array;
// };
