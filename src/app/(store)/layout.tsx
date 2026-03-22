import { Header } from "@/components/header";
import { ReactNode } from "react";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid w-full max-w-400 grid-rows[min-content_max-content] gap-5 p-8">
      <Header />
      {children}
    </div>
  );
}
