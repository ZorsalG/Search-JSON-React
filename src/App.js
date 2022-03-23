import React from "react";
import List from './components/List'
import Search from './components/Search'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentText: '',
    }
    this.asignar = this.asignar.bind(this);
  }

  asignar(event){
    this.setState({
      currentText: event
    })
  }

  render() {
    return (
      <div>
        <Search asignar={this.asignar}/>
        <List dataSearch={this.state.currentText} />
      </div>
    )
  }
}

export default App;