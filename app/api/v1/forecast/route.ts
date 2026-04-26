import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get("region") || "Nakuru";
  const forecastType = searchParams.get("type") || "planting-window";

  // Mock data responses based on forecast type
  const responses: Record<string, object> = {
    "planting-window": {
      region,
      crop: "maize",
      forecastDate: new Date().toISOString(),
      windowStart: "2024-05-12",
      windowEnd: "2024-05-23",
      leadTime: "14 days",
      confidence: 0.92,
      riskLevel: "low",
      recommendation:
        "Primary maize planting window is favorable. Sustained rainfall onset and optimal soil moisture conditions detected.",
      model: "LSTM ensemble",
      dataSourceCount: 7,
      lastUpdated: new Date().toISOString(),
    },
    "yield-projection": {
      region,
      crop: "sorghum",
      forecastDate: new Date().toISOString(),
      projectedYield: "2.1 t/ha",
      historicalBaseline: "1.9 t/ha",
      improvement: "+11%",
      confidence: 0.88,
      confidenceBand: {
        lower: 1.8,
        upper: 2.4,
      },
      leadTime: "30-day forecast horizon",
      conditions: "Favorable rainfall and temperature patterns in forecast period",
      model: "Random Forest with XGBoost calibration",
      dataSourceCount: 8,
      lastUpdated: new Date().toISOString(),
    },
    "climate-risk": {
      region,
      riskType: "drought",
      severity: 0.34,
      riskCategory: "moderate",
      leadTime: "14-day risk lead",
      probability: 0.41,
      confidence: 0.87,
      recommendation:
        "Monitor soil moisture through next dekad. Increase irrigation scheduling by 15% in vulnerable zones.",
      affectedCrops: ["maize", "sorghum"],
      recommendedActions: [
        "Increase water availability for critical growth stages",
        "Monitor rainfall patterns closely",
        "Prepare contingency cropping options",
      ],
      model: "XGBoost risk classifier",
      dataSourceCount: 9,
      lastUpdated: new Date().toISOString(),
    },
  };

  const response = responses[forecastType] || responses["planting-window"];

  return NextResponse.json({
    success: true,
    data: response,
    metadata: {
      apiVersion: "v1",
      endpoint: `/api/v1/forecast/${forecastType}`,
      responseTime: "125ms",
      cacheEnabled: true,
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  // Validate request body
  if (!body.region || !body.forecastType) {
    return NextResponse.json(
      {
        success: false,
        error: "Missing required fields: region, forecastType",
      },
      { status: 400 }
    );
  }

  // Simulate processing
  const mockResponses: Record<string, object> = {
    "planting-window": {
      region: body.region,
      crop: body.crop || "maize",
      status: "success",
      windowStart: "2024-05-12",
      windowEnd: "2024-05-23",
      confidence: 0.92,
    },
    "yield-projection": {
      region: body.region,
      crop: body.crop || "sorghum",
      status: "success",
      projectedYield: "2.1 t/ha",
      confidence: 0.88,
    },
    "climate-risk": {
      region: body.region,
      status: "success",
      riskType: "drought",
      severity: 0.34,
      confidence: 0.87,
    },
  };

  const prediction =
    mockResponses[body.forecastType] || mockResponses["planting-window"];

  return NextResponse.json({
    success: true,
    data: prediction,
    timestamp: new Date().toISOString(),
    requestId: `req_${Math.random().toString(36).substr(2, 9)}`,
  });
}
