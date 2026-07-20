---
title: "Postal and Courier Traffic"
description: "Quarterly postal and courier traffic"
source: "Communications Authority of Kenya"
endpoint: "GET /v1/datasets/postal_and_courier_traffic"
rows: 72
category: "network"
sourceUrl: "https://ca.go.ke/statistics/"
lastUpdated: "2026-07-20T14:48:21"
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
<td data-label="Unique">2</td>
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
<td data-label="Type">str</td>
<td data-label="Description">Postal and courier traffic type</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">3</td>
</tr>
<tr>
<td data-label="Column"><code>item</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Type of postal and courier traffic (letters, parcels, courier)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">2</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Volume of postal and courier traffic</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">60</td>
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
<td data-label="Count">72</td>
<td data-label="Mean">2024.42</td>
<td data-label="Std">0.50</td>
<td data-label="Min">2024.00</td>
<td data-label="25%">2024.00</td>
<td data-label="50%">2024.00</td>
<td data-label="75%">2025.00</td>
<td data-label="Max">2025.00</td>
</tr>
<tr>
<td data-label="Column"><code>quarter</code></td>
<td data-label="Count">72</td>
<td data-label="Mean">2.25</td>
<td data-label="Std">1.10</td>
<td data-label="Min">1.00</td>
<td data-label="25%">1.00</td>
<td data-label="50%">2.00</td>
<td data-label="75%">3.00</td>
<td data-label="Max">4.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">72</td>
<td data-label="Mean">482421.01</td>
<td data-label="Std">1.278e+06</td>
<td data-label="Min">4290.00</td>
<td data-label="25%">23052.50</td>
<td data-label="50%">108382.00</td>
<td data-label="75%">345227.25</td>
<td data-label="Max">9.117e+06</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **87.5%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=2024 | 24 | 24 | OK 100.0% |
| year=2025 | 24 | 18 | ! 75.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 2024,
    &quot;quarter&quot;: 1,
    &quot;metric&quot;: &quot;domestic&quot;,
    &quot;item&quot;: &quot;letters&quot;,
    &quot;value&quot;: 806045.0
  },
  {
    &quot;year&quot;: 2024,
    &quot;quarter&quot;: 1,
    &quot;metric&quot;: &quot;international outgoing&quot;,
    &quot;item&quot;: &quot;letters&quot;,
    &quot;value&quot;: 8593.0
  },
  {
    &quot;year&quot;: 2024,
    &quot;quarter&quot;: 1,
    &quot;metric&quot;: &quot;international incoming&quot;,
    &quot;item&quot;: &quot;letters&quot;,
    &quot;value&quot;: 426661.0
  },
  {
    &quot;year&quot;: 2024,
    &quot;quarter&quot;: 1,
    &quot;metric&quot;: &quot;domestic&quot;,
    &quot;item&quot;: &quot;parcels&quot;,
    &quot;value&quot;: 542325.0
  },
  {
    &quot;year&quot;: 2024,
    &quot;quarter&quot;: 1,
    &quot;metric&quot;: &quot;international outgoing&quot;,
    &quot;item&quot;: &quot;parcels&quot;,
    &quot;value&quot;: 4290.0
  }
]</code></pre>
