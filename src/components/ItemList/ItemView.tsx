import React from "react";
import { Link } from "react-router-dom";
import { Figure } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

function ItemViewGrid(props: any) {
  const { imageUrl, name, description, link, price, badgeText, grid } = props;
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
            <span className="price">{price}</span>
            <del className="price-old">$1980</del>
          </div>
        </div>
      </Figure.Caption>
    </Figure>
  );
}
function ItemViewList(props: any) {
  const { imageUrl, name, description, link, price, badgeText, grid } = props;
  return (
    <article className="card card-product-list">
      <div className="row no-gutters">
        <aside className="col-md-3">
          <div className="img-wrap">
            <span className="badge badge-danger">{badgeText}</span>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={imageUrl}
            />
          </div>
        </aside>
        <div className="col-md-6">
          <div className="info-main">
            <div className="h5 title"> Great product name goes here </div>
            <p>{description}</p>
          </div>
        </div>
        <aside className="col-sm-3">
          <div className="info-aside">
            <div className="price-wrap">
              <span className="price h5"> $140 </span>
              <del className="price-old"> $198</del>
            </div>
            <p className="text-success">Free shipping</p>
            <br />
            <p>
              <div className="btn btn-primary btn-block"> Details </div>
              <div className="btn btn-light btn-block">
                <i className="fa fa-heart"></i>
                <span className="text">Add to wishlist</span>
              </div>
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}

function ItemView(props: any) {
  const { imageUrl, name, description, link, price, badgeText, grid } = props;
  return (
    <>{grid ? <ItemViewGrid {...props} /> : <ItemViewList {...props} />}</>
  );
}

export default ItemView;
