import React from "react";
import List from "./List"

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      currentText: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleChange(event) {
    this.setState({
      search: event.target.value

    })
    console.log(event)
  }

  handleClick(event) {
    this.setState({
      currentText: null,//COMPONENTE DEL OTRO
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.search} />
        <button onClick={this.handleClick}>Search</button>
        <div>
          {this.state.currentText}
        </div>
      </div>
    )
  }
}

export default Search;