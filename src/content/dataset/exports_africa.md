---
title: "Value of Exports to Africa"
description: "Monthly value of exports to selected African countries"
source: "Central Bank of Kenya"
endpoint: "GET /v1/datasets/exports_africa"
rows: 3728
category: "economy"
sourceUrl: "https://www.centralbank.go.ke/uploads/balance_of_payment_statistics/1216083243_Value%20of%20Exports%20to%20Selected%20Africa%20Countries.csv"
lastUpdated: "2026-07-20T14:28:36"
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
<td data-label="Type">str</td>
<td data-label="Description">Calendar month name</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">12</td>
</tr>
<tr>
<td data-label="Column"><code>item</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Destination African country (e.g., uganda, tanzania, egypt, total)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">11</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Export value in KES millions</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">3705</td>
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
<td data-label="Count">3728</td>
<td data-label="Mean">2011.63</td>
<td data-label="Std">8.16</td>
<td data-label="Min">1998.00</td>
<td data-label="25%">2005.00</td>
<td data-label="50%">2012.00</td>
<td data-label="75%">2019.00</td>
<td data-label="Max">2026.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">3728</td>
<td data-label="Mean">2210.84</td>
<td data-label="Std">5508.03</td>
<td data-label="Min">0.00</td>
<td data-label="25%">303.61</td>
<td data-label="50%">868.09</td>
<td data-label="75%">2061.14</td>
<td data-label="Max">90884.11</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **97.4%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=1998 | 132 | 132 | OK 100.0% |
| year=1999 | 132 | 132 | OK 100.0% |
| year=2000 | 132 | 132 | OK 100.0% |
| year=2001 | 132 | 132 | OK 100.0% |
| year=2002 | 132 | 132 | OK 100.0% |
| year=2003 | 132 | 132 | OK 100.0% |
| year=2004 | 132 | 132 | OK 100.0% |
| year=2005 | 132 | 132 | OK 100.0% |
| year=2006 | 132 | 132 | OK 100.0% |
| year=2007 | 132 | 131 | OK 99.2% |
| year=2008 | 132 | 132 | OK 100.0% |
| year=2009 | 132 | 132 | OK 100.0% |
| year=2010 | 132 | 132 | OK 100.0% |
| year=2011 | 132 | 132 | OK 100.0% |
| year=2012 | 132 | 132 | OK 100.0% |
| year=2013 | 132 | 132 | OK 100.0% |
| year=2014 | 132 | 132 | OK 100.0% |
| year=2015 | 132 | 132 | OK 100.0% |
| year=2016 | 132 | 132 | OK 100.0% |
| year=2017 | 132 | 132 | OK 100.0% |
| year=2018 | 132 | 132 | OK 100.0% |
| year=2019 | 132 | 132 | OK 100.0% |
| year=2020 | 132 | 132 | OK 100.0% |
| year=2021 | 132 | 132 | OK 100.0% |
| year=2022 | 132 | 132 | OK 100.0% |
| year=2023 | 132 | 132 | OK 100.0% |
| year=2024 | 132 | 132 | OK 100.0% |
| year=2025 | 132 | 132 | OK 100.0% |
| year=2026 | 132 | 33 | ! 25.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;january&quot;,
    &quot;item&quot;: &quot;uganda&quot;,
    &quot;value&quot;: 1386.42
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;january&quot;,
    &quot;item&quot;: &quot;tanzania&quot;,
    &quot;value&quot;: 1326.01
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;january&quot;,
    &quot;item&quot;: &quot;zambia&quot;,
    &quot;value&quot;: 11.69
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;january&quot;,
    &quot;item&quot;: &quot;egypt&quot;,
    &quot;value&quot;: 409.95
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;january&quot;,
    &quot;item&quot;: &quot;rwanda&quot;,
    &quot;value&quot;: 334.56
  }
]</code></pre>
