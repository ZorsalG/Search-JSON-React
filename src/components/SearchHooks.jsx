import { useState } from "react";

export function SearchHooks(props) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => props.changeText(search)}>Search</button>
    </div>
  );
}
