export default function ItemGrid({ items, onItemClick }) {
  const itemList = items.map((item) => (
    <li
      key={item.name}
      id={item.name.replaceAll(" ", "-")}
      className={`List__item List__item--${item.color}`}
      onClick={() => onItemClick(item.name)}
    >
      <span className="itemName">{item.name}</span>
    </li>
  ));
  return <ul className="List">{itemList}</ul>;
}
