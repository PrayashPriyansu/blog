import { ReactNode } from "react";
import Header from "../_components/blog/Header";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-gray-900">
      <Header />

      <div className="grid">{children}</div>
    </div>
  );
}
export default Layout;
