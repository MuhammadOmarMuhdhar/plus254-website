---
title: "County Gross County Product by Sector"
description: "Annual Gross County Product (GCP) estimates for each Kenyan county, broken down by economic sector, in KES millions."
source: "Kenya National Bureau of Statistics (KNBS)"
endpoint: "GET /v1/datasets/county_gcp_by_sector"
rows: 2679
category: "economy"
sourceUrl: "https://www.knbs.or.ke/"
lastUpdated: "2026-07-20T14:30:55"
---

## Columns

<table class="dataset-table">
<thead>
<tr><th>Column</th><th>Type</th><th>Description</th><th>Nullable</th><th>Null count</th><th>Unique</th></tr>
</thead>
<tbody>
<tr>
<td data-label="Column"><code>year</code></td>
<td data-label="Type">int64</td>
<td data-label="Description">Calendar year the estimate refers to</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">3</td>
</tr>
<tr>
<td data-label="Column"><code>county</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Name of the Kenyan county</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">47</td>
</tr>
<tr>
<td data-label="Column"><code>sector</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Economic sector or activity contributing to county output (e.g. agriculture, manufacturing, services)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">19</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Gross County Product (GCP) value for the given year, county, and sector, in KES millions</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">2461</td>
</tr>
</tbody>
</table>

## Summary Statistics

<table class="dataset-table">
<thead>
<tr><th>Column</th><th>Count</th><th>Mean</th><th>Std</th><th>Min</th><th>25%</th><th>50%</th><th>75%</th><th>Max</th></tr>
</thead>
<tbody>
<tr>
<td data-label="Column"><code>year</code></td>
<td data-label="Count">2679</td>
<td data-label="Mean">2023.00</td>
<td data-label="Std">0.82</td>
<td data-label="Min">2022.00</td>
<td data-label="25%">2022.00</td>
<td data-label="50%">2023.00</td>
<td data-label="75%">2024.00</td>
<td data-label="Max">2024.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">2679</td>
<td data-label="Mean">14776.09</td>
<td data-label="Std">51462.82</td>
<td data-label="Min">-223311.00</td>
<td data-label="25%">1275.00</td>
<td data-label="50%">3935.00</td>
<td data-label="75%">11814.50</td>
<td data-label="Max">977348.00</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **100.0%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=2022 | 893 | 893 | OK 100.0% |
| year=2023 | 893 | 893 | OK 100.0% |
| year=2024 | 893 | 893 | OK 100.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 2022,
    &quot;county&quot;: &quot;garissa&quot;,
    &quot;sector&quot;: &quot;adminsitrative services support&quot;,
    &quot;value&quot;: 537.0
  },
  {
    &quot;year&quot;: 2022,
    &quot;county&quot;: &quot;wajir&quot;,
    &quot;sector&quot;: &quot;adminsitrative services support&quot;,
    &quot;value&quot;: 294.0
  },
  {
    &quot;year&quot;: 2022,
    &quot;county&quot;: &quot;mandera&quot;,
    &quot;sector&quot;: &quot;adminsitrative services support&quot;,
    &quot;value&quot;: 385.0
  },
  {
    &quot;year&quot;: 2022,
    &quot;county&quot;: &quot;tharaka-nithi&quot;,
    &quot;sector&quot;: &quot;professional &amp; technical services&quot;,
    &quot;value&quot;: 1428.0
  },
  {
    &quot;year&quot;: 2022,
    &quot;county&quot;: &quot;embu&quot;,
    &quot;sector&quot;: &quot;professional &amp; technical services&quot;,
    &quot;value&quot;: 2315.0
  }
]</code></pre>
