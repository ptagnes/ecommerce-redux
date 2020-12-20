import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  selectItemsTopCategories,
  selectItemSubCategories,
} from "../../redux/selectors/itemSelectors";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function ItemListSubCategories({
  collection,
  routeTopCategory,
  routeSubCategory,
}: {
  collection: any;
  routeTopCategory: any;
  routeSubCategory: any;
}) {
  return (
    <Container fluid>
      <Row>
        {collection.productList.length > 0
          ? Object.values(collection.productList).map((item: any, i) => {
              return (
                <Col key={i} xs={12} md={6} lg={6}>
                  <div
                    className="card-banner overlay-gradient"
                    style={{
                      height: "220px",
                      backgroundImage: `url(${item.imageUrl})`,
                      marginBottom: "30px",
                    }}
                  >
                    <article className="card-body caption">
                      <h5 className="card-title">{item.name}</h5>
                      <p>{item.description}</p>
                      <Link
                        className="btn btn-warning"
                        to={`/productcategory/${routeTopCategory}/${routeSubCategory}/${item.routeName}`}
                      >
                        Browse products
                      </Link>
                    </article>
                  </div>
                </Col>
              );
            })
          : "no results"}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    categories: selectItemsTopCategories(state),
    collection: selectItemSubCategories(ownProps.match.params)(state),
    routeTopCategory: ownProps.match.params.category,
    routeSubCategory: ownProps.match.params.subcat,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  //   fetchStartAsync: (id: string) => dispatch<any>(fetchStartAsync(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemListSubCategories);
