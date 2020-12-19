import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { withRouter } from "react-router-dom";
import {
  searchItemsMemoized,
  selectItemsTopCategories,
} from "../../redux/selectors/itemSelectors";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "../Pagination";
import ItemsHeader from "./ItemsHeader";
// import Layout from "./Layout";
// import svgimg from "../data/picture_missing_text.svg";
import { selectItemsGrid } from "../../redux/selectors/itemSelectors";
import ItemView from "./ItemView";
import { useLocation } from "react-router-dom";

function ItemList({
  items,
  grid,
  sortedItems,
}: {
  items: any;
  grid: any;
  sortedItems: any;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const itm = sortedItems.length > 0 ? sortedItems : items;
  const currentPosts = itm.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
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

  return (
    // <Layout>
    <Container fluid>
      <ItemsHeader itemCount={items.length} items={items} />
      <span className="srollref" ref={prodRef}></span>
      <Row ref={prodRef}>
        {currentPosts.length > 0
          ? Object.values(currentPosts).map((item: any, i) => {
              return (
                <Col
                  key={i}
                  xs={12}
                  md={grid ? 6 : 12}
                  lg={grid ? 4 : 12}
                  className="product-grid"
                >
                  <ItemView
                    imageUrl={item.imageUrl}
                    name={item.name}
                    description={item.description}
                    link={`/details${item.route}`}
                    price={item.price}
                    badgeText="NEW"
                    grid={grid}
                  />
                </Col>
              );
            })
          : "no results"}
      </Row>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        paginate={paginate}
      />
    </Container>
    // </Layout>
  );
}

const mapStateToProps = (state: any) => {
  return {
    items: searchItemsMemoized(state),
    categories: selectItemsTopCategories(state),
    grid: selectItemsGrid(state),
    sortedItems: state.itemsState.sort,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  //   fetchStartAsync: (id: string) => dispatch<any>(fetchStartAsync(id)),
});
// export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ItemList)
);
