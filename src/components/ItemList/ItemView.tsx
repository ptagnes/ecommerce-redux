import React from "react";
import { Link } from "react-router-dom";
import { Figure } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ItemViewGrid(props: any) {
  const { imageUrl, name, description, link, price, badgeText, onSale } = props;
  return (
    <Figure className="card card-product-grid">
      <div className="img-wrap">
        <span className="badge badge-danger">{badgeText}</span>
        <Figure.Image width={171} height={180} alt="171x180" src={imageUrl} />
        <div className="btn-overlay">
          <Search /> Quick view
        </div>
      </div>
      <Figure.Caption className="info-wrap">
        <div className="fix-height">
          <Link to={link}>View product: {name}</Link>
          <p>{description}</p>
          <div className="price-wrap mt-2">
            <span className="price">{price}$</span>
            {onSale && onSale === "yes" && (
              <del className="price-old">$190</del>
            )}
          </div>
        </div>
      </Figure.Caption>
    </Figure>
  );
}
function ItemViewList(props: any) {
  // const { imageUrl, name, description, link, price, badgeText, grid } = props;
  const { imageUrl, name, description, price, badgeText, onSale } = props;

  return (
    <article className="card card-product-list">
      <div className="row no-gutters">
        <Col xs={3} md={3} lg={3}>
          <div className="img-wrap">
            <span className="badge badge-danger">{badgeText}</span>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={imageUrl}
              className="img-grid-list"
            />
          </div>
        </Col>
        <Col xs={9} md={6} lg={6}>
          <div className="info-main">
            <div className="h5 title"> {name} </div>
            <p>{description}</p>
          </div>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <div className="info-aside">
            <div className="price-wrap">
              <span className="price h5"> {price}$</span>
              {onSale && onSale === "yes" && (
                <del className="price-old">$190</del>
              )}
            </div>
            <p className="text-success">Free shipping</p>
            <br />
            <div>
              <div className="btn btn-primary btn-block"> Details </div>
              <div className="btn btn-light btn-block">
                <i className="fa fa-heart"></i>
                <span className="text">Add to wishlist</span>
              </div>
            </div>
          </div>
        </Col>
      </div>
    </article>
  );
}

function ItemView(props: any) {
  const { grid } = props;
  return (
    <>{grid ? <ItemViewGrid {...props} /> : <ItemViewList {...props} />}</>
  );
}

export default ItemView;
