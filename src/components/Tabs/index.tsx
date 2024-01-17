"use client";

import { ITabItem } from "@/models/general";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const tabItems: ITabItem[] = [
  {
    id: "all",
    title: "All",
  },
  {
    id: "pizza",
    title: "Pizza Match",
  },
  {
    id: "steak",
    title: "Steak Match",
  },
];

export default function Tabs() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [currentTabId, setCurrentTabId] = useState<string>("all");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const onTabChange = (id: string) => {
    if (id === "all") {
      setCurrentTabId(id);
      router.push(pathname);
      return;
    }
    setCurrentTabId(id);
    router.push(pathname + "?" + createQueryString("food", id));
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
