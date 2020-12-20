import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { selectItemCategories } from "../../redux/selectors/itemSelectors";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function ItemListCategories({
  collection,
  routecategory,
}: {
  collection: any;
  routecategory: any;
}) {
  return (
    <Container fluid>
      <Row>
        {collection.length > 0
          ? Object.values(collection).map((item: any, i) => {
              return (
                <div key={i} className="jumbotron-wrapper">
                  <Jumbotron
                    className="card-banner overlay-gradient"
                    style={{
                      minHeight: "230px",
                      backgroundImage: `url(${item.imageUrl})`,
                    }}
                  >
                    <div className="card-img-overlay white">
                      <h3 className="card-title">
                        {item.name} <br /> right now
                      </h3>
                      <p className="card-text" style={{ maxWidth: "400px" }}>
                        {item.description}
                      </p>
                      <Link
                        className="btn btn-warning"
                        to={`/productcategories/${routecategory}/${item.routeName}`}
                      >
                        Browse products
                      </Link>
                    </div>
                  </Jumbotron>
                </div>
              );
            })
          : "no results"}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    collection: selectItemCategories(ownProps.match.params.category)(state),
    routecategory: ownProps.match.params.category,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  //   fetchStartAsync: (id: string) => dispatch<any>(fetchStartAsync(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ItemListCategories)
);
