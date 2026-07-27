---
title: "Registered Voters per Polling Station"
description: "Number of registered voters per polling station across all 47 counties for the 2022 General Election"
source: "Independent Electoral and Boundaries Commission (IEBC) Kenya"
endpoint: "GET /v1/datasets/registered_voters"
rows: 37249
category: "governance"
sourceUrl: "https://www.iebc.or.ke/docs/rov_per_polling_station.pdf"
lastUpdated: "2026-06-19T12:00:00"
---

## Columns

<table class="dataset-table">
<thead>
<tr><th>Column</th><th>Type</th><th>Description</th><th>Nullable</th><th>Null count</th><th>Unique</th></tr>
</thead>
<tbody>
<tr>
<td data-label="Column"><code>county</code></td>
<td data-label="Type">str</td>
<td data-label="Description">County name</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">49</td>
</tr>
<tr>
<td data-label="Column"><code>constituency</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Constituency name</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">292</td>
</tr>
<tr>
<td data-label="Column"><code>ward</code></td>
<td data-label="Type">str</td>
<td data-label="Description">County Assembly Ward name</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">1418</td>
</tr>
<tr>
<td data-label="Column"><code>polling_station</code></td>
<td data-label="Type">str</td>
<td data-label="Description">polling station ID number</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">37249</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Number of registered voters at the polling station</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">554</td>
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
<td data-label="Column"><code>value</code></td>
<td data-label="Count">37249</td>
<td data-label="Mean">488.98</td>
<td data-label="Std">163.75</td>
<td data-label="Min">1.00</td>
<td data-label="25%">389.00</td>
<td data-label="50%">510.00</td>
<td data-label="75%">628.00</td>
<td data-label="Max">700.00</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

_Coverage analysis not applicable for this dataset._

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;county&quot;: &quot;mombasa&quot;,
    &quot;constituency&quot;: &quot;changamwe&quot;,
    &quot;ward&quot;: &quot;port reitz&quot;,
    &quot;polling_station&quot;: &quot;001001000100101&quot;,
    &quot;value&quot;: 673.0
  },
  {
    &quot;county&quot;: &quot;mombasa&quot;,
    &quot;constituency&quot;: &quot;changamwe&quot;,
    &quot;ward&quot;: &quot;port reitz&quot;,
    &quot;polling_station&quot;: &quot;001001000100102&quot;,
    &quot;value&quot;: 673.0
  },
  {
    &quot;county&quot;: &quot;mombasa&quot;,
    &quot;constituency&quot;: &quot;changamwe&quot;,
    &quot;ward&quot;: &quot;port reitz&quot;,
    &quot;polling_station&quot;: &quot;001001000100103&quot;,
    &quot;value&quot;: 673.0
  },
  {
    &quot;county&quot;: &quot;mombasa&quot;,
    &quot;constituency&quot;: &quot;changamwe&quot;,
    &quot;ward&quot;: &quot;port reitz&quot;,
    &quot;polling_station&quot;: &quot;001001000100104&quot;,
    &quot;value&quot;: 672.0
  },
  {
    &quot;county&quot;: &quot;mombasa&quot;,
    &quot;constituency&quot;: &quot;changamwe&quot;,
    &quot;ward&quot;: &quot;port reitz&quot;,
    &quot;polling_station&quot;: &quot;001001000100105&quot;,
    &quot;value&quot;: 672.0
  }
]</code></pre>
