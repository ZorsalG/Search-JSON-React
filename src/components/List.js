import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  componentDidUpdate(dataSearch){
    if(dataSearch !== this.state.data){
      
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
    let elementToRender = null;
    if (Array.isArray(this.state.data)) {
      if (this.state.data.length === 0) {
        elementToRender = 'No se encontró resultados'
      } else {
        elementToRender = (
          <ul>
            {this.state.data.map(data => {
              return (
                <li key={data.id}>
                  <span>{data.name} ({data.email})</span>
                </li>
              )
            })}
          </ul>
        )
      }
    } else {
      elementToRender = 'No se realizo la busqueda'
    }
    return (
      <div>
        {elementToRender}
      </div>
    )
  }
}

export default List;