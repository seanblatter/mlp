export type RiskBand = "low" | "med" | "high";

export type DisputeStage =
  | "Pre-suit"
  | "Demand"
  | "Filed"
  | "Discovery"
  | "Mediation Scheduled"
  | "Mediation"
  | "Arbitration"
  | "Resolved";

export type DisputeType =
  | "Lease Default"
  | "CAM Dispute"
  | "Construction Defect"
  | "HOA"
  | "Property Damage"
  | "Neighbor/Boundary";

export type Dispute = {
  id: string;
  title: string;
  propertyName: string;
  city: string;
  state: string;
  disputeType: DisputeType;
  stage: DisputeStage;
  insuranceInvolved: boolean;
  lastActivityAt: string; // ISO
  risk: RiskBand;

  // Predictions (current)
  settle90dProb: number; // 0..1
  settleP10: number; // $
  settleP90: number; // $
  settleMid: number; // $
  monthsMid: number;
  monthsP10: number;
  monthsP90: number;

  // Optional: economic anchors
  demand?: number;
  offer?: number;
  authorityLimit?: number;
};

export type DisputeEvent = {
  id: string;
  disputeId: string;
  ts: string; // ISO
  type:
    | "Demand Made"
    | "Offer Made"
    | "Mediation Scheduled"
    | "Motion Filed"
    | "Doc Received"
    | "Note";
  note?: string;
  amount?: number;
};
