---
title: "Value of Imports from Africa"
description: "Monthly value of direct imports from selected African countries"
source: "Central Bank of Kenya"
endpoint: "GET /v1/datasets/imports_africa"
rows: 2371
category: "economy"
sourceUrl: "https://www.centralbank.go.ke/uploads/balance_of_payment_statistics/1764709360_Value%20of%20Direct%20Imports%20from%20Selected%20African%20Countries.csv"
lastUpdated: "2026-07-20T14:31:00"
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
<td data-label="Description">Calendar year</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">29</td>
</tr>
<tr>
<td data-label="Column"><code>month</code></td>
<td data-label="Type">object</td>
<td data-label="Description">Calendar month name</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">12</td>
</tr>
<tr>
<td data-label="Column"><code>item</code></td>
<td data-label="Type">object</td>
<td data-label="Description">Origin African country (e.g., uganda, tanzania, south africa, total)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">7</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Import value in KES millions</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">2346</td>
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
<td data-label="Count">2371</td>
<td data-label="Mean">2011.64</td>
<td data-label="Std">8.16</td>
<td data-label="Min">1998.00</td>
<td data-label="25%">2005.00</td>
<td data-label="50%">2012.00</td>
<td data-label="75%">2019.00</td>
<td data-label="Max">2026.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">2371</td>
<td data-label="Mean">1578.47</td>
<td data-label="Std">1859.32</td>
<td data-label="Min">0.00</td>
<td data-label="25%">128.18</td>
<td data-label="50%">764.12</td>
<td data-label="75%">2612.70</td>
<td data-label="Max">12130.15</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **97.3%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=1998 | 84 | 83 | OK 98.8% |
| year=1999 | 84 | 84 | OK 100.0% |
| year=2000 | 84 | 84 | OK 100.0% |
| year=2001 | 84 | 84 | OK 100.0% |
| year=2002 | 84 | 84 | OK 100.0% |
| year=2003 | 84 | 84 | OK 100.0% |
| year=2004 | 84 | 84 | OK 100.0% |
| year=2005 | 84 | 84 | OK 100.0% |
| year=2006 | 84 | 83 | OK 98.8% |
| year=2007 | 84 | 84 | OK 100.0% |
| year=2008 | 84 | 84 | OK 100.0% |
| year=2009 | 84 | 84 | OK 100.0% |
| year=2010 | 84 | 84 | OK 100.0% |
| year=2011 | 84 | 84 | OK 100.0% |
| year=2012 | 84 | 84 | OK 100.0% |
| year=2013 | 84 | 84 | OK 100.0% |
| year=2014 | 84 | 84 | OK 100.0% |
| year=2015 | 84 | 84 | OK 100.0% |
| year=2016 | 84 | 84 | OK 100.0% |
| year=2017 | 84 | 84 | OK 100.0% |
| year=2018 | 84 | 84 | OK 100.0% |
| year=2019 | 84 | 84 | OK 100.0% |
| year=2020 | 84 | 84 | OK 100.0% |
| year=2021 | 84 | 84 | OK 100.0% |
| year=2022 | 84 | 84 | OK 100.0% |
| year=2023 | 84 | 84 | OK 100.0% |
| year=2024 | 84 | 84 | OK 100.0% |
| year=2025 | 84 | 84 | OK 100.0% |
| year=2026 | 84 | 21 | ! 25.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;january&quot;,
    &quot;item&quot;: &quot;uganda&quot;,
    &quot;value&quot;: 2.06
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;january&quot;,
    &quot;item&quot;: &quot;tanzania&quot;,
    &quot;value&quot;: 38.63
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;january&quot;,
    &quot;item&quot;: &quot;zambia&quot;,
    &quot;value&quot;: 12.86
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;january&quot;,
    &quot;item&quot;: &quot;egypt&quot;,
    &quot;value&quot;: 15.98
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;january&quot;,
    &quot;item&quot;: &quot;south africa&quot;,
    &quot;value&quot;: 1229.24
  }
]</code></pre>
