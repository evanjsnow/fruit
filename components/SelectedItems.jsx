export default function SelectedItems({ selectedItems }) {
  const itemSummary = (
    <div className="itemSummary">
      Currently Selected:{" "}
      <span className="capitalizeList">
        {selectedItems.length > 0 ? selectedItems.join(", ") : "None"}
      </span>
    </div>
  );

  return itemSummary;
}
