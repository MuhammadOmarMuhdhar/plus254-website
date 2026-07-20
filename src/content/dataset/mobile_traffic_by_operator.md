---
title: "Domestic Mobile Traffic by Operator"
description: "Domestic mobile traffic, by operator, type of traffic"
source: "Communications Authority of Kenya"
endpoint: "GET /v1/datasets/mobile_traffic_by_operator"
rows: 200
category: "network"
sourceUrl: "https://ca.go.ke/statistics/"
lastUpdated: "2026-07-20T14:48:08"
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
<td data-label="Column"><code>entity</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Mobile service provider (operator)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">5</td>
</tr>
<tr>
<td data-label="Column"><code>metric</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Type of mobile traffic (voice, sms)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">2</td>
</tr>
<tr>
<td data-label="Column"><code>item</code></td>
<td data-label="Type">str</td>
<td data-label="Description">on net / offnet</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">2</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Volume of mobile traffic (minutes for voice, number of messages for sms)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">184</td>
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
<td data-label="Count">200</td>
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
<td data-label="Count">200</td>
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
<td data-label="Count">200</td>
<td data-label="Mean">2.102e+09</td>
<td data-label="Std">4.411e+09</td>
<td data-label="Min">39193.00</td>
<td data-label="25%">1.258e+06</td>
<td data-label="50%">1.746e+07</td>
<td data-label="75%">9.863e+08</td>
<td data-label="Max">1.942e+10</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **83.3%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=2023 | 80 | 60 | ! 75.0% |
| year=2024 | 80 | 80 | OK 100.0% |
| year=2025 | 80 | 60 | ! 75.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;entity&quot;: &quot;safaricom&quot;,
    &quot;metric&quot;: &quot;voice&quot;,
    &quot;item&quot;: &quot;on-net&quot;,
    &quot;value&quot;: 13865262217.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;entity&quot;: &quot;safaricom&quot;,
    &quot;metric&quot;: &quot;voice&quot;,
    &quot;item&quot;: &quot;off-net&quot;,
    &quot;value&quot;: 1058172164.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;entity&quot;: &quot;safaricom&quot;,
    &quot;metric&quot;: &quot;sms&quot;,
    &quot;item&quot;: &quot;on-net&quot;,
    &quot;value&quot;: 11701763252.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;entity&quot;: &quot;safaricom&quot;,
    &quot;metric&quot;: &quot;sms&quot;,
    &quot;item&quot;: &quot;off-net&quot;,
    &quot;value&quot;: 916281935.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;entity&quot;: &quot;airtel&quot;,
    &quot;metric&quot;: &quot;voice&quot;,
    &quot;item&quot;: &quot;on-net&quot;,
    &quot;value&quot;: 6295165969.0
  }
]</code></pre>
