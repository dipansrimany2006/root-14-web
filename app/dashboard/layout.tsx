"use client";

import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-neutral-100 dark:bg-neutral-900">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-10">{children}</div>
      </main>
    </div>
  );
}
