import MainContent from "@/app/components/MainContent/MainContent";

export default function HomeLayout({ children }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="custom-scrollbar h-full w-full overflow-y-auto">
        <MainContent />
        {children}
      </div>
    </div>
  );
}
