---
title: "Monthly Foreign Exchange Rates (Period Average)"
description: "Monthly exchange rates of major currencies against KES (period average)"
source: "Central Bank of Kenya"
endpoint: "GET /v1/datasets/forex_period_average"
rows: 7980
category: "economy"
sourceUrl: "https://www.centralbank.go.ke/uploads/exchange_rates/2034093818_Monthly%20Exchange%20rate%20(period%20average).csv"
lastUpdated: "2026-07-20T14:30:18"
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
<td data-label="Unique">34</td>
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
<td data-label="Description">Foreign currency name (e.g., united states dollar, sterling pound)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">29</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Period-average exchange rate in KES per unit of foreign currency</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">4807</td>
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
<td data-label="Count">7980</td>
<td data-label="Mean">2009.70</td>
<td data-label="Std">9.58</td>
<td data-label="Min">1993.00</td>
<td data-label="25%">2001.00</td>
<td data-label="50%">2010.00</td>
<td data-label="75%">2018.00</td>
<td data-label="Max">2026.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">7980</td>
<td data-label="Mean">41.55</td>
<td data-label="Std">40.21</td>
<td data-label="Min">1.08</td>
<td data-label="25%">11.25</td>
<td data-label="50%">21.72</td>
<td data-label="75%">70.09</td>
<td data-label="Max">202.88</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **67.4%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=1993 | 348 | 207 | ! 59.5% |
| year=1994 | 348 | 216 | ! 62.1% |
| year=1995 | 348 | 191 | ! 54.9% |
| year=1996 | 348 | 204 | ! 58.6% |
| year=1997 | 348 | 216 | ! 62.1% |
| year=1998 | 348 | 216 | ! 62.1% |
| year=1999 | 348 | 228 | ! 65.5% |
| year=2000 | 348 | 290 | OK 83.3% |
| year=2001 | 348 | 312 | OK 89.7% |
| year=2002 | 348 | 239 | ! 68.7% |
| year=2003 | 348 | 216 | ! 62.1% |
| year=2004 | 348 | 216 | ! 62.1% |
| year=2005 | 348 | 216 | ! 62.1% |
| year=2006 | 348 | 216 | ! 62.1% |
| year=2007 | 348 | 228 | ! 65.5% |
| year=2008 | 348 | 228 | ! 65.5% |
| year=2009 | 348 | 228 | ! 65.5% |
| year=2010 | 348 | 228 | ! 65.5% |
| year=2011 | 348 | 252 | ! 72.4% |
| year=2012 | 348 | 252 | ! 72.4% |
| year=2013 | 348 | 252 | ! 72.4% |
| year=2014 | 348 | 252 | ! 72.4% |
| year=2015 | 348 | 252 | ! 72.4% |
| year=2016 | 348 | 252 | ! 72.4% |
| year=2017 | 348 | 252 | ! 72.4% |
| year=2018 | 348 | 252 | ! 72.4% |
| year=2019 | 348 | 252 | ! 72.4% |
| year=2020 | 348 | 252 | ! 72.4% |
| year=2021 | 348 | 252 | ! 72.4% |
| year=2022 | 348 | 252 | ! 72.4% |
| year=2023 | 348 | 252 | ! 72.4% |
| year=2024 | 348 | 252 | ! 72.4% |
| year=2025 | 348 | 252 | ! 72.4% |
| year=2026 | 348 | 105 | ! 30.2% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 1993,
    &quot;month&quot;: &quot;april&quot;,
    &quot;item&quot;: &quot;united states dollar&quot;,
    &quot;value&quot;: 51.88
  },
  {
    &quot;year&quot;: 1993,
    &quot;month&quot;: &quot;april&quot;,
    &quot;item&quot;: &quot;sterling pound&quot;,
    &quot;value&quot;: 80.34
  },
  {
    &quot;year&quot;: 1993,
    &quot;month&quot;: &quot;april&quot;,
    &quot;item&quot;: &quot;deutch mark&quot;,
    &quot;value&quot;: 32.57
  },
  {
    &quot;year&quot;: 1993,
    &quot;month&quot;: &quot;april&quot;,
    &quot;item&quot;: &quot;canadian dollar&quot;,
    &quot;value&quot;: 41.12
  },
  {
    &quot;year&quot;: 1993,
    &quot;month&quot;: &quot;april&quot;,
    &quot;item&quot;: &quot;french franc&quot;,
    &quot;value&quot;: 9.63
  }
]</code></pre>
