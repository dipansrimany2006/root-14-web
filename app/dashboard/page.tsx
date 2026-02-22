import { KeyCard } from "@/components/dashboard/key-card";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>

      <div className="flex flex-col sm:flex-row gap-4">
        <KeyCard label="Client ID" badge="Public" />
        <KeyCard label="Secret Key" badge="Private" />
      </div>
    </div>
  );
}
