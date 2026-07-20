---
title: "Internet Subscriptions by Technology"
description: "Quarterly internet subscriptions by technology (fixed and mobile)"
source: "Communications Authority of Kenya"
endpoint: "GET /v1/datasets/internet_subscriptions_by_technology"
rows: 48
category: "network"
sourceUrl: "https://ca.go.ke/statistics/"
lastUpdated: "2026-07-20T14:47:29"
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
<td data-label="Description">Internet technology (cable, dsl etc)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">6</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Number of internet subscriptions</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">42</td>
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
<td data-label="Count">48</td>
<td data-label="Mean">2024.25</td>
<td data-label="Std">0.67</td>
<td data-label="Min">2023.00</td>
<td data-label="25%">2024.00</td>
<td data-label="50%">2024.00</td>
<td data-label="75%">2025.00</td>
<td data-label="Max">2025.00</td>
</tr>
<tr>
<td data-label="Column"><code>quarter</code></td>
<td data-label="Count">48</td>
<td data-label="Mean">2.50</td>
<td data-label="Std">1.13</td>
<td data-label="Min">1.00</td>
<td data-label="25%">1.75</td>
<td data-label="50%">2.50</td>
<td data-label="75%">3.25</td>
<td data-label="Max">4.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">48</td>
<td data-label="Mean">337650.54</td>
<td data-label="Std">456190.56</td>
<td data-label="Min">31.00</td>
<td data-label="25%">2098.00</td>
<td data-label="50%">106814.50</td>
<td data-label="75%">558543.00</td>
<td data-label="Max">1.474e+06</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **66.7%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=2023 | 24 | 6 | ! 25.0% |
| year=2024 | 24 | 24 | OK 100.0% |
| year=2025 | 24 | 18 | ! 75.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 4,
    &quot;item&quot;: &quot;terrestrial wireless&quot;,
    &quot;value&quot;: 356721.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 4,
    &quot;item&quot;: &quot;satellite&quot;,
    &quot;value&quot;: 8324.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 4,
    &quot;item&quot;: &quot;dsl (copper)&quot;,
    &quot;value&quot;: 137.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 4,
    &quot;item&quot;: &quot;fibre&quot;,
    &quot;value&quot;: 939553.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 4,
    &quot;item&quot;: &quot;cable&quot;,
    &quot;value&quot;: 195319.0
  }
]</code></pre>
