"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface PaginationProps {
  current: number;
}

export default function Pagination({ current }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(current);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    router.push(
      pathname + "?" + createQueryString("page", currentPage.toString())
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onPreviousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex w-full mt-6 justify-between pb-4">
      <button
        onClick={onPreviousPage}
        disabled={currentPage === 1 ? true : false}
        className="flex items-center border rounded px-2 py-3 border-custom-orange"
      >
        <FaAngleLeft />
        <span>Previous</span>
      </button>
      <button
        onClick={onNextPage}
        className="flex items-center border rounded px-2 py-3 border-custom-orange"
      >
        <span>Next</span>
        <FaAngleRight />
      </button>
    </div>
  );
}
