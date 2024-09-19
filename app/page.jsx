import MainContent from "./components/MainContent/MainContent";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";

export default function Home() {
  return (
    <>
      <div className="relative flex h-screen">
        <LeftSidebar />
        {/* Content */}
        <div className="overflow-hidden relative w-full">
          <div className="w-full h-full overflow-y-auto custom-scrollbar">
            <MainContent />
          </div>
        </div>
        {/* Right sidebar */}
        <RightSidebar />
      </div>
    </>
  );
}
