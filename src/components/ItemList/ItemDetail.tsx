import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  selectItemSubSubCategories,
  selectProduct,
} from "../../redux/selectors/itemSelectors";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Heart, Cart } from "react-bootstrap-icons";
import { addItem, removeItem } from "../../redux/actions/cartActions";
import { Plus } from "react-bootstrap-icons";

function ItemDetail({ item, addItem }: { item: any; addItem: any }) {
  // console.log(item);
  const [quantity, setQuantity] = useState<number>(1);
  const handleOnChange = (action: string) => {
    // setQuantity(quantity + 1);
    if (action === "increment") {
      setQuantity(2);
      console.log("increment");
    } else {
      setQuantity(1);
      console.log("decrement");
    }
  };
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} lg={5}>
          {item && <Image src={item.imageUrl} thumbnail />}
        </Col>
        <Col xs={12} md={6} lg={7} className="border-left">
          <div className="content-body">
            {item.onSale && item.onSale === "yes" && (
              <span className="badge badge-success"> ON SALE </span>
            )}
            <h2 className="title">{item && item.name}</h2>
            <div className="mb-3">
              <var className="price h4">{item.price}$</var>
              {item.onSale && item.onSale === "yes" && (
                <del className="price-old">$190</del>
              )}
            </div>
            <p>{item.description}</p>
            <dl className="row">
              {item.brand && (
                <>
                  <dt className="col-sm-3">Brand</dt>
                  <dd className="col-sm-9">{item.brand}</dd>
                </>
              )}
              {/* {item.color && (
                <>
                  <dt className="col-sm-3">Color</dt>
                  <dd className="col-sm-9">{item.color}</dd>
                </>
              )} */}
            </dl>
            <hr />
            <div className="row">
              <div className="form-group col-md ">
                <label>Quantity</label>
                <div className="col" style={{ width: "138px", padding: "0" }}>
                  <div className="input-group input-spinner">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-light"
                        type="button"
                        id="button-plus"
                        // onClick={() => removeItem(item)}
                        onClick={() => handleOnChange("decrement")}
                      >
                        -
                      </button>
                    </div>
                    {/* <input
                      type="text"
                      className="form-control"
                      value={quantity}
                    /> */}
                    <span
                      className="form-control"
                      style={{ textAlign: "center" }}
                    >
                      {quantity}
                    </span>
                    <div className="input-group-append">
                      <button
                        className="btn btn-light"
                        type="button"
                        id="button-minus"
                        onClick={() => handleOnChange("increment")}
                        // onClick={() => addItem(item)}
                      >
                        <Plus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <div
                  onClick={() => addItem(item)} //add quantity
                  className="btn  btn-primary w-100"
                >
                  Add to cart <Cart />
                </div>
              </div>
              <div className="col">
                <div className="btn  btn-light">
                  <Heart />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    collection: selectItemSubSubCategories(ownProps.match.params.category)(
      state
    ),
    item: selectProduct(
      ownProps.match.params.category,
      ownProps.match.params.subcat,
      ownProps.match.params.subsubcat,
      ownProps.match.params.id
    )(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: any) => dispatch<any>(addItem(item)),
  removeItem: (item: any) => dispatch<any>(removeItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
