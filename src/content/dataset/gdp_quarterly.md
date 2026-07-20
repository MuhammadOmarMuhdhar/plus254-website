---
title: "Quarterly GDP"
description: "Quarterly GDP estimates by sector"
source: "Central Bank of Kenya"
endpoint: "GET /v1/datasets/gdp_quarterly"
rows: 2725
category: "economy"
sourceUrl: "https://www.centralbank.go.ke/uploads/national_accounts_statistics/1084903161_Quarterly%20GDP.csv"
lastUpdated: "2026-07-20T14:30:39"
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
<td data-label="Unique">17</td>
</tr>
<tr>
<td data-label="Column"><code>quarter</code></td>
<td data-label="Type">int64</td>
<td data-label="Description">Calendar quarter</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">4</td>
</tr>
<tr>
<td data-label="Column"><code>item</code></td>
<td data-label="Type">object</td>
<td data-label="Description">Economic sector or activity (e.g., Agriculture, Manufacturing, Construction, Total GDP)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">22</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">GDP value in KES millions</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">2318</td>
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
<td data-label="Count">2725</td>
<td data-label="Mean">2017.23</td>
<td data-label="Std">4.77</td>
<td data-label="Min">2009.00</td>
<td data-label="25%">2013.00</td>
<td data-label="50%">2017.00</td>
<td data-label="75%">2021.00</td>
<td data-label="Max">2025.00</td>
</tr>
<tr>
<td data-label="Column"><code>quarter</code></td>
<td data-label="Count">2725</td>
<td data-label="Mean">2.49</td>
<td data-label="Std">1.12</td>
<td data-label="Min">1.00</td>
<td data-label="25%">1.00</td>
<td data-label="50%">2.00</td>
<td data-label="75%">3.00</td>
<td data-label="Max">4.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">2725</td>
<td data-label="Mean">197844.95</td>
<td data-label="Std">525256.08</td>
<td data-label="Min">-86324.78</td>
<td data-label="25%">4.92</td>
<td data-label="50%">2023.00</td>
<td data-label="75%">127815.00</td>
<td data-label="Max">2.948e+06</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **96.6%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=2009 | 88 | 85 | OK 96.6% |
| year=2010 | 88 | 85 | OK 96.6% |
| year=2011 | 88 | 85 | OK 96.6% |
| year=2012 | 88 | 85 | OK 96.6% |
| year=2013 | 88 | 85 | OK 96.6% |
| year=2014 | 88 | 85 | OK 96.6% |
| year=2015 | 88 | 85 | OK 96.6% |
| year=2016 | 88 | 85 | OK 96.6% |
| year=2017 | 88 | 85 | OK 96.6% |
| year=2018 | 88 | 85 | OK 96.6% |
| year=2019 | 88 | 85 | OK 96.6% |
| year=2020 | 88 | 85 | OK 96.6% |
| year=2021 | 88 | 85 | OK 96.6% |
| year=2022 | 88 | 85 | OK 96.6% |
| year=2023 | 88 | 85 | OK 96.6% |
| year=2024 | 88 | 85 | OK 96.6% |
| year=2025 | 88 | 85 | OK 96.6% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 2009,
    &quot;quarter&quot;: 1,
    &quot;item&quot;: &quot;agriculture&quot;,
    &quot;value&quot;: 312740.0
  },
  {
    &quot;year&quot;: 2009,
    &quot;quarter&quot;: 1,
    &quot;item&quot;: &quot;mining &amp; quarrying&quot;,
    &quot;value&quot;: 9316.0
  },
  {
    &quot;year&quot;: 2009,
    &quot;quarter&quot;: 1,
    &quot;item&quot;: &quot;manufacturing&quot;,
    &quot;value&quot;: 126473.0
  },
  {
    &quot;year&quot;: 2009,
    &quot;quarter&quot;: 1,
    &quot;item&quot;: &quot;electricity &amp; water supply&quot;,
    &quot;value&quot;: 35149.0
  },
  {
    &quot;year&quot;: 2009,
    &quot;quarter&quot;: 1,
    &quot;item&quot;: &quot;construction&quot;,
    &quot;value&quot;: 50218.0
  }
]</code></pre>
