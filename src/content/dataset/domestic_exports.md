---
title: "Value of Selected Domestic Exports"
description: "Monthly value of selected domestic export commodities"
source: "Central Bank of Kenya"
endpoint: "GET /v1/datasets/domestic_exports"
rows: 2655
category: "economy"
sourceUrl: "https://www.centralbank.go.ke/uploads/balance_of_payment_statistics/1306010805_Value%20of%20Selected%20Domestic%20Exports%20-%20Selected%20Comms.csv"
lastUpdated: "2026-07-20T14:28:15"
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
<td data-label="Description">Export commodity (e.g., coffee, tea, petroleum, horticulture, total)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">8</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Export value in KES millions</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">2638</td>
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
<td data-label="Count">2655</td>
<td data-label="Mean">2011.92</td>
<td data-label="Std">8.00</td>
<td data-label="Min">1998.00</td>
<td data-label="25%">2005.00</td>
<td data-label="50%">2012.00</td>
<td data-label="75%">2019.00</td>
<td data-label="Max">2026.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">2655</td>
<td data-label="Mean">4546.67</td>
<td data-label="Std">6644.97</td>
<td data-label="Min">4.98</td>
<td data-label="25%">440.22</td>
<td data-label="50%">1665.62</td>
<td data-label="75%">5974.18</td>
<td data-label="Max">44310.57</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **95.4%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=1998 | 96 | 40 | ! 41.7% |
| year=1999 | 96 | 96 | OK 100.0% |
| year=2000 | 96 | 96 | OK 100.0% |
| year=2001 | 96 | 96 | OK 100.0% |
| year=2002 | 96 | 96 | OK 100.0% |
| year=2003 | 96 | 96 | OK 100.0% |
| year=2004 | 96 | 96 | OK 100.0% |
| year=2005 | 96 | 96 | OK 100.0% |
| year=2006 | 96 | 96 | OK 100.0% |
| year=2007 | 96 | 95 | OK 99.0% |
| year=2008 | 96 | 96 | OK 100.0% |
| year=2009 | 96 | 96 | OK 100.0% |
| year=2010 | 96 | 96 | OK 100.0% |
| year=2011 | 96 | 96 | OK 100.0% |
| year=2012 | 96 | 96 | OK 100.0% |
| year=2013 | 96 | 96 | OK 100.0% |
| year=2014 | 96 | 96 | OK 100.0% |
| year=2015 | 96 | 96 | OK 100.0% |
| year=2016 | 96 | 96 | OK 100.0% |
| year=2017 | 96 | 96 | OK 100.0% |
| year=2018 | 96 | 96 | OK 100.0% |
| year=2019 | 96 | 96 | OK 100.0% |
| year=2020 | 96 | 96 | OK 100.0% |
| year=2021 | 96 | 96 | OK 100.0% |
| year=2022 | 96 | 96 | OK 100.0% |
| year=2023 | 96 | 96 | OK 100.0% |
| year=2024 | 96 | 96 | OK 100.0% |
| year=2025 | 96 | 96 | OK 100.0% |
| year=2026 | 96 | 24 | ! 25.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;august&quot;,
    &quot;item&quot;: &quot;coffee&quot;,
    &quot;value&quot;: 500.47
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;august&quot;,
    &quot;item&quot;: &quot;tea&quot;,
    &quot;value&quot;: 2404.7
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;august&quot;,
    &quot;item&quot;: &quot;petroleum&quot;,
    &quot;value&quot;: 850.6
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;august&quot;,
    &quot;item&quot;: &quot;chemicals&quot;,
    &quot;value&quot;: 695.15
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;august&quot;,
    &quot;item&quot;: &quot;fish&quot;,
    &quot;value&quot;: 183.19
  }
]</code></pre>
