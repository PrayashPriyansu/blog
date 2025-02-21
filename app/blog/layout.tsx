import { ReactNode } from "react";
import Header from "../_components/blog/Header";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f8f8] to-[#e4e4e4] text-gray-900">
      <Header />
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
}
export default Layout;
