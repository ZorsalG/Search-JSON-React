import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
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
    let inputStyle = {
      backgroundColor: "white",
      color : "black",
    }
    if (this.props.item.name.includes('.')){
      inputStyle.backgroundColor = "#004D40"
    } if(this.props.item.id % 2 === 0) {
      inputStyle.backgroundColor = "#CE93D8"
    } else {
      inputStyle.backgroundColor = "#9FA8DA"
    } if (this.props.item.username.includes('.org')){
      inputStyle.color = "#004D40"
    }
      //background: item.id % 2 === 0 ? "#CE93D8" : "#9FA8DA", color: item.email.includes('.org') ? "#004D40" : "black", {backgroundColor: item.username.includes('.') ? "#EF9A9A" : "white" }
    if (filter.length === 0) {
      elementToRender = 'No se encontró resultados para ' + text
    } return (
      <div>
        <div>
          <p>{elementToRender}</p>
        </div>
        <ul>
        
          {filter.map(item =>
            <li key={item.id} style={inputStyle}>
              <span onClick={window.alert(item.name + item.email)}>{item.name} ({item.email})</span>
            </li>)}
        </ul>
      </div>
    )
  }
}

export default LiClicker;