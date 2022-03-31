import React from "react";

class LiClicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const arrayData = this.props.item;
    let text = this.props.textInput.toLowerCase();
    const filter = arrayData.filter(item => item.name.toLowerCase().includes(text));
    let elementToRender = null;

    const changeBackground = (item) => {
      if (item.username.includes('.')) {
        return "#EF9A9A"
      }
      if (item.id % 2 === 0) {
        return "#CE93D8"
      } else {
        return "#9FA8DA"
      }
    }

    const changeTextColor = (item) => {
      if (item.email.includes('.org')) {
        return "#004D40"
      }
    }

    if (filter.length === 0) {
      elementToRender = 'No se encontró resultados para ' + text
    } return (
      <div>
        <div>
          <p>{elementToRender}</p>
        </div>
        <ul>
          {filter.map(item =>
            <li style={{ backgroundColor: changeBackground(item), color: changeTextColor(item) }} key={item.id} onClick={window.alert(item.name + item.email)}>
              <span>{item.name} ({item.email})</span>
            </li>)}
        </ul>
      </div>
    )
  }
}

export default LiClicker;