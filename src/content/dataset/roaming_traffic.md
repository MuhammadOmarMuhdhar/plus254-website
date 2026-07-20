---
title: "Outbound Roaming Traffic"
description: "Outbound roaming traffic, by country and type of traffic (voice, sms, data)"
source: "Communications Authority of Kenya"
endpoint: "GET /v1/datasets/roaming_traffic"
rows: 350
category: "network"
sourceUrl: "https://ca.go.ke/statistics/"
lastUpdated: "2026-07-20T14:48:33"
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
<td data-label="Column"><code>country</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Country of outbound roaming traffic</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">7</td>
</tr>
<tr>
<td data-label="Column"><code>metric</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Type of mobile traffic (voice, sms)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">3</td>
</tr>
<tr>
<td data-label="Column"><code>item</code></td>
<td data-label="Type">str</td>
<td data-label="Description">inbound/ outbound</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">3</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">(minutes for voice, number of messages for sms, MB for data)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">334</td>
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
<td data-label="Count">350</td>
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
<td data-label="Count">350</td>
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
<td data-label="Count">350</td>
<td data-label="Mean">1.074e+07</td>
<td data-label="Std">2.53e+07</td>
<td data-label="Min">0.00</td>
<td data-label="25%">84009.25</td>
<td data-label="50%">1.007e+06</td>
<td data-label="75%">5.364e+06</td>
<td data-label="Max">1.422e+08</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **83.3%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=2023 | 84 | 63 | ! 75.0% |
| year=2024 | 84 | 84 | OK 100.0% |
| year=2025 | 84 | 63 | ! 75.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;country&quot;: &quot;uganda&quot;,
    &quot;metric&quot;: &quot;voice&quot;,
    &quot;item&quot;: &quot;incoming&quot;,
    &quot;value&quot;: 130525722.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;country&quot;: &quot;tanzania&quot;,
    &quot;metric&quot;: &quot;voice&quot;,
    &quot;item&quot;: &quot;incoming&quot;,
    &quot;value&quot;: 12135523.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;country&quot;: &quot;rwanda&quot;,
    &quot;metric&quot;: &quot;voice&quot;,
    &quot;item&quot;: &quot;incoming&quot;,
    &quot;value&quot;: 3503338.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;country&quot;: &quot;burundi&quot;,
    &quot;metric&quot;: &quot;voice&quot;,
    &quot;item&quot;: &quot;incoming&quot;,
    &quot;value&quot;: 5133.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;country&quot;: &quot;south sudan&quot;,
    &quot;metric&quot;: &quot;voice&quot;,
    &quot;item&quot;: &quot;incoming&quot;,
    &quot;value&quot;: 5086388.0
  }
]</code></pre>
