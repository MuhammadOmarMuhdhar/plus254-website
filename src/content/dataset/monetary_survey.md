---
title: "Depository Corporation Survey"
description: "Monetary aggregates from the Depository Corporation Survey"
source: "Central Bank of Kenya"
endpoint: "GET /v1/datasets/monetary_survey"
rows: 12280
category: "economy"
sourceUrl: "https://www.centralbank.go.ke/uploads/monetary_and_finance_statistics/274043565_Depository%20Corporation%20Survey%20-%20CSV.csv"
lastUpdated: "2026-07-20T14:32:20"
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
<td data-label="Unique">13</td>
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
<td data-label="Column"><code>category</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Sub-survey section (Central Bank of Kenya, Other Depository Corporation Survey, Depository Corporation Survey)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">3</td>
</tr>
<tr>
<td data-label="Column"><code>item</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Monetary indicator name (e.g., Excess reserves, Required reserves, Broad Money M3)</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">33</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Monetary value in KES millions</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">11065</td>
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
<td data-label="Count">12280</td>
<td data-label="Mean">2019.76</td>
<td data-label="Std">3.46</td>
<td data-label="Min">2014.00</td>
<td data-label="25%">2017.00</td>
<td data-label="50%">2020.00</td>
<td data-label="75%">2023.00</td>
<td data-label="Max">2026.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">12280</td>
<td data-label="Mean">523024.92</td>
<td data-label="Std">1.26e+06</td>
<td data-label="Min">-2.445e+06</td>
<td data-label="25%">0.05</td>
<td data-label="50%">6086.52</td>
<td data-label="75%">328107.50</td>
<td data-label="Max">8.002e+06</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **94.2%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
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
    &quot;year&quot;: 2014,
    &quot;month&quot;: &quot;april&quot;,
    &quot;category&quot;: &quot;central bank of kenya&quot;,
    &quot;item&quot;: &quot;    excess reserves&quot;,
    &quot;value&quot;: 12412.0
  },
  {
    &quot;year&quot;: 2014,
    &quot;month&quot;: &quot;april&quot;,
    &quot;category&quot;: &quot;central bank of kenya&quot;,
    &quot;item&quot;: &quot;    required reserves&quot;,
    &quot;value&quot;: 103129.0
  },
  {
    &quot;year&quot;: 2014,
    &quot;month&quot;: &quot;april&quot;,
    &quot;category&quot;: &quot;central bank of kenya&quot;,
    &quot;item&quot;: &quot;banks reserves at cbk&quot;,
    &quot;value&quot;: 115541.0
  },
  {
    &quot;year&quot;: 2014,
    &quot;month&quot;: &quot;april&quot;,
    &quot;category&quot;: &quot;central bank of kenya&quot;,
    &quot;item&quot;: &quot;county government (net)&quot;,
    &quot;value&quot;: 0.0
  },
  {
    &quot;year&quot;: 2014,
    &quot;month&quot;: &quot;april&quot;,
    &quot;category&quot;: &quot;central bank of kenya&quot;,
    &quot;item&quot;: &quot;credit to other depository corporations&quot;,
    &quot;value&quot;: -22955.0
  }
]</code></pre>
