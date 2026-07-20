---
title: "Value of Imports by Commodity"
description: "Monthly value of direct imports classified by SITC sections"
source: "Central Bank of Kenya"
endpoint: "GET /v1/datasets/imports_commodity"
rows: 2988
category: "economy"
sourceUrl: "https://www.centralbank.go.ke/uploads/balance_of_payment_statistics/1126743207_Value%20of%20Direct%20Imports%20by%20Commodities.csv"
lastUpdated: "2026-07-20T14:31:20"
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
<td data-label="Description">SITC commodity section (e.g., food and live animals, chemicals, machinery and transport equipment, total)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">9</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Import value in KES millions</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">2988</td>
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
<td data-label="Count">2988</td>
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
<td data-label="Count">2988</td>
<td data-label="Mean">12479.22</td>
<td data-label="Std">15974.15</td>
<td data-label="Min">36.09</td>
<td data-label="25%">1981.41</td>
<td data-label="50%">6010.44</td>
<td data-label="75%">18033.00</td>
<td data-label="Max">125832.25</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **95.4%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=1998 | 108 | 45 | ! 41.7% |
| year=1999 | 108 | 108 | OK 100.0% |
| year=2000 | 108 | 108 | OK 100.0% |
| year=2001 | 108 | 108 | OK 100.0% |
| year=2002 | 108 | 108 | OK 100.0% |
| year=2003 | 108 | 108 | OK 100.0% |
| year=2004 | 108 | 108 | OK 100.0% |
| year=2005 | 108 | 108 | OK 100.0% |
| year=2006 | 108 | 108 | OK 100.0% |
| year=2007 | 108 | 108 | OK 100.0% |
| year=2008 | 108 | 108 | OK 100.0% |
| year=2009 | 108 | 108 | OK 100.0% |
| year=2010 | 108 | 108 | OK 100.0% |
| year=2011 | 108 | 108 | OK 100.0% |
| year=2012 | 108 | 108 | OK 100.0% |
| year=2013 | 108 | 108 | OK 100.0% |
| year=2014 | 108 | 108 | OK 100.0% |
| year=2015 | 108 | 108 | OK 100.0% |
| year=2016 | 108 | 108 | OK 100.0% |
| year=2017 | 108 | 108 | OK 100.0% |
| year=2018 | 108 | 108 | OK 100.0% |
| year=2019 | 108 | 108 | OK 100.0% |
| year=2020 | 108 | 108 | OK 100.0% |
| year=2021 | 108 | 108 | OK 100.0% |
| year=2022 | 108 | 108 | OK 100.0% |
| year=2023 | 108 | 108 | OK 100.0% |
| year=2024 | 108 | 108 | OK 100.0% |
| year=2025 | 108 | 108 | OK 100.0% |
| year=2026 | 108 | 27 | ! 25.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;august&quot;,
    &quot;item&quot;: &quot;food and live animals&quot;,
    &quot;value&quot;: 1413.87
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;august&quot;,
    &quot;item&quot;: &quot;beverages and tobacco&quot;,
    &quot;value&quot;: 52.95
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;august&quot;,
    &quot;item&quot;: &quot;crude materials inedible except fuels&quot;,
    &quot;value&quot;: 569.55
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;august&quot;,
    &quot;item&quot;: &quot;mineral fuels lubricants and related materials&quot;,
    &quot;value&quot;: 1927.76
  },
  {
    &quot;year&quot;: 1998,
    &quot;month&quot;: &quot;august&quot;,
    &quot;item&quot;: &quot;animals and vegetable oils and fats&quot;,
    &quot;value&quot;: 688.28
  }
]</code></pre>
