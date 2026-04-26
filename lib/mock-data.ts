export type PipelineStage = {
  step: string;
  title: string;
  description: string;
};

export type ArchitectureNode = {
  layer: string;
  title: string;
  details: string[];
};

export type ModelSpecification = {
  name: string;
  role: string;
  strengths: string[];
  output: string;
};

export type EdenOutput = {
  id: string;
  title: string;
  summary: string;
  leadTime: string;
  confidence: string;
  region: string;
  status: "Stable" | "Watch" | "Critical";
};

export type ClimateDataset = {
  name: string;
  provider: string;
  description: string;
  cadence: string;
  coverage: string;
  format: string;
  credibility: "Very High" | "High";
  indicators: string[];
};

export type ImpactMetric = {
  label: string;
  value: string;
  description: string;
};

export type RegionalScale = {
  region: string;
  countries: number;
  institutions: number;
  status: "Live" | "Pilot" | "Expansion";
};

// Pipeline stages represent the core journey from raw climate signals to
// partner-facing decisions in Eden.
export const pipelineStages: PipelineStage[] = [
  {
    step: "01",
    title: "Data Ingestion",
    description:
      "Connectors ingest CHIRPS rainfall, NASA climate drivers, and FAO agricultural baselines with time-stamped provenance.",
  },
  {
    step: "02",
    title: "Data Processing",
    description:
      "Spatial harmonization, gap filling, and feature engineering normalize multi-source signals for district-level modeling.",
  },
  {
    step: "03",
    title: "AI Modeling",
    description:
      "LSTM, Random Forest, and XGBoost pipelines generate forecasts with uncertainty estimates and cross-model calibration.",
  },
  {
    step: "04",
    title: "Decision Intelligence",
    description:
      "Policy-aware rules convert model outputs into planting windows, yield alerts, and climate risk advisories.",
  },
];

export const architectureFlow: ArchitectureNode[] = [
  {
    layer: "LAYER 1",
    title: "Data Ingestion",
    details: [
      "CHIRPS precipitation feeds",
      "NASA POWER climate variables",
      "FAOSTAT crop and production baselines",
      "Sentinel-derived vegetation indicators",
    ],
  },
  {
    layer: "LAYER 2",
    title: "Data Processing Layer",
    details: [
      "Temporal alignment to dekadal intervals",
      "Outlier filtering and missing-value imputation",
      "Geospatial tiling at district resolution",
      "Feature store with reproducible snapshots",
    ],
  },
  {
    layer: "LAYER 3",
    title: "AI Models",
    details: [
      "LSTM for seasonal rainfall sequences",
      "Random Forest for nonlinear crop response",
      "XGBoost for calibrated risk classification",
      "Ensemble weighting by validation performance",
    ],
  },
  {
    layer: "LAYER 4",
    title: "Decision Intelligence Engine",
    details: [
      "Rule engine for advisory thresholds",
      "Confidence-aware recommendations",
      "Automated alert prioritization",
      "Partner-ready API and reporting output",
    ],
  },
];

export const modelSpecifications: ModelSpecification[] = [
  {
    name: "LSTM",
    role: "Captures temporal rainfall dynamics and delayed climate effects.",
    strengths: [
      "Robust across multi-season sequence data",
      "Effective for planting-window timing",
      "Handles trend shifts when retrained on recent seasons",
    ],
    output: "Planting window probability bands",
  },
  {
    name: "Random Forest",
    role: "Models nonlinear interactions between weather, soil, and crop signals.",
    strengths: [
      "Interpretable feature importance by district",
      "Stable performance in data-sparse contexts",
      "Strong baseline for yield band prediction",
    ],
    output: "District-level yield class estimates",
  },
  {
    name: "XGBoost",
    role: "Delivers calibrated risk scoring for drought and extreme-weather alerts.",
    strengths: [
      "High precision in binary and multi-class risk tasks",
      "Fast retraining for new data cycles",
      "Supports SHAP-based explanation workflows",
    ],
    output: "Climate risk alert severity scores",
  },
];

// Example outputs are mock objects demonstrating the format of Eden advisories.
export const climateOutputs: EdenOutput[] = [
  {
    id: "rw-maize-window",
    title: "Planting Window | Northern Rwanda",
    summary:
      "Primary maize planting window is projected between May 12 and May 23, driven by sustained rainfall onset and favorable soil moisture trajectories.",
    leadTime: "14-day lead time",
    confidence: "92% confidence",
    region: "Rwanda - Northern Province",
    status: "Stable",
  },
  {
    id: "ke-yield-forecast",
    title: "Yield Projection | Eastern Kenya",
    summary:
      "Current season model predicts +11% sorghum yield potential versus five-year baseline when advised planting sequence is followed.",
    leadTime: "30-day forecast horizon",
    confidence: "88% confidence",
    region: "Kenya - Eastern counties",
    status: "Watch",
  },
  {
    id: "gh-flood-risk",
    title: "Climate Risk Alert | Coastal Ghana",
    summary:
      "Elevated flood susceptibility detected from high-intensity precipitation clusters and saturated soil conditions in downstream zones.",
    leadTime: "7-day risk lead",
    confidence: "90% confidence",
    region: "Ghana - Coastal districts",
    status: "Critical",
  },
];

export const dataSources: ClimateDataset[] = [
  {
    name: "CHIRPS v2.0",
    provider: "Climate Hazards Center, UC Santa Barbara",
    description:
      "Satellite-gauge blended precipitation observations used for rainfall trend and anomaly analysis.",
    cadence: "Daily and dekadal updates",
    coverage: "50N-50S, 1981-present",
    format: "NetCDF / GeoTIFF",
    credibility: "Very High",
    indicators: [
      "Peer-reviewed methodology and validation",
      "Widely adopted by humanitarian and research institutions",
      "Long operational archive suitable for climate baselines",
    ],
  },
  {
    name: "NASA POWER",
    provider: "NASA Langley Research Center",
    description:
      "Global meteorological and solar radiation variables used for evapotranspiration and stress modeling.",
    cadence: "Near-real-time daily",
    coverage: "Global coverage",
    format: "API / JSON",
    credibility: "High",
    indicators: [
      "Maintained by NASA scientific infrastructure",
      "Standardized access through stable API endpoints",
      "Used in climate and energy modeling workflows",
    ],
  },
  {
    name: "FAOSTAT and FAO Agro-informatics",
    provider: "Food and Agriculture Organization",
    description:
      "Crop production baselines, agroeconomic variables, and national statistics for model calibration and benchmarking.",
    cadence: "Annual and periodic releases",
    coverage: "Country and regional",
    format: "CSV / API",
    credibility: "Very High",
    indicators: [
      "Institutional standard for agricultural statistics",
      "Longitudinal historical data for trend evaluation",
      "Compatible with country-level policy reporting",
    ],
  },
  {
    name: "Sentinel-2 Vegetation Index Layer",
    provider: "Copernicus Open Access",
    description:
      "Optical satellite imagery transformed into vegetation health indicators to improve crop stress detection.",
    cadence: "5-day revisit frequency",
    coverage: "Continental, parcel to district scale",
    format: "SAFE / Cloud-optimized GeoTIFF",
    credibility: "High",
    indicators: [
      "European Space Agency mission with open access",
      "High-resolution spatial detail for agricultural monitoring",
      "Consistent spectral bands for vegetation analytics",
    ],
  },
];

export const impactMetrics: ImpactMetric[] = [
  {
    label: "Farmers reached through institutional channels",
    value: "1.8M+",
    description:
      "Advisories are distributed through partner ministries, extension networks, and NGO field programs.",
  },
  {
    label: "Improvement in planting-window precision",
    value: "+27%",
    description:
      "Compared with rule-of-thumb planning, Eden recommendations improve timing accuracy in pilot districts.",
  },
  {
    label: "Country-level scalability footprint",
    value: "22",
    description:
      "Eden output templates are localized for diverse agroecological zones across East, West, North, and Southern Africa.",
  },
];

export const regionalScale: RegionalScale[] = [
  { region: "North Africa", countries: 4, institutions: 9, status: "Pilot" },
  { region: "West Africa", countries: 7, institutions: 16, status: "Live" },
  { region: "East Africa", countries: 8, institutions: 18, status: "Live" },
  { region: "Southern Africa", countries: 3, institutions: 7, status: "Expansion" },
];

export const institutionalOutcomes: string[] = [
  "Reduced advisory turnaround time from weeks to days during planting season transitions.",
  "Shared forecasting language across ministries, NGOs, and research partners for coordinated response.",
  "Transparent confidence and provenance metadata to support grant and policy reporting requirements.",
];

// Science and API data
export type ResearchDataset = {
  name: string;
  description: string;
  scope: string;
  size: string;
  access: string;
  releaseDate: string;
};

export type ResearchRelease = {
  title: string;
  date: string;
  version: string;
  highlights: string[];
  doi?: string;
};

export type APIEndpoint = {
  name: string;
  method: string;
  path: string;
  description: string;
  responseExample: string;
};

export const researchDatasets: ResearchDataset[] = [
  {
    name: "Eden Training Datasets v2.1",
    description:
      "Complete time-series crop outcomes, satellite observations, and associated climate drivers across 18 African countries.",
    scope: "2016-2024 | 45+ districts | 8,200+ farm seasons",
    size: "~12 GB (compressed NetCDF format)",
    access: "Open access via Zenodo (CC-BY-4.0)",
    releaseDate: "Q2 2024",
  },
  {
    name: "Eden Model Checkpoints",
    description:
      "Pre-trained LSTM, Random Forest, and XGBoost weights, feature engineering pipelines, and validation metrics.",
    scope: "LSTM trained on 2016-2023 data | RF tuned per agroecological zone | XGBoost ensemble",
    size: "~450 MB",
    access: "Open access via GitHub (Apache 2.0)",
    releaseDate: "Q1 2024",
  },
  {
    name: "Eden Validation Benchmarks",
    description:
      "Hold-out test datasets with ground truth yield and rainfall observations used to measure model performance.",
    scope: "2023-2024 | 12 pilot sites | 1,200+ observations",
    size: "~80 MB",
    access: "Open access via Zenodo",
    releaseDate: "Q3 2024",
  },
];

export const researchReleases: ResearchRelease[] = [
  {
    title: "Eden Model Architecture & Performance Report",
    date: "March 2024",
    version: "v2.0",
    highlights: [
      "Technical deep-dive on model ensemble design and cross-validation",
      "Comparison of LSTM vs. tree-based methods across data regimes",
      "Feature importance analysis and recommendation logic",
    ],
    doi: "10.5281/zenodo.xxxx",
  },
  {
    title: "Training Data Curation and Climate Preprocessing",
    date: "February 2024",
    version: "v1.5",
    highlights: [
      "Methodology for harmonizing multi-source climate datasets",
      "Outlier detection and gap-filling procedures",
      "Reproducible feature engineering pipeline",
    ],
  },
  {
    title: "Eden Beta Release and Pilot Results",
    date: "December 2023",
    version: "v1.0",
    highlights: [
      "Initial deployment across Rwanda and Kenya",
      "Performance metrics and farmer feedback",
      "Roadmap for regional expansion",
    ],
  },
];

export const apiEndpoints: APIEndpoint[] = [
  {
    name: "Get Planting Window",
    method: "GET",
    path: "/api/v1/forecast/planting-window",
    description:
      "Retrieve AI-generated planting window recommendations for a specified region and crop type.",
    responseExample:
      '{"region":"Nakuru","crop":"maize","windowStart":"2024-05-12","windowEnd":"2024-05-23","confidence":0.92}',
  },
  {
    name: "Get Yield Forecast",
    method: "GET",
    path: "/api/v1/forecast/yield-projection",
    description:
      "Retrieve seasonal yield projections compared to historical baselines with uncertainty bands.",
    responseExample:
      '{"region":"Eastern Kenya","crop":"sorghum","projectedYield":"2.1 t/ha","baseline":"1.9 t/ha","confidence":0.88}',
  },
  {
    name: "Get Climate Risk Alert",
    method: "GET",
    path: "/api/v1/alert/climate-risk",
    description:
      "Retrieve climate risk assessments (drought, flood, heat stress) with lead times and severity scores.",
    responseExample:
      '{"region":"Coastal Ghana","riskType":"flood","severity":0.78,"leadTime":"7-day","actionRequired":true}',
  },
  {
    name: "List Available Regions",
    method: "GET",
    path: "/api/v1/regions",
    description:
      "Get list of all regions and countries where Eden forecasts are available.",
    responseExample:
      '{"regions":["East Africa","West Africa","North Africa","Southern Africa"],"countries":22}',
  },
];
