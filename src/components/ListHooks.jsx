import { useState, useEffect } from "react";
import { LiClickerHooks } from "./LiClickerHooks";

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

  let text = props.dataSearch;
  return (
    <LiClickerHooks dataSearch={text} item={data} />
  );
}
