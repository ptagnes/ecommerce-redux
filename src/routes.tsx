import React from "react";
import { Switch, Route } from "react-router";
import { Redirect } from "react-router-dom";
import ItemListCategories from "./components/ItemList/ItemListCategories";
import ItemListSubCategories from "./components/ItemList/ItemListSubCategories";
import ItemListPerCategory from "./components/ItemList/ItemListPerCategory";
import ItemDetail from "./components/ItemList/ItemDetail";
import ItemList from "./components/ItemList/ItemList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ItemListSubSubCategory from "./components/ItemList/ItemListSubSubCategory";
// import Start from "./components/Start";

export default (
  <Switch>
    <Route
      exact
      path="/"
      render={() => {
        return <Redirect to="/products" />;
      }}
    />
    {/* <Route
      path="/"
      render={({ match: { url } }) => (
        <Route path={`${url}/`} render={() => <Start />} exact />
      )}
    /> */}
    <Route
      path="/products"
      render={({ match: { url } }) => (
        <>
          <Route
            path={`${url}/`}
            render={(props) => <ItemList {...props} />}
            exact
          />
          <Route path={`${url}/:category`} component={ItemListCategories} />
        </>
      )}
    />
    <Route
      path="/productcategories"
      render={({ match: { url } }) => (
        <>
          <Route
            path={`${url}/:category/:subcat`}
            render={(props) => <ItemListSubCategories {...props} />}
          />
        </>
      )}
    />
    <Route
      path="/productcategory"
      render={({ match: { url } }) => (
        <Route
          path={`${url}/:category/:subcat/:subsubcat`}
          render={(props) => <ItemListPerCategory {...props} />}
        />
      )}
    />
    <Route
      path="/productsubcategory"
      render={({ match: { url } }) => (
        <Route
          path={`${url}/:category/:subcat/:subsubcat/:subsubsubcat`}
          render={(props) => <ItemListSubSubCategory {...props} />}
        />
      )}
    />
    <Route
      path="/details"
      render={({ match: { url } }) => (
        <Route
          path={`${url}/:category/:subcat/:subsubcat/:id`}
          render={(props) => <ItemDetail {...props} />}
        />
      )}
    />
    <Route
      path="/cart"
      render={({ match: { url } }) => (
        <Route
          path={`${url}`}
          render={(props) => <ShoppingCart {...props} />}
        />
      )}
    />
  </Switch>
);
