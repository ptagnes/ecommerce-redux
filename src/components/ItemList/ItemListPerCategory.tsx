import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { searchItems } from "../../redux/selectors/itemSelectors";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemsHeader from "./ItemsHeader";
import ItemView from "./ItemView";
import { selectItemsGrid } from "../../redux/selectors/itemSelectors";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function ItemListPerCategory({
  categoryItems,
  routeTopCategory,
  routeSubCategory,
  routeSubSubCategory,
  grid,
  sortedItems,
}: {
  categoryItems: any;
  routeTopCategory: any;
  routeSubCategory: any;
  routeSubSubCategory: any;
  grid: any;
  sortedItems: any;
}) {
  const itm = sortedItems.length > 0 ? sortedItems : categoryItems;
  const location = useLocation();
  const prodRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (prodRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top: prodRef.current.offsetTop,
      });
    }
  }, [location]);

  var pathArray = window.location.pathname.split("/");
  return (
    <Container fluid>
      <ItemsHeader itemCount={categoryItems.length} items={categoryItems} />
      <span className="srollref" ref={prodRef}></span>
      <Row>
        {/* <TransitionGroup component="div" className="row"> */}
        {itm && itm.length > 0
          ? Object.values(itm).map((item: any, i) => {
              return (
                <Col
                  key={i}
                  xs={12}
                  md={grid ? 6 : 12}
                  lg={grid ? 6 : 12}
                  className="product-grid"
                >
                  {/* <CSSTransition
                    timeout={500}
                    // classNames="fade"
                    key={i}
                    in={true}
                    classNames="show-filter"
                    unmountOnExit
                  > */}
                  {item.subitems ? (
                    <>
                      <div
                        className="card-banner overlay-gradient"
                        style={{
                          minHeight: "230px",
                          backgroundImage: `url(${item.imageUrl})`,
                          marginBottom: "1rem",
                        }}
                      >
                        <div className="card-img-overlay white">
                          <h3 className="card-title">{item.name}</h3>
                          <p
                            className="card-text"
                            style={{ maxWidth: "400px" }}
                          >
                            {item.description}
                          </p>
                          <Link
                            className="btn btn-warning"
                            to={`/productsubcategory/${pathArray[2]}/${pathArray[3]}/${pathArray[4]}/${item.routeName}`}
                          >
                            Browse items
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <ItemView
                      imageUrl={item.imageUrl}
                      name={item.name}
                      description={item.description}
                      link={`/details/${routeTopCategory}/${routeSubCategory}/${routeSubSubCategory}/${item.id}`}
                      price={item.price}
                      badgeText={item.onSale === "yes" ? "ON SALE" : "BUY NOW"}
                      onSale={item.onSale}
                      grid={grid}
                    />
                  )}
                  {/* </CSSTransition> */}
                </Col>
              );
            })
          : "no results"}
        {/* </TransitionGroup> */}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state: any, ownProps: any) => {
  const category = ownProps.match.params;
  return {
    categoryItems: searchItems(category)(state),
    routeTopCategory: ownProps.match.params.category,
    routeSubCategory: ownProps.match.params.subcat,
    routeSubSubCategory: ownProps.match.params.subsubcat,
    grid: selectItemsGrid(state),
    sortedItems: state.itemsState.sort,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemListPerCategory);
