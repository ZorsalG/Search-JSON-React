import React from "react";

class LiClicker extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const arrayData = this.props.item;
    let text = this.props.textInput.toLowerCase();
    const filter = arrayData.filter(item => item.name.toLowerCase().includes(text));
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
              <span onClick={window.alert(item)}>{item.name} ({item.email})</span>
            </li>)}
        </ul>
      </div>
    )
  }
}

export default LiClicker;