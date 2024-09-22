import LeftSidebar from "./components/Sidebars/LeftSidebar/LeftSidebar";
import RightSidebar from "./components/Sidebars/RightSidebar/RightSidebar";
import "./globals.css";

export const metadata = {
  title: "X-TWO-AI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex h-screen">
          <LeftSidebar />
          <div className="relative w-full overflow-hidden">
            <div className={`custom-scrollbar h-full w-full overflow-y-auto`}>
              {children}
            </div>
          </div>
          <RightSidebar />
        </div>
      </body>
    </html>
  );
}
