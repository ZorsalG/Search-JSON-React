import React from "react";
import List from './components/List'
import Search from './components/Search'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
    }
    this.dataInput = this.dataInput.bind(this);
  }

  dataInput(event) {
    this.setState({
      currentText: event
    })
  }

  render() {
    return (
      <div>
        <Search dataInput={this.dataInput} />
        <List dataSearch={this.state.currentText} />
      </div>
    )
  }
}

export default App;