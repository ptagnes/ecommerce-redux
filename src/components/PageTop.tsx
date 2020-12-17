import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { selectTopCategories } from "../redux/selectors/itemSelectors";
import { useLocation } from "react-router-dom";

function PageTop({ categories }: { categories: any }) {
  const location = useLocation();
  let pathName = location.pathname.split("/").pop();
  // console.log(pathName);

  return (
    <section className="section-pagetop bg">
      <div className="container">
        <h2 className="title-page">Category products</h2>
        <nav>
          <ol
            className="breadcrumb text-white"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/">{pathName}</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Great articles
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}

const mapStateToProps = (state: any) => ({
  categories: selectTopCategories(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  //   fetchStartAsync: (id: string) => dispatch<any>(fetchStartAsync(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PageTop);
