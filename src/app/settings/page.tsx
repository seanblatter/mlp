import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Workspace settings</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-600">
          Manage users, permissions, model defaults, and notification preferences.
        </CardContent>
      </Card>
    </div>
  );
}
