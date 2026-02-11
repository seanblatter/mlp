import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function ImportsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Data Imports</h1>
      <Card>
        <CardHeader>
          <CardTitle>Import pipeline</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-600">
          Configure scheduled CSV/API imports for claims, legal spend, and case activity.
        </CardContent>
      </Card>
    </div>
  );
}
