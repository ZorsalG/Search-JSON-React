import React from "react";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [],
    };
  }
  componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => res.json())
      .then((json) =>{
          this.setState({
              items: json,
              DataisLoaded: true
          });
      })
  }
  
  render(){
      const { DataisLoaded, items} = this.state;
      return(
          <div>
              {
                  items.map((item) => (
                    <p key = {item.id}>
                        {item.thumbnailUrl}</p>
                  ))
              }
          </div>
      )
  }
}
export default Body;