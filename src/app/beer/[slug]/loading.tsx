import Modal from "@/components/UI/Modal";

export default function LoadingPage() {
  return (
    <Modal>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      <div>Fetching Beer ... </div>
    </Modal>
  );
}
