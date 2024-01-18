"use client";

import Modal from "@/components/UI/Modal";

import { useRouter } from "next/navigation";

export default function BeerPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  return (
    <Modal closeHandler={() => router.back()}>
      <div>This is beer page: {params.slug}</div>
    </Modal>
  );
}
