---
title: "Government Revenue"
description: "Monthly government revenue breakdown"
source: "Central Bank of Kenya"
endpoint: "GET /v1/datasets/fiscal_revenue"
rows: 1700
category: "economy"
sourceUrl: "https://www.centralbank.go.ke/uploads/government_finance_statistics/2118703754_Revenue%20and%20Expenditure.csv"
lastUpdated: "2026-07-20T14:29:18"
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
<td data-label="Description">Revenue category (e.g., import duty, excise duty, income tax, vat, total revenue)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">5</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Revenue in KES millions (comma-formatted number)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">1698</td>
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
<td data-label="Count">1700</td>
<td data-label="Mean">2013.29</td>
<td data-label="Std">7.57</td>
<td data-label="Min">1999.00</td>
<td data-label="25%">2007.00</td>
<td data-label="50%">2014.00</td>
<td data-label="75%">2020.00</td>
<td data-label="Max">2026.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">1700</td>
<td data-label="Mean">126548.06</td>
<td data-label="Std">169949.82</td>
<td data-label="Min">987.00</td>
<td data-label="25%">24112.12</td>
<td data-label="50%">56947.41</td>
<td data-label="75%">154516.69</td>
<td data-label="Max">1.147e+06</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **93.2%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=1999 | 60 | 10 | ! 16.7% |
| year=2000 | 60 | 40 | ! 66.7% |
| year=2001 | 60 | 60 | OK 100.0% |
| year=2002 | 60 | 60 | OK 100.0% |
| year=2003 | 60 | 60 | OK 100.0% |
| year=2004 | 60 | 60 | OK 100.0% |
| year=2005 | 60 | 60 | OK 100.0% |
| year=2006 | 60 | 60 | OK 100.0% |
| year=2007 | 60 | 60 | OK 100.0% |
| year=2008 | 60 | 60 | OK 100.0% |
| year=2009 | 60 | 60 | OK 100.0% |
| year=2010 | 60 | 60 | OK 100.0% |
| year=2011 | 60 | 60 | OK 100.0% |
| year=2012 | 60 | 60 | OK 100.0% |
| year=2013 | 60 | 60 | OK 100.0% |
| year=2014 | 60 | 60 | OK 100.0% |
| year=2015 | 60 | 60 | OK 100.0% |
| year=2016 | 60 | 60 | OK 100.0% |
| year=2017 | 60 | 60 | OK 100.0% |
| year=2018 | 60 | 60 | OK 100.0% |
| year=2019 | 60 | 60 | OK 100.0% |
| year=2020 | 60 | 60 | OK 100.0% |
| year=2021 | 60 | 60 | OK 100.0% |
| year=2022 | 60 | 60 | OK 100.0% |
| year=2023 | 60 | 60 | OK 100.0% |
| year=2024 | 60 | 60 | OK 100.0% |
| year=2025 | 60 | 60 | OK 100.0% |
| year=2026 | 60 | 15 | ! 25.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;september&quot;,
    &quot;item&quot;: &quot;import duty&quot;,
    &quot;value&quot;: 7157.0
  },
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;september&quot;,
    &quot;item&quot;: &quot;excise duty&quot;,
    &quot;value&quot;: 6869.0
  },
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;september&quot;,
    &quot;item&quot;: &quot;income tax&quot;,
    &quot;value&quot;: 12054.0
  },
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;september&quot;,
    &quot;item&quot;: &quot;vat&quot;,
    &quot;value&quot;: 9255.0
  },
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;september&quot;,
    &quot;item&quot;: &quot;other tax&quot;,
    &quot;value&quot;: 12919.0
  }
]</code></pre>
