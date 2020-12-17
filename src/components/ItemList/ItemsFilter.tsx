import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { sortItems } from "../../redux/actions/itemsActions";
import Form from "react-bootstrap/Form";
function ItemsFilter({
  sortItems,
  items,
}: {
  sortItems: (sort: any, items: any) => void;
  items: any;
}) {
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
  /**
     Brands, Categories?, Colors?, Sizes?, In Stock?, On Sale?, Pricerange?,
      Unique criteria depending on category

      object keys - criteria
      object values - options value
     */
  return (
    <div className="form-inline">
      <Form style={{ marginRight: "10px" }}>
        <Form.Group controlId="filtering">
          <Form.Control as="filter" custom onChange={(e) => handleOnChange(e)}>
            <option value="relevance">Brands</option>
            <option value="cheapestasc">Cheapest ASC</option>
            <option value="cheapestdesc">Cheapest DESC</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  sortItems: (sort: any, items: any) => dispatch<any>(sortItems(sort, items)),
});
export default connect(null, mapDispatchToProps)(ItemsFilter);
