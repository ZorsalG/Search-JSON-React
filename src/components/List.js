import React from "react";
import LiClicker from "./LiClicker";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
        })
      })
  }

  render() {
    let text = this.props.dataSearch.toLowerCase();
    return (
      <LiClicker item={this.state.data} textInput={text} />
    )
  }
}

export default List;