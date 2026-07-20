---
title: "International Mobile Traffic"
description: "Incoming and outgoing International mobile voice minutes"
source: "Communications Authority of Kenya"
endpoint: "GET /v1/datasets/international_mobile_traffic"
rows: 40
category: "network"
sourceUrl: "https://ca.go.ke/statistics/"
lastUpdated: "2026-07-20T14:47:17"
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
<td data-label="Column"><code>region</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Region of international mobile traffic (eac / rest of world)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">2</td>
</tr>
<tr>
<td data-label="Column"><code>item</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Type of international mobile traffic (incoming / outgoing)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">2</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Volume of international mobile traffic in minutes</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">40</td>
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
<td data-label="Count">40</td>
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
<td data-label="Count">40</td>
<td data-label="Mean">2.50</td>
<td data-label="Std">1.04</td>
<td data-label="Min">1.00</td>
<td data-label="25%">2.00</td>
<td data-label="50%">2.50</td>
<td data-label="75%">3.00</td>
<td data-label="Max">4.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">40</td>
<td data-label="Mean">8.313e+07</td>
<td data-label="Std">4.194e+07</td>
<td data-label="Min">2.001e+07</td>
<td data-label="25%">4.85e+07</td>
<td data-label="50%">7.184e+07</td>
<td data-label="75%">1.162e+08</td>
<td data-label="Max">1.793e+08</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **83.3%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=2023 | 8 | 6 | ! 75.0% |
| year=2024 | 8 | 8 | OK 100.0% |
| year=2025 | 8 | 6 | ! 75.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;region&quot;: &quot;eac&quot;,
    &quot;item&quot;: &quot;incoming&quot;,
    &quot;value&quot;: 71579076.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;region&quot;: &quot;others&quot;,
    &quot;item&quot;: &quot;incoming&quot;,
    &quot;value&quot;: 20010363.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;region&quot;: &quot;eac&quot;,
    &quot;item&quot;: &quot;outgoing&quot;,
    &quot;value&quot;: 112885463.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;region&quot;: &quot;others&quot;,
    &quot;item&quot;: &quot;outgoing&quot;,
    &quot;value&quot;: 68860574.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 3,
    &quot;region&quot;: &quot;eac&quot;,
    &quot;item&quot;: &quot;incoming&quot;,
    &quot;value&quot;: 86651182.0
  }
]</code></pre>
