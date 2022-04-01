import { useState } from "react";
import { ListHooks } from "./components/ListHooks";
import { SearchHooks } from "./components/SearchHooks";

export default function AppHooks() {
  const [currentText, setCurrentText] = useState("");

  const dataInput = (e) =>{
    setCurrentText(e)
  }

  return (
    <div>
      <SearchHooks dataInput={dataInput}/>
      <ListHooks dataSearch={currentText}/>
    </div>)
}


