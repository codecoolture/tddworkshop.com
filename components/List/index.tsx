import { Text } from "../Text";

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="List__Item">
      <Text>{children}</Text>
    </li>
  );
}

export function List({ children }: { children: React.ReactNode }) {
  return <ul className="List">{children}</ul>;
}

List.Item = Item;
