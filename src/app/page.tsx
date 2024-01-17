"use client";

import Tabs from "@/components/UI/Tabs";
import { ITabItem } from "@/models/general";
import { useState } from "react";

export default function Home() {
  // Tabs
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 pt-4 max-w-5xl w-full justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="mt-6 font-bold text-2xl md:text-3xl text-text-primary">
          Browse All Beers
        </h1>
        <Tabs
          currentId={currentTabId}
          onTabChange={(id: number) => {
            setCurrentTabId(id);
          }}
          items={tabItems}
        />
      </div>
    </main>
  );
}
