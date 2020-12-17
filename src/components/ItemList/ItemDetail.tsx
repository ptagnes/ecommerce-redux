import React from "react";
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
import { addItem } from "../../redux/actions/cartActions";

function ItemDetail({ item, addItem }: { item: any; addItem: any }) {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} lg={5}>
          {item && <Image src={item.imageUrl} thumbnail />}
        </Col>
        <Col xs={12} md={6} lg={7} className="border-left">
          <div className="content-body">
            <h2 className="title">{item && item.name}</h2>
            <div className="mb-3">
              <var className="price h4">{item.price}$</var>
              {/* <span className="text-muted">/per kg</span> */}
            </div>
            <p>{item.description}</p>
            <dl className="row">
              <dt className="col-sm-3">Model#</dt>
              <dd className="col-sm-9">Odsy-1000</dd>

              <dt className="col-sm-3">Color</dt>
              <dd className="col-sm-9">Brown</dd>
            </dl>
            <hr />
            <div className="row">
              <div className="form-group col-md ">
                <label>Quantity</label>
                <div className="input-group mb-3 input-spinner">
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-light"
                      type="button"
                      id="button-plus"
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                  <input type="text" className="form-control" value="1" />
                  <div className="input-group-append">
                    <button
                      className="btn btn-light"
                      type="button"
                      id="button-minus"
                    >
                      {" "}
                      −{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <div
                  onClick={() => addItem(item)}
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
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
