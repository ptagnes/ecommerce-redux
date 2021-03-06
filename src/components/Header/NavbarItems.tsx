import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import img from "../../styles/sass/ui-assets/images/logo.png";
import { Cart, PersonFill, CaretDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { selectCartItemsCount } from "../../redux/selectors/cartSelectors";

function NavbarItems({ cartItemsTotal }: { cartItemsTotal: number }) {
  return (
    <>
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-4">
                <a href="/" className="brand-wrap">
                  <img className="logo" src={img} alt="logo" />
                </a>
              </div>

              <div className="col-lg-6 col-sm-12"></div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header">
                    <div className="icontext">
                      <div className="icon">
                        <Cart />
                      </div>
                      <div className="text">
                        <small className="text-muted">
                          <Link to={`/cart`}>Basket</Link>
                        </small>
                        <br />
                        <span>{cartItemsTotal} items</span>
                        <span className="notify">{cartItemsTotal}</span>
                      </div>
                    </div>
                  </div>

                  <div className="widget-header dropdown">
                    <span
                      className="ml-3 icontext"
                      data-toggle="dropdown"
                      data-offset="20,10"
                    >
                      <div className="icon">
                        <PersonFill />
                      </div>
                      <div className="text">
                        <small className="text-muted">Sign In / Join</small>{" "}
                        <br />
                        <span>
                          My account <CaretDown />
                        </span>
                      </div>
                    </span>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Form className="px-4 py-3">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="email@example.com"
                          />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                        <hr className="dropdown-divider" />
                        <div className="dropdown-item">
                          Have account? Sign up
                        </div>
                        <div className="dropdown-item">Forgot password?</div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  cartItemsTotal: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(NavbarItems);
