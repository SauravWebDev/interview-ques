import React, { useState } from "react";
import lodash from "lodash";
function List() {
  return <></>;
}
const ITEMS_API_URL = "https://example.com/api/items?q=";
const DEBOUNCE_DELAY = 500;
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}
export default function Autocomplete() {
  let [list, setList] = useState([]);
  let debounceOnChange = React.useCallback(
    debounce(onChange, DEBOUNCE_DELAY),
    []
  );

  let [loading, setLoading] = useState(false);
  async function onChange(value) {
    try {
      setLoading(true);
      let response = await fetch(ITEMS_API_URL + value);
      let data = await response.json();
      alert("data fetcjd");
      setList(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      alert("eror in fetching api");
    }
  }
  alert("data" + list);
  return (
    <div className="wrapper">
      <div className="control">
        <input
          type="text"
          className={loading ? "input is-loading" : "input"}
          onChange={(e) => debounceOnChange(e.target.value)}
        />
      </div>
      <div className="list is-hoverable">
        {list.forEach((city) => (
          <a className="list-item"> ${city}</a>
        ))}
      </div>
      {list.length > 0 && <List list={} />}
    </div>
  );
}
