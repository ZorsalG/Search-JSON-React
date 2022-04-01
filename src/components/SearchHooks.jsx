import { useState } from "react";

export function SearchHooks(props) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" value={search} onChange={handleSearchChange}/>
      <button onClick={() => props.dataInput(search)}>Search</button>
    </div>
  );
}
