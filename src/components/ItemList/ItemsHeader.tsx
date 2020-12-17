import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleItemsGrid, sortItems } from "../../redux/actions/itemsActions";
import { Grid, List } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import { Filter } from "react-bootstrap-icons";

function ItemsHeader({
  toggleItemsGrid,
  itemCount,
  sortItems,
  items,
}: {
  toggleItemsGrid: () => void;
  sortItems: (sort: any, items: any) => void;
  itemCount: number;
  items: any;
}) {
  console.log("items from items header");
  console.log(items);
  Object.values(items).forEach((key) => {
    const lkj: any = key;
    Object.keys(lkj).forEach((item) => {
      console.log(item);
    });
  });
  const [grid, setGrid] = React.useState<{ grid: boolean }>({
    grid: true,
  });
  const handleOnChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement | any
    >
  ) => {
    const {
      target: { value },
    } = e;
    sortItems(value, items);
  };
  return (
    <header className="border-bottom mb-4 pb-3">
      <div className="form-inline">
        <span className="mr-md-auto">{itemCount} Items found </span>
        <div style={{ marginRight: "20px" }}>
          Filter <Filter />
        </div>
        <Form style={{ marginRight: "10px" }}>
          <Form.Group controlId="sorting" style={{ marginBottom: "0" }}>
            <Form.Control
              as="select"
              custom
              onChange={(e) => handleOnChange(e)}
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="cheapestasc">Cheapest ASC</option>
              <option value="cheapestdesc">Cheapest DESC</option>
              <option value="popular">Most Popular</option>
              <option value="sale">On Sale</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <div className="btn-group">
          <span
            className={`btn btn-primary ${grid.grid ? "" : "disabled"}`}
            data-toggle="tooltip"
            title="List view"
            onClick={() => {
              toggleItemsGrid();
              setGrid({ grid: false });
            }}
          >
            <List />
          </span>
          <span
            className={`btn btn-primary ${!grid.grid ? "" : "disabled"}`}
            data-toggle="tooltip"
            title="Grid view"
            onClick={() => {
              toggleItemsGrid();
              setGrid({ grid: true });
            }}
          >
            <Grid />
          </span>
        </div>
      </div>
    </header>
  );
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleItemsGrid: () => dispatch<any>(toggleItemsGrid()),
  sortItems: (sort: any, items: any) => dispatch<any>(sortItems(sort, items)),
});
export default connect(null, mapDispatchToProps)(ItemsHeader);
