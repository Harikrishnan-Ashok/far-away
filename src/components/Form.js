import { useState } from "react";

export default function Form({ onAddItems }) {
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
