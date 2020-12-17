import React, { Component } from "react";
import { connect } from "react-redux";
import { searchItems } from "../redux/actions";
interface SearchProps {
  searchItems?: (text: string) => void;
}
interface SearchState {
  value: string;
}
class Search extends Component<SearchProps, SearchState> {
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
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchItems,
};

export default connect(null, mapDispatchToProps)(Search);
