---
title: "Government Grants"
description: "Monthly government grants received"
source: "Central Bank of Kenya"
endpoint: "GET /v1/datasets/fiscal_grants"
rows: 580
category: "economy"
sourceUrl: "https://www.centralbank.go.ke/uploads/government_finance_statistics/2118703754_Revenue%20and%20Expenditure.csv"
lastUpdated: "2026-07-20T14:29:28"
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
<td data-label="Unique">28</td>
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
<td data-label="Description">Grant type (programme grants, project grants, total grants)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">2</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Grants in KES millions (comma-formatted number)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">320</td>
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
<td data-label="Count">580</td>
<td data-label="Mean">2012.60</td>
<td data-label="Std">7.83</td>
<td data-label="Min">1999.00</td>
<td data-label="25%">2006.00</td>
<td data-label="50%">2012.00</td>
<td data-label="75%">2020.00</td>
<td data-label="Max">2026.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">580</td>
<td data-label="Mean">5249.97</td>
<td data-label="Std">7614.49</td>
<td data-label="Min">0.00</td>
<td data-label="25%">0.00</td>
<td data-label="50%">1731.50</td>
<td data-label="75%">8170.55</td>
<td data-label="Max">76373.33</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **86.3%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=1999 | 24 | 4 | ! 16.7% |
| year=2000 | 24 | 16 | ! 66.7% |
| year=2001 | 24 | 24 | OK 100.0% |
| year=2002 | 24 | 24 | OK 100.0% |
| year=2003 | 24 | 24 | OK 100.0% |
| year=2004 | 24 | 24 | OK 100.0% |
| year=2005 | 24 | 24 | OK 100.0% |
| year=2006 | 24 | 24 | OK 100.0% |
| year=2007 | 24 | 24 | OK 100.0% |
| year=2008 | 24 | 24 | OK 100.0% |
| year=2009 | 24 | 24 | OK 100.0% |
| year=2010 | 24 | 24 | OK 100.0% |
| year=2011 | 24 | 24 | OK 100.0% |
| year=2012 | 24 | 19 | ! 79.2% |
| year=2013 | 24 | 12 | ! 50.0% |
| year=2014 | 24 | 12 | ! 50.0% |
| year=2015 | 24 | 13 | ! 54.2% |
| year=2016 | 24 | 18 | ! 75.0% |
| year=2017 | 24 | 24 | OK 100.0% |
| year=2018 | 24 | 24 | OK 100.0% |
| year=2019 | 24 | 24 | OK 100.0% |
| year=2020 | 24 | 24 | OK 100.0% |
| year=2021 | 24 | 24 | OK 100.0% |
| year=2022 | 24 | 24 | OK 100.0% |
| year=2023 | 24 | 24 | OK 100.0% |
| year=2024 | 24 | 24 | OK 100.0% |
| year=2025 | 24 | 24 | OK 100.0% |
| year=2026 | 24 | 6 | ! 25.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;september&quot;,
    &quot;item&quot;: &quot;programme grants&quot;,
    &quot;value&quot;: 6.0
  },
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;september&quot;,
    &quot;item&quot;: &quot;grants&quot;,
    &quot;value&quot;: 1197.0
  },
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;december&quot;,
    &quot;item&quot;: &quot;programme grants&quot;,
    &quot;value&quot;: 329.0
  },
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;december&quot;,
    &quot;item&quot;: &quot;grants&quot;,
    &quot;value&quot;: 2211.0
  },
  {
    &quot;year&quot;: 2000,
    &quot;month&quot;: &quot;march&quot;,
    &quot;item&quot;: &quot;programme grants&quot;,
    &quot;value&quot;: 344.0
  }
]</code></pre>
