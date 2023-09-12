import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

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
    const confirmed = window.confirm("are you sure?(this is not reversibile)");
    confirmed && setItems(() => []);
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
