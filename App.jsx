import { useState } from "react";
import { items } from "./data/items";
import SelectedItems from "./components/SelectedItems";
import ItemGrid from "./components/ItemGrid";

export default function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  function handleItemClick(name) {
    const itemID = name.replaceAll(" ", "-");
    document.querySelector(`#${itemID}`).classList.toggle("selected");
    const isSelected = Boolean(selectedItems.includes(name));
    if (!isSelected) {
      setSelectedItems([...selectedItems, name]);
    } else if (isSelected) {
      const updatedItems = selectedItems.filter((item) => item !== name);
      setSelectedItems(updatedItems);
    }
  }

  return (
    <>
      <SelectedItems selectedItems={selectedItems} />
      <ItemGrid items={items} onItemClick={handleItemClick} />
    </>
  );
}
