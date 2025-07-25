
import Message from "@/components/Message";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Message />
      {children}
    </main>
  )
}