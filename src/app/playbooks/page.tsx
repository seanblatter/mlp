import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function PlaybooksPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Playbooks</h1>
      <Card>
        <CardHeader>
          <CardTitle>Guided actions</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-600">
          Add reusable negotiation and escalation playbooks here.
        </CardContent>
      </Card>
    </div>
  );
}
