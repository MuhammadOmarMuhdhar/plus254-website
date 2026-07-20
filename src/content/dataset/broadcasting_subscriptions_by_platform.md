---
title: "Broadcasting Subscriptions by Platform"
description: "Quarterly broadcasting subscriptions by platform"
source: "Communications Authority of Kenya"
endpoint: "GET /v1/datasets/broadcasting_subscriptions_by_platform"
rows: 111
category: "network"
sourceUrl: "https://ca.go.ke/statistics/"
lastUpdated: "2026-07-20T14:46:51"
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
<td data-label="Column"><code>operator</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Broadcasting service provider (operator)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">10</td>
</tr>
<tr>
<td data-label="Column"><code>item</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Broadcasting platform (dth, cable)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">3</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Number of broadcasting subscriptions</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">95</td>
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
<td data-label="Count">111</td>
<td data-label="Mean">2023.99</td>
<td data-label="Std">0.78</td>
<td data-label="Min">2023.00</td>
<td data-label="25%">2023.00</td>
<td data-label="50%">2024.00</td>
<td data-label="75%">2025.00</td>
<td data-label="Max">2025.00</td>
</tr>
<tr>
<td data-label="Column"><code>quarter</code></td>
<td data-label="Count">111</td>
<td data-label="Mean">2.51</td>
<td data-label="Std">1.03</td>
<td data-label="Min">1.00</td>
<td data-label="25%">2.00</td>
<td data-label="50%">3.00</td>
<td data-label="75%">3.00</td>
<td data-label="Max">4.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">111</td>
<td data-label="Mean">397720.23</td>
<td data-label="Std">729180.93</td>
<td data-label="Min">0.00</td>
<td data-label="25%">1306.00</td>
<td data-label="50%">69674.00</td>
<td data-label="75%">309565.00</td>
<td data-label="Max">2.835e+06</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **75.8%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=2023 | 40 | 28 | ! 70.0% |
| year=2024 | 40 | 36 | OK 90.0% |
| year=2025 | 40 | 27 | ! 67.5% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;operator&quot;: &quot;go tv&quot;,
    &quot;item&quot;: &quot;dtt&quot;,
    &quot;value&quot;: 2746512.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;operator&quot;: &quot;star times&quot;,
    &quot;item&quot;: &quot;dtt&quot;,
    &quot;value&quot;: 1741365.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;operator&quot;: &quot;azam&quot;,
    &quot;item&quot;: &quot;dth&quot;,
    &quot;value&quot;: 76714.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;operator&quot;: &quot;multichoice (dstv)&quot;,
    &quot;item&quot;: &quot;dth&quot;,
    &quot;value&quot;: 1152998.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;operator&quot;: &quot;star times&quot;,
    &quot;item&quot;: &quot;dth&quot;,
    &quot;value&quot;: 304610.0
  }
]</code></pre>
