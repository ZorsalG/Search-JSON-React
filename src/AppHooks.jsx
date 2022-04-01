import { useState } from "react";
import { ListHooks } from "./components/ListHooks";
import { SearchHooks } from "./components/SearchHooks";

export default function AppHooks() {
  const [currentText, setCurrentText] = useState("");

  return (
    <div>
      <SearchHooks changeText={currentText => setCurrentText(currentText)} />
      <ListHooks dataSearch={currentText} />
    </div>)
}


