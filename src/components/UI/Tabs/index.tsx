import { ITabItem } from "@/models/general";

interface TabsProps {
  items: ITabItem[];
  currentId: number;
  onTabChange: (id: number) => void;
}

export default function Tabs({ items, currentId, onTabChange }: TabsProps) {
  return (
    <ul
      className="flex flex-wrap text-sm font-medium text-center mt-6 border-b justify-center 
text-text-secondary border-border-brown"
    >
      {items.map((item: ITabItem) => (
        <li
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={`me-2 inline-block p-4 min-w-[7rem] hover:cursor-pointer rounded-t-lg bg-bg-secondary 
        ${
          item.id === currentId
            ? "text-custom-orange font-semibold border-b-2 border-custom-orange"
            : "text-text-secondary "
        }
        `}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}
