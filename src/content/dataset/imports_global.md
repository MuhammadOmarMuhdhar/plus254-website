---
title: "Value of Imports from Rest of World"
description: "Monthly value of direct imports from selected countries outside Africa"
source: "Central Bank of Kenya"
endpoint: "GET /v1/datasets/imports_global"
rows: 3636
category: "economy"
sourceUrl: "https://www.centralbank.go.ke/uploads/balance_of_payment_statistics/1436491729_Value%20of%20Direct%20Imports%20from%20Selected%20Rest%20of%20the%20World%20Countries.csv"
lastUpdated: "2026-07-20T14:31:42"
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
<td data-label="Unique">26</td>
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
<td data-label="Description">Origin country (e.g., u.k, u.s.a, china, india, total)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">12</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Import value in KES millions</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">3620</td>
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
<td data-label="Count">3636</td>
<td data-label="Mean">2013.13</td>
<td data-label="Std">7.29</td>
<td data-label="Min">2001.00</td>
<td data-label="25%">2007.00</td>
<td data-label="50%">2013.00</td>
<td data-label="75%">2019.00</td>
<td data-label="Max">2026.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">3636</td>
<td data-label="Mean">10119.49</td>
<td data-label="Std">17430.92</td>
<td data-label="Min">168.38</td>
<td data-label="25%">1914.21</td>
<td data-label="50%">3810.61</td>
<td data-label="75%">9643.02</td>
<td data-label="Max">166947.10</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **97.1%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=2001 | 144 | 144 | OK 100.0% |
| year=2002 | 144 | 144 | OK 100.0% |
| year=2003 | 144 | 144 | OK 100.0% |
| year=2004 | 144 | 144 | OK 100.0% |
| year=2005 | 144 | 144 | OK 100.0% |
| year=2006 | 144 | 144 | OK 100.0% |
| year=2007 | 144 | 144 | OK 100.0% |
| year=2008 | 144 | 144 | OK 100.0% |
| year=2009 | 144 | 144 | OK 100.0% |
| year=2010 | 144 | 144 | OK 100.0% |
| year=2011 | 144 | 144 | OK 100.0% |
| year=2012 | 144 | 144 | OK 100.0% |
| year=2013 | 144 | 144 | OK 100.0% |
| year=2014 | 144 | 144 | OK 100.0% |
| year=2015 | 144 | 144 | OK 100.0% |
| year=2016 | 144 | 144 | OK 100.0% |
| year=2017 | 144 | 144 | OK 100.0% |
| year=2018 | 144 | 144 | OK 100.0% |
| year=2019 | 144 | 144 | OK 100.0% |
| year=2020 | 144 | 144 | OK 100.0% |
| year=2021 | 144 | 144 | OK 100.0% |
| year=2022 | 144 | 144 | OK 100.0% |
| year=2023 | 144 | 144 | OK 100.0% |
| year=2024 | 144 | 144 | OK 100.0% |
| year=2025 | 144 | 144 | OK 100.0% |
| year=2026 | 144 | 36 | ! 25.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 2001,
    &quot;month&quot;: &quot;january&quot;,
    &quot;item&quot;: &quot;u.k&quot;,
    &quot;value&quot;: 1868.15
  },
  {
    &quot;year&quot;: 2001,
    &quot;month&quot;: &quot;january&quot;,
    &quot;item&quot;: &quot;u.s.a&quot;,
    &quot;value&quot;: 1001.11
  },
  {
    &quot;year&quot;: 2001,
    &quot;month&quot;: &quot;january&quot;,
    &quot;item&quot;: &quot;germany&quot;,
    &quot;value&quot;: 1252.24
  },
  {
    &quot;year&quot;: 2001,
    &quot;month&quot;: &quot;january&quot;,
    &quot;item&quot;: &quot;italy&quot;,
    &quot;value&quot;: 578.28
  },
  {
    &quot;year&quot;: 2001,
    &quot;month&quot;: &quot;january&quot;,
    &quot;item&quot;: &quot;u.a.e&quot;,
    &quot;value&quot;: 2749.31
  }
]</code></pre>
