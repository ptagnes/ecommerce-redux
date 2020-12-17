import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { selectTopCategories } from "../redux/selectors/itemSelectors";
import AccordionTopCustom from "./CategoryNavigation/AccordionTopCustom";
import { Accordion } from "react-bootstrap";
import Search from "./Search";

function TopNavigation({ categories }: { categories: any }) {
  return (
    <div className="card catNav">
      <div className="card-head">SORTIMENT</div>
      <article className="filter-group">
        <header className="card-header search-header">
          <div style={{ display: "flex" }}>
            <h6 style={{ color: "#9ca2a9" }} className="title">
              Search products
            </h6>
          </div>
        </header>
        <div className="filter-content collapse show" id="collapse_1">
          <div className="card-body search-body">
            <Search />
          </div>
        </div>
      </article>

      <Accordion>
        {Object.entries(categories).map(([key, val], index) => (
          <AccordionTopCustom
            key={key}
            item={val}
            clName={"active"}
            k={index}
            topCategoryName={key}
          />
        ))}
      </Accordion>

      <article className="filter-group">
        {/* <header className="card-header">
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapse_2"
            aria-expanded="true"
            className=""
          >
             <ChevronDown/>
            <h6 className="title">Brands </h6>
          </a>
        </header> */}
        <div className="filter-content collapse show" id="collapse_2">
          <div className="card-body">
            {/* <label className="custom-control custom-checkbox">
				  <input type="checkbox" className="custom-control-input">
				  <div className="custom-control-label">Mercedes  
				  	<b className="badge badge-pill badge-light float-right">120</b>  </div>
				</label>
				<label className="custom-control custom-checkbox">
				  <input type="checkbox" className="custom-control-input">
				  <div className="custom-control-label">Toyota 
				  	<b className="badge badge-pill badge-light float-right">15</b>  </div>
				</label> */}
          </div>
        </div>
      </article>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  categories: selectTopCategories(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  //   fetchStartAsync: (id: string) => dispatch<any>(fetchStartAsync(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TopNavigation);
