---
title: ".ke Domain Registrations"
description: "Quarterly .ke domain registrations"
source: "Communications Authority of Kenya"
endpoint: "GET /v1/datasets/ke_domain_registrations"
rows: 100
category: "network"
sourceUrl: "https://ca.go.ke/statistics/"
lastUpdated: "2026-07-20T14:47:42"
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
<td data-label="Column"><code>item</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Type of .ke domain registration</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">10</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Number of domain registrations</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">93</td>
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
<td data-label="Count">100</td>
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
<td data-label="Count">100</td>
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
<td data-label="Count">100</td>
<td data-label="Mean">11148.36</td>
<td data-label="Std">28902.62</td>
<td data-label="Min">22.00</td>
<td data-label="25%">180.75</td>
<td data-label="50%">1005.50</td>
<td data-label="75%">2457.00</td>
<td data-label="Max">110687.00</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **83.3%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=2023 | 40 | 30 | ! 75.0% |
| year=2024 | 40 | 40 | OK 100.0% |
| year=2025 | 40 | 30 | ! 75.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;item&quot;: &quot;co.ke&quot;,
    &quot;value&quot;: 89883.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;item&quot;: &quot;me.ke&quot;,
    &quot;value&quot;: 5874.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;item&quot;: &quot;.ke&quot;,
    &quot;value&quot;: 5192.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;item&quot;: &quot;or.ke&quot;,
    &quot;value&quot;: 1963.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;item&quot;: &quot;ac.ke&quot;,
    &quot;value&quot;: 1134.0
  }
]</code></pre>
