import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  ondelitems,
  onupdateitems,
  clearall,
}) {
  const [sortby, setsortby] = useState("input");
  let sortedItems;

  if (sortby === "input") {
    sortedItems = items;
  }
  if (sortby === "desc") {
    sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  }
  if (sortby === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            ondelitems={ondelitems}
            onupdateitems={onupdateitems}
          ></Item>
        ))}
      </ul>
      <div className="action">
        <select value={sortby} onChange={(e) => setsortby(e.target.value)}>
          <option value="input"> sortr by input</option>
          <option value="desc">sort by desc</option>
          <option value="packed">sort by packed</option>
        </select>
        <button onClick={clearall}>clear</button>
      </div>
    </div>
  );
}
