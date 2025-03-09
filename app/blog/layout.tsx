import { ReactNode } from "react";
import Header from "../_components/blog/Header";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-gray-900">
      <Header />

      <div className="grow flex flex-col">{children}</div>
    </div>
  );
}
export default Layout;
