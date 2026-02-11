import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function PortfolioPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Portfolio Forecast</h1>
      <Card>
        <CardHeader>
          <CardTitle>Exposure forecast</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-600">
          Add charts here (resolution curve, quarterly exposure bands, stress tests).
        </CardContent>
      </Card>
    </div>
  );
}
