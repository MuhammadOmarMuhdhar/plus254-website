---
title: "Public Debt"
description: "Monthly public debt (domestic and external)"
source: "Central Bank of Kenya"
endpoint: "GET /v1/datasets/public_debt"
rows: 620
category: "economy"
sourceUrl: "https://www.centralbank.go.ke/uploads/government_finance_statistics/565446111_Public%20Debt.csv"
lastUpdated: "2026-07-20T14:32:52"
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
<td data-label="Unique">27</td>
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
<td data-label="Description">Debt component (domestic debt, external debt, total)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">2</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Debt in KES millions (comma-formatted number)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">619</td>
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
<td data-label="Count">620</td>
<td data-label="Mean">2012.57</td>
<td data-label="Std">7.47</td>
<td data-label="Min">1999.00</td>
<td data-label="25%">2006.00</td>
<td data-label="50%">2013.00</td>
<td data-label="75%">2019.00</td>
<td data-label="Max">2025.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">620</td>
<td data-label="Mean">1.804e+06</td>
<td data-label="Std">1.767e+06</td>
<td data-label="Min">183417.00</td>
<td data-label="25%">417228.40</td>
<td data-label="50%">888524.02</td>
<td data-label="75%">2.858e+06</td>
<td data-label="Max">6.838e+06</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **95.7%**

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
| year=2012 | 24 | 24 | OK 100.0% |
| year=2013 | 24 | 24 | OK 100.0% |
| year=2014 | 24 | 24 | OK 100.0% |
| year=2015 | 24 | 24 | OK 100.0% |
| year=2016 | 24 | 24 | OK 100.0% |
| year=2017 | 24 | 24 | OK 100.0% |
| year=2018 | 24 | 24 | OK 100.0% |
| year=2019 | 24 | 24 | OK 100.0% |
| year=2020 | 24 | 24 | OK 100.0% |
| year=2021 | 24 | 24 | OK 100.0% |
| year=2022 | 24 | 24 | OK 100.0% |
| year=2023 | 24 | 24 | OK 100.0% |
| year=2024 | 24 | 24 | OK 100.0% |
| year=2025 | 24 | 24 | OK 100.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;september&quot;,
    &quot;item&quot;: &quot; domestic debt &quot;,
    &quot;value&quot;: 183417.0
  },
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;september&quot;,
    &quot;item&quot;: &quot; external debt&quot;,
    &quot;value&quot;: 320137.0
  },
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;december&quot;,
    &quot;item&quot;: &quot; domestic debt &quot;,
    &quot;value&quot;: 190300.0
  },
  {
    &quot;year&quot;: 1999,
    &quot;month&quot;: &quot;december&quot;,
    &quot;item&quot;: &quot; external debt&quot;,
    &quot;value&quot;: 311953.0
  },
  {
    &quot;year&quot;: 2000,
    &quot;month&quot;: &quot;march&quot;,
    &quot;item&quot;: &quot; domestic debt &quot;,
    &quot;value&quot;: 201463.22
  }
]</code></pre>
