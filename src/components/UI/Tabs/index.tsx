"use client";

import { ITabItem } from "@/models/general";
import { useState } from "react";

export default function Tabs() {
  const tabItems: ITabItem[] = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Pizza Match",
    },
    {
      id: 3,
      title: "Steak Match",
    },
  ];
  const [currentTabId, setCurrentTabId] = useState<number>(1);
  const onTabChange = (id: number) => {
    setCurrentTabId(id);
  };

  return (
    <ul
      className="flex flex-wrap text-sm font-medium text-center mt-6 border-b justify-center 
text-text-secondary border-border-brown"
    >
      {tabItems.map((item: ITabItem) => (
        <li
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={`me-2 inline-block p-4 min-w-[7rem] hover:cursor-pointer rounded-t-lg bg-bg-secondary 
        ${
          item.id === currentTabId
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
