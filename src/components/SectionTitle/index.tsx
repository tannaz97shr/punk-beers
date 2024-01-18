export interface SectionTitleProps {
  children?: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h1 className="mt-6 mb-4 font-bold text-2xl md:text-3xl text-text-primary">
      {children}
    </h1>
  );
}
