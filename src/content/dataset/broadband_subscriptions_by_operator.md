---
title: "Fixed Data Subscriptions by Operator"
description: "Quarterly fixed (non-mobile) data subscriptions by operator"
source: "Communications Authority of Kenya"
endpoint: "GET /v1/datasets/broadband_subscriptions_by_operator"
rows: 108
category: "network"
sourceUrl: "https://ca.go.ke/statistics/"
lastUpdated: "2026-07-20T14:46:27"
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
<td data-label="Type">object</td>
<td data-label="Description">Fixed data service provider (operator)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">12</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Number of fixed data subscriptions</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">106</td>
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
<td data-label="Count">108</td>
<td data-label="Mean">2024.02</td>
<td data-label="Std">0.77</td>
<td data-label="Min">2023.00</td>
<td data-label="25%">2023.00</td>
<td data-label="50%">2024.00</td>
<td data-label="75%">2025.00</td>
<td data-label="Max">2025.00</td>
</tr>
<tr>
<td data-label="Column"><code>quarter</code></td>
<td data-label="Count">108</td>
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
<td data-label="Count">108</td>
<td data-label="Mean">175343.40</td>
<td data-label="Std">212018.86</td>
<td data-label="Min">5131.00</td>
<td data-label="25%">18775.25</td>
<td data-label="50%">67806.50</td>
<td data-label="75%">265327.75</td>
<td data-label="Max">941501.00</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **75.0%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=2023 | 48 | 31 | ! 64.6% |
| year=2024 | 48 | 44 | OK 91.7% |
| year=2025 | 48 | 33 | ! 68.8% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;entity&quot;: &quot;safaricom&quot;,
    &quot;value&quot;: 487924.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;entity&quot;: &quot;jamii telecommunications&quot;,
    &quot;value&quot;: 315819.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;entity&quot;: &quot;wananchi group&quot;,
    &quot;value&quot;: 261723.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;entity&quot;: &quot;poa internet&quot;,
    &quot;value&quot;: 169738.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;entity&quot;: &quot;mawingu networks&quot;,
    &quot;value&quot;: 26907.0
  }
]</code></pre>
