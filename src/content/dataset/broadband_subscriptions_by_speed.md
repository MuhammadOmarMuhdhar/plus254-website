---
title: "Broadband Subscriptions by Speed"
description: "Quarterly broadband subscriptions by speed"
source: "Communications Authority of Kenya"
endpoint: "GET /v1/datasets/broadband_subscriptions_by_speed"
rows: 490
category: "network"
sourceUrl: "https://ca.go.ke/statistics/"
lastUpdated: "2026-07-20T14:46:39"
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
<td data-label="Description">Fiscal year (e.g., 1999 means FY 1999/2000)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">3</td>
</tr>
<tr>
<td data-label="Column"><code>quarter</code></td>
<td data-label="Type">int64</td>
<td data-label="Description">Fiscal quarter</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">4</td>
</tr>
<tr>
<td data-label="Column"><code>metric</code></td>
<td data-label="Type">object</td>
<td data-label="Description">Broadband speed range/category</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">7</td>
</tr>
<tr>
<td data-label="Column"><code>item</code></td>
<td data-label="Type">object</td>
<td data-label="Description">Internet technology (cable, dsl etc)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">7</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Number of broadband subscriptions</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">284</td>
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
<td data-label="Count">490</td>
<td data-label="Mean">2024.00</td>
<td data-label="Std">0.78</td>
<td data-label="Min">2023.00</td>
<td data-label="25%">2023.00</td>
<td data-label="50%">2024.00</td>
<td data-label="75%">2025.00</td>
<td data-label="Max">2025.00</td>
</tr>
<tr>
<td data-label="Column"><code>quarter</code></td>
<td data-label="Count">490</td>
<td data-label="Mean">2.50</td>
<td data-label="Std">1.03</td>
<td data-label="Min">1.00</td>
<td data-label="25%">2.00</td>
<td data-label="50%">2.50</td>
<td data-label="75%">3.00</td>
<td data-label="Max">4.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">490</td>
<td data-label="Mean">38647.12</td>
<td data-label="Std">98759.20</td>
<td data-label="Min">0.00</td>
<td data-label="25%">0.00</td>
<td data-label="50%">151.50</td>
<td data-label="75%">17121.00</td>
<td data-label="Max">634994.00</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **83.3%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=2023 | 196 | 147 | ! 75.0% |
| year=2024 | 196 | 196 | OK 100.0% |
| year=2025 | 196 | 147 | ! 75.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;metric&quot;: &quot;&lt; 256 kbps&quot;,
    &quot;item&quot;: &quot;cable&quot;,
    &quot;value&quot;: 0.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;metric&quot;: &quot;&lt; 256 kbps&quot;,
    &quot;item&quot;: &quot;dsl (copper)&quot;,
    &quot;value&quot;: 5.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;metric&quot;: &quot;&lt; 256 kbps&quot;,
    &quot;item&quot;: &quot;ftth&quot;,
    &quot;value&quot;: 0.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;metric&quot;: &quot;&lt; 256 kbps&quot;,
    &quot;item&quot;: &quot;ftto&quot;,
    &quot;value&quot;: 0.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;metric&quot;: &quot;&lt; 256 kbps&quot;,
    &quot;item&quot;: &quot;fixed wireless&quot;,
    &quot;value&quot;: 10025.0
  }
]</code></pre>
