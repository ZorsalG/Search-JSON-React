import { useState, useEffect } from "react";

export function ListHooks(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>
          {data.name} ({data.email})
        </li>
      ))}
    </ul>
  );
}
