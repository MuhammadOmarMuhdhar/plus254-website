---
title: "Minutes of Use per Call per Operator"
description: "Average minutes of use per call, by operator"
source: "Communications Authority of Kenya"
endpoint: "GET /v1/datasets/minutes_of_use_by_operator"
rows: 90
category: "network"
sourceUrl: "https://ca.go.ke/statistics/"
lastUpdated: "2026-07-20T14:47:55"
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
<td data-label="Column"><code>item</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Type of mobile traffic (onnet / offnet)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">2</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Average minutes of use per call</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">15</td>
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
<td data-label="Count">90</td>
<td data-label="Mean">2024.11</td>
<td data-label="Std">0.74</td>
<td data-label="Min">2023.00</td>
<td data-label="25%">2024.00</td>
<td data-label="50%">2024.00</td>
<td data-label="75%">2025.00</td>
<td data-label="Max">2025.00</td>
</tr>
<tr>
<td data-label="Column"><code>quarter</code></td>
<td data-label="Count">90</td>
<td data-label="Mean">2.56</td>
<td data-label="Std">1.07</td>
<td data-label="Min">1.00</td>
<td data-label="25%">2.00</td>
<td data-label="50%">3.00</td>
<td data-label="75%">3.00</td>
<td data-label="Max">4.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">90</td>
<td data-label="Mean">1.54</td>
<td data-label="Std">0.64</td>
<td data-label="Min">0.10</td>
<td data-label="25%">1.20</td>
<td data-label="50%">1.40</td>
<td data-label="75%">1.60</td>
<td data-label="Max">3.10</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **75.0%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=2023 | 40 | 20 | ! 50.0% |
| year=2024 | 40 | 40 | OK 100.0% |
| year=2025 | 40 | 30 | ! 75.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 3,
    &quot;entity&quot;: &quot;safaricom plc&quot;,
    &quot;item&quot;: &quot;on-net&quot;,
    &quot;value&quot;: 1.6
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 3,
    &quot;entity&quot;: &quot;airtel ltd&quot;,
    &quot;item&quot;: &quot;on-net&quot;,
    &quot;value&quot;: 2.9
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 3,
    &quot;entity&quot;: &quot;telkom ltd&quot;,
    &quot;item&quot;: &quot;on-net&quot;,
    &quot;value&quot;: 1.3
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 3,
    &quot;entity&quot;: &quot;finserve&quot;,
    &quot;item&quot;: &quot;on-net&quot;,
    &quot;value&quot;: 2.1
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 3,
    &quot;entity&quot;: &quot;jamii telecom ltd&quot;,
    &quot;item&quot;: &quot;on-net&quot;,
    &quot;value&quot;: 0.1
  }
]</code></pre>
