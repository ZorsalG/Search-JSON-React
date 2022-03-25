import React from "react";

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
    const arrayData = this.state.data;
    let text = this.props.dataSearch.toLowerCase();
    const filter = arrayData.filter(data => data.name.toLowerCase().includes(text));
    let elementToRender = null;
    if (filter.length === 0) {
      elementToRender = 'No se encontró resultados para ' + text
    } return (
      <div>
        <div>
          <p>{elementToRender}</p>
        </div>
        <ul>
          {filter.map(item =>
            <li key={item.id}>
              <span>{item.name} ({item.email})</span>
            </li>)}
        </ul>
      </div>
    )
  }
}
// IDEA HIGHTLIGHT
// let elementToRender = null;
// if (Array.isArray(this.state.data)) {
//   if (this.state.data.length === 0) {
//     elementToRender = 'No se encontró resultados'
//   } else {
//     elementToRender = (
//       <ul>
//         {this.state.data.map(data => {
//           return (
//             <li key={data.id}>
//               <span>{data.name} ({data.email})</span>
//             </li>
//           )
//         })}
//       </ul>
//     )
//   }
// } else {
//   elementToRender = 'No se realizo la busqueda'
// }
//    <div>
//   {elementToRender}
// </div>


export default List;