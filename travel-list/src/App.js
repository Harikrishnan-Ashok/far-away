import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  function handledel(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleupdate(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearall() {
    console.log("clicked");
    setItems(() => []);
  }
  return (
    <>
      <div className="app">
        <Logo></Logo>
        <Form onAddItems={handleAddItems}></Form>
        <PackingList
          items={items}
          ondelitems={handledel}
          onupdateitems={handleupdate}
          clearall={clearall}
        ></PackingList>
        <Stats items={items}></Stats>
      </div>
    </>
  );
}
function Logo() {
  return (
    <>
      <h1>🌴far away 🛍️</h1>
    </>
  );
}
function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [quant, setQuant] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return;

    const newItem = { desc, quant, packed: false, id: Date.now() };
    //  console.log(newItem);
    onAddItems(newItem);
    setDesc("");
    setQuant(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do u need for your trip???</h3>
      <select value={quant} onChange={(e) => setQuant(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item...."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></input>
      <button type="submit">add</button>
    </form>
  );
}
function PackingList({ items, ondelitems, onupdateitems, clearall }) {
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
function Item({ item, ondelitems, onupdateitems }) {
  console.log(item);
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onupdateitems(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quant} {item.desc}
      </span>
      <button onClick={() => ondelitems(item.id)}>❌</button>
    </li>
  );
}
function Stats({ items }) {
  const totitems = items.length;
  return (
    <>
      <footer className="stats">
        <em>
          ya have {totitems} items ya list and ya have completerd only this much
        </em>
      </footer>
    </>
  );
}
