import React, { Component } from "react";
import { connect } from "react-redux";
import { searchItems } from "../redux/actions";
import { Search } from "react-bootstrap-icons";
import { InputGroup, FormControl } from "react-bootstrap";
interface SearchProps {
  searchItems?: (text: string) => void;
}
interface SearchState {
  value: string;
}
class SearchProducts extends Component<SearchProps, SearchState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleChange = (event: any) => {
    this.setState({
      value: event.target.value,
    });
    if (event.target.value === "") {
      this.props.searchItems && this.props.searchItems("");
    }
  };
  handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.searchItems && this.props.searchItems(this.state.value);
  };

  render() {
    return (
      <div className="pb-3">
        <div className="input-group">
          <form onSubmit={this.handleSubmit} style={{ width: "100%" }}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="search-products">
                  <Search />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={this.handleChange}
                placeholder="Search Products"
                aria-label="Search Products"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchItems,
};

export default connect(null, mapDispatchToProps)(SearchProducts);
