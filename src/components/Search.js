import React, { useEffect } from "react";
import ListData from "./ListData.json"

class Search extends React.Component {

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
        <input type="text" onChange={(event)=>this.search(event)} />
        {items}
        </div>
      )
    }
  }
  
export default Search;