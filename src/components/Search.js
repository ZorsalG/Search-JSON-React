import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
 
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      search: event.target.value
      
    })
  }
  
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.search} />
        <button onClick={() => this.props.dataInput(this.state.search)}>Search</button>
        <div>
          {this.state.currentText}
        </div>
      </div>
    )
  }
}

export default Search;