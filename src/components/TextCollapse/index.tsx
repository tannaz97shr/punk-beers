"use client";

import { useState } from "react";

interface TextCollapseProps {
  text: string;
}

export default function TextCollapse({ text }: TextCollapseProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  return (
    <>
      {text.length > 200 ? (
        <>
          <p className={`m-4 ${isCollapsed && "line-clamp-2"}`}>{text}</p>
          <button
            className="flex ml-auto underline text-text-secondary"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? "Read More" : "collapse"}
          </button>
        </>
      ) : (
        <p className="m-4">{text}</p>
      )}
    </>
  );
}
