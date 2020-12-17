import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { sortItems } from "../../redux/actions/itemsActions";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { X } from "react-bootstrap-icons";

function ItemsFilter({
  // sortItems,
  closeFilter,
  items,
}: {
  // sortItems: (sort: any, items: any) => void;
  closeFilter: any;
  items: any;
}) {
  // const handleOnChange = (
  //   e: React.ChangeEvent<
  //     HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement | any
  //   >
  // ) => {
  //   const {
  //     target: { value },
  //   } = e;
  //   sortItems(value, items);
  // };
  /**
     Brands, Categories?, Colors?, Sizes?, In Stock?, On Sale?, Pricerange?,
      Unique criteria depending on category
      object keys - criteria
      object values - options value
     */
  // console.log("items from items filter");
  // Object.values(items).forEach((key) => {
  //   const lkj: any = key;
  //   Object.keys(lkj).forEach((item) => {
  //     console.log(item);
  //   });
  // });
  return (
    <div className="filter-container">
      <div className="filter-container-inner">
        <div className="closefilter" onClick={() => closeFilter(false)}>
          <X />
        </div>
        <h6 style={{ paddingTop: "1rem" }}>
          Filter by: <small>OBS! not implemented yet</small>
        </h6>
        <Row>
          <Col xs={12} md={12} lg={3}>
            <h6>Categories</h6>
            <Form>
              {["checkbox"].map((type: any) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Category1`}
                  />
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Category2`}
                  />
                </div>
              ))}
            </Form>
          </Col>
          <Col xs={12} md={12} lg={3}>
            <h6>Brands</h6>
            <Form>
              {["checkbox"].map((type: any) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Brand1`}
                  />
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Brand2`}
                  />
                </div>
              ))}
            </Form>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div
              className="filter-content collapse show"
              id="collapse_3"
              style={{}}
            >
              <div className="card-body">
                <input
                  type="range"
                  className="custom-range"
                  min="0"
                  max="100"
                  name=""
                />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Min</label>
                    <input
                      className="form-control"
                      placeholder="$0"
                      type="number"
                    />
                  </div>
                  <div className="form-group text-right col-md-6">
                    <label>Max</label>
                    <input
                      className="form-control"
                      placeholder="$1,0000"
                      type="number"
                    />
                  </div>
                </div>

                <button className="btn btn-block btn-primary">Apply</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  sortItems: (sort: any, items: any) => dispatch<any>(sortItems(sort, items)),
});
export default connect(null, mapDispatchToProps)(ItemsFilter);
