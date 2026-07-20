---
title: "Government Expenditure"
description: "Monthly government expenditure breakdown"
source: "Central Bank of Kenya"
endpoint: "GET /v1/datasets/fiscal_expenditure"
rows: 939
category: "economy"
sourceUrl: "https://www.centralbank.go.ke/uploads/government_finance_statistics/2118703754_Revenue%20and%20Expenditure.csv"
lastUpdated: "2026-07-20T14:29:37"
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
<td data-label="Description">Expenditure category (e.g., domestic interest, wages salaries, development expenditure, total expenditure)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">3</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Expenditure in KES millions (comma-formatted number)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">924</td>
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
<td data-label="Count">939</td>
<td data-label="Mean">2012.70</td>
<td data-label="Std">7.55</td>
<td data-label="Min">1999.00</td>
<td data-label="25%">2006.00</td>
<td data-label="50%">2013.00</td>
<td data-label="75%">2019.00</td>
<td data-label="Max">2026.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">939</td>
<td data-label="Mean">67334.26</td>
<td data-label="Std">109208.02</td>
<td data-label="Min">0.00</td>
<td data-label="25%">5803.00</td>
<td data-label="50%">20300.00</td>
<td data-label="75%">75892.00</td>
<td data-label="Max">660000.90</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **93.2%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=1999 | 36 | 6 | ! 16.7% |
| year=2000 | 36 | 24 | ! 66.7% |
| year=2001 | 36 | 36 | OK 100.0% |
| year=2002 | 36 | 36 | OK 100.0% |
| year=2003 | 36 | 36 | OK 100.0% |
| year=2004 | 36 | 36 | OK 100.0% |
| year=2005 | 36 | 36 | OK 100.0% |
| year=2006 | 36 | 36 | OK 100.0% |
| year=2007 | 36 | 36 | OK 100.0% |
| year=2008 | 36 | 36 | OK 100.0% |
| year=2009 | 36 | 36 | OK 100.0% |
| year=2010 | 36 | 36 | OK 100.0% |
| year=2011 | 36 | 36 | OK 100.0% |
| year=2012 | 36 | 36 | OK 100.0% |
| year=2013 | 36 | 36 | OK 100.0% |
| year=2014 | 36 | 36 | OK 100.0% |
| year=2015 | 36 | 36 | OK 100.0% |
| year=2016 | 36 | 36 | OK 100.0% |
| year=2017 | 36 | 36 | OK 100.0% |
| year=2018 | 36 | 36 | OK 100.0% |
| year=2019 | 36 | 36 | OK 100.0% |
| year=2020 | 36 | 36 | OK 100.0% |
| year=2021 | 36 | 36 | OK 100.0% |
| year=2022 | 36 | 36 | OK 100.0% |
| year=2023 | 36 | 36 | OK 100.0% |
| year=2024 | 36 | 36 | OK 100.0% |
| year=2025 | 36 | 36 | OK 100.0% |
| year=2026 | 36 | 9 | ! 25.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;september&quot;,
    &quot;item&quot;: &quot;foreign interest&quot;,
    &quot;value&quot;: 3068.0
  },
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;september&quot;,
    &quot;item&quot;: &quot;pensions&quot;,
    &quot;value&quot;: 1387.0
  },
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;september&quot;,
    &quot;item&quot;: &quot;development expenditure&quot;,
    &quot;value&quot;: 6539.0
  },
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;december&quot;,
    &quot;item&quot;: &quot;foreign interest&quot;,
    &quot;value&quot;: 4597.0
  },
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;december&quot;,
    &quot;item&quot;: &quot;pensions&quot;,
    &quot;value&quot;: 2520.0
  }
]</code></pre>
