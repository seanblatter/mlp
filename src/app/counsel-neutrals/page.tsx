import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function CounselNeutralsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Counsel & Neutrals</h1>
      <Card>
        <CardHeader>
          <CardTitle>Panel management</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-600">
          Track external counsel and mediator performance by dispute type and venue.
        </CardContent>
      </Card>
    </div>
  );
}
