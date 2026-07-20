---
title: "Tea Sold and Offered at the Mombasa Tea Auction"
description: "Weekly volume of tea offered for sale and tea actually sold at the Mombasa Tea Auction"
source: "Tea Board of Kenya"
endpoint: "GET /v1/datasets/mombasa_tea_auction"
rows: 48
category: "agriculture"
sourceUrl: "https://eatta.co.ke/statistics"
lastUpdated: "2026-07-20T14:31:59"
---

## Columns

<table class="dataset-table">
<thead>
<tr><th>Column</th><th>Type</th><th>Description</th><th>Nullable</th><th>Null count</th><th>Unique</th></tr>
</thead>
<tbody>
<tr>
<td data-label="Column"><code>date</code></td>
<td data-label="Type">datetime64[ns]</td>
<td data-label="Description">Auction date (ISO 8601)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">28</td>
</tr>
<tr>
<td data-label="Column"><code>metric</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Type of measurement — &quot;offered&quot; or &quot;sold&quot;</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">2</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Quantity of tea, in kilograms</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">48</td>
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
<td data-label="Column"><code>value</code></td>
<td data-label="Count">48</td>
<td data-label="Mean">1.025e+07</td>
<td data-label="Std">1.493e+06</td>
<td data-label="Min">7.526e+06</td>
<td data-label="25%">9.012e+06</td>
<td data-label="50%">9.793e+06</td>
<td data-label="75%">1.133e+07</td>
<td data-label="Max">1.314e+07</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **85.7%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| date=2026-01-01 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-01-08 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-01-15 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-02-12 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-02-19 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-02-26 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-03-05 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-03-12 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-03-19 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-03-26 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-04-02 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-04-09 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-04-16 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-04-23 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-04-30 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-05-07 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-05-14 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-05-21 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-05-28 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-07-09 00:00:00 | 2 | 2 | OK 100.0% |
| date=2026-01-22 00:00:00 | 2 | 1 | ! 50.0% |
| date=2026-01-29 00:00:00 | 2 | 1 | ! 50.0% |
| date=2026-02-05 00:00:00 | 2 | 1 | ! 50.0% |
| date=2026-06-04 00:00:00 | 2 | 1 | ! 50.0% |
| date=2026-06-11 00:00:00 | 2 | 1 | ! 50.0% |
| date=2026-06-18 00:00:00 | 2 | 1 | ! 50.0% |
| date=2026-06-25 00:00:00 | 2 | 1 | ! 50.0% |
| date=2026-07-02 00:00:00 | 2 | 1 | ! 50.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;date&quot;: &quot;2026-01-01 00:00:00&quot;,
    &quot;metric&quot;: &quot;sold&quot;,
    &quot;value&quot;: 8243508.0
  },
  {
    &quot;date&quot;: &quot;2026-01-08 00:00:00&quot;,
    &quot;metric&quot;: &quot;sold&quot;,
    &quot;value&quot;: 7525993.0
  },
  {
    &quot;date&quot;: &quot;2026-01-15 00:00:00&quot;,
    &quot;metric&quot;: &quot;sold&quot;,
    &quot;value&quot;: 8373615.0
  },
  {
    &quot;date&quot;: &quot;2026-02-12 00:00:00&quot;,
    &quot;metric&quot;: &quot;sold&quot;,
    &quot;value&quot;: 9752291.0
  },
  {
    &quot;date&quot;: &quot;2026-02-19 00:00:00&quot;,
    &quot;metric&quot;: &quot;sold&quot;,
    &quot;value&quot;: 9834259.0
  }
]</code></pre>
