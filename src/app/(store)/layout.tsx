import { Header } from "@/components/header";
import { ReactNode } from "react";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-420 grid-rows-[min-content_1fr] gap-5 p-8">
  <Header />
  <main className="h-full">
    {children}
  </main>
</div>
  );
}
