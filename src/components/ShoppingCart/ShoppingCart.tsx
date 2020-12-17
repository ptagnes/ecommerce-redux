import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  selectCartItems,
  selectCartTotal,
  selectCartItemsCount,
} from "../../redux/selectors/cartSelectors";
import {
  // clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/actions/cartActions";
import {
  // Heart,
  ChevronLeft,
  ChevronRight,
  Truck,
  Plus,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import img from "../../styles/sass/ui-assets/images/misc/payments.png";
import Image from "react-bootstrap/Image";

function ShoppingCart(props: any) {
  const cartItems = props.cartItems;
  const removeItem = props.removeItem;
  const addItem = props.addItem;
  const total = props.total;
  console.log(cartItems);

  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="row">
          <main className="col-md-12 col-lg-9">
            <div className="card">
              <table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                  <tr className="small text-uppercase">
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col" className="text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((cartItem: any) => (
                    <tr key={cartItem.id}>
                      <td>
                        <figure className="itemside">
                          <div className="aside">
                            <Image src={cartItem.imageUrl} className="img-sm" />
                          </div>
                          <figcaption className="info">
                            <Link className="title text-dark" to={`/`}>
                              {cartItem.name}
                            </Link>
                            <p className="text-muted small">
                              Size: NA, Color: NA, <br /> Brand: NA
                            </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        {/* <select className="form-control">
                          <option>{cartItem.quantity}</option>
                        </select> */}
                        <div className="col" style={{ width: "160px" }}>
                          <div className="input-group input-spinner">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-light"
                                type="button"
                                id="button-plus"
                                onClick={() => removeItem(cartItem)}
                              >
                                -
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              value={cartItem.quantity}
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-light"
                                type="button"
                                id="button-minus"
                                onClick={() => addItem(cartItem)}
                              >
                                <Plus />
                              </button>
                            </div>
                          </div>
                        </div>{" "}
                      </td>
                      <td>
                        <div className="price-wrap">
                          <var className="price">{cartItem.price}</var>
                          {/* <small className="text-muted"> $315.20 each </small> */}
                        </div>
                      </td>
                      {/* <td className="text-right">
                        <div
                          data-original-title="Save to Wishlist"
                          className="btn btn-light"
                          data-toggle="tooltip"
                        >
                          <Heart />
                        </div>
                        <div
                          onClick={() => removeItem(cartItem)}
                          className="btn btn-light"
                        >
                          Remove
                        </div>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="card-body border-top">
                <div className="btn btn-primary float-md-right">
                  Make Purchase <ChevronRight />
                </div>
                <Link to="/" className="btn btn-light">
                  <ChevronLeft /> Continue shopping
                </Link>
              </div>
            </div>

            <div className="alert alert-success mt-3">
              <p className="icontext">
                <Truck /> Free Delivery within 1-2 weeks
              </p>
            </div>
          </main>
          <aside className="col-md-12 col-lg-3">
            <div className="card mb-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Have coupon?</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="Coupon code"
                      />
                      <span className="input-group-append">
                        <button className="btn btn-primary">Apply</button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <dl className="dlist-align">
                  <dt>Total price:</dt>
                  <dd className="text-right">
                    USD {Math.round((total + Number.EPSILON) * 100) / 100}
                  </dd>
                </dl>
                {/* <dl className="dlist-align">
                  <dt>Discount:</dt>
                  <dd className="text-right">USD 658</dd>
                </dl> */}
                <dl className="dlist-align">
                  <dt>Total:</dt>
                  <dd className="text-right  h5">
                    <strong>
                      ${Math.round((total + Number.EPSILON) * 100) / 100}
                    </strong>
                  </dd>
                </dl>
                <hr />
                <p className="text-center mb-3">
                  <img src={img} height="26" width="100" alt="payment" />
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state: any) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state),
  cartItemsTotal: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeItem: (item: any) => dispatch<any>(removeItem(item)),
  addItem: (item: any) => dispatch<any>(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
