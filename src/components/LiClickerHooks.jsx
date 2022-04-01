export function LiClickerHooks(props) {
  const changeBackground = (item) => {
    if (item.username.includes(".")) {
      return "#EF9A9A";
    }
    if (item.id % 2 === 0) {
      return "#CE93D8";
    } else {
      return "#9FA8DA";
    }
  };

  const changeTextColor = (item) => {
    if (item.email.includes(".org")) {
      return "#004D40";
    }
  };

  const alertInfo = (item) => {
    window.alert(item.name + item.email);
  };

  const arrayData = props.item;
  let text = props.dataSearch.toLowerCase();
  const filter = arrayData.filter((item) =>
    item.name.toLowerCase().includes(text)
  );
  let elementToRender = null;
  if (filter.length === 0) {
    elementToRender = "No se encontró resultados para " + text;
  }
  return (
    <div>
      <div>
        <p>{elementToRender}</p>
      </div>
      <ul>
        {filter.map((data) => (
          <li
            style={{
              backgroundColor: changeBackground(data),
              color: changeTextColor(data),
            }}
            key={data.id}
            onClick={() => alertInfo(data)}
          >
            <span>
              {data.name} ({data.email})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
