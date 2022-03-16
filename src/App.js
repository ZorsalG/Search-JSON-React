import React from "react";
import ListData from "./components/ListData.json"

class App extends React.Component {

    constructor(){
      super();
      this.state={
        search:null
      };
    }

    search=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
      }

    render(){
        const items = ListData.filter((data)=>{
            if(this.state.search == null)
                return data
            else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.email.toLowerCase().includes(this.state.search.toLowerCase())){
                return data
            }
          }).map(data=>{
            return(
        <div>
          <ul>
            <li>
              <span>{data.name} ({data.email})</span>
            </li>
          </ul>
        </div>
        )
      })
  
      return (
        <div>
        <input type="text" onChange={(e)=>this.search(e)} />
        {items}
        </div>
      )
    }
  }
  
export default App;