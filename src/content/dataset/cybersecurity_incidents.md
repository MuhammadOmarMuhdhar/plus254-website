---
title: "Cybersecurity Incidents"
description: "Quarterly cybersecurity incidents reported to the CAK"
source: "Communications Authority of Kenya"
endpoint: "GET /v1/datasets/cybersecurity_incidents"
rows: 122
category: "network"
sourceUrl: "https://ca.go.ke/statistics/"
lastUpdated: "2026-07-20T14:47:04"
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
<td data-label="Unique">3</td>
</tr>
<tr>
<td data-label="Column"><code>quarter</code></td>
<td data-label="Type">int64</td>
<td data-label="Description">Fiscal quarter</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">4</td>
</tr>
<tr>
<td data-label="Column"><code>metric</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Threat or advisory</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">2</td>
</tr>
<tr>
<td data-label="Column"><code>item</code></td>
<td data-label="Type">str</td>
<td data-label="Description">Type of cybersecurity incident</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">8</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Type">float64</td>
<td data-label="Description">Number of cybersecurity incidents reported</td>
<td data-label="Nullable">No</td>
<td data-label="Null count">0</td>
<td data-label="Unique">122</td>
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
<td data-label="Count">122</td>
<td data-label="Mean">2023.98</td>
<td data-label="Std">0.78</td>
<td data-label="Min">2023.00</td>
<td data-label="25%">2023.00</td>
<td data-label="50%">2024.00</td>
<td data-label="75%">2025.00</td>
<td data-label="Max">2025.00</td>
</tr>
<tr>
<td data-label="Column"><code>quarter</code></td>
<td data-label="Count">122</td>
<td data-label="Mean">2.51</td>
<td data-label="Std">1.02</td>
<td data-label="Min">1.00</td>
<td data-label="25%">2.00</td>
<td data-label="50%">3.00</td>
<td data-label="75%">3.00</td>
<td data-label="Max">4.00</td>
</tr>
<tr>
<td data-label="Column"><code>value</code></td>
<td data-label="Count">122</td>
<td data-label="Mean">1.715e+08</td>
<td data-label="Std">6.883e+08</td>
<td data-label="Min">59.00</td>
<td data-label="25%">235945.00</td>
<td data-label="50%">3.213e+06</td>
<td data-label="75%">1.463e+07</td>
<td data-label="Max">4.492e+09</td>
</tr>
</tbody>
</table>

## Dimensional Coverage

Overall coverage: **83.3%**

| Period | Expected | Actual | Coverage |
|--------|----------|--------|----------|
| year=2023 | 8 | 6 | ! 75.0% |
| year=2024 | 8 | 8 | OK 100.0% |
| year=2025 | 8 | 6 | ! 75.0% |

## Sample Data

<pre class="code-block"><code>[
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;metric&quot;: &quot;threats&quot;,
    &quot;item&quot;: &quot;malware&quot;,
    &quot;value&quot;: 13221698.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;metric&quot;: &quot;threats&quot;,
    &quot;item&quot;: &quot;brute force attacks&quot;,
    &quot;value&quot;: 9670849.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;metric&quot;: &quot;threats&quot;,
    &quot;item&quot;: &quot;web application attacks&quot;,
    &quot;value&quot;: 72536.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;metric&quot;: &quot;threats&quot;,
    &quot;item&quot;: &quot;system vulnerabilities&quot;,
    &quot;value&quot;: 1269267620.0
  },
  {
    &quot;year&quot;: 2023,
    &quot;quarter&quot;: 2,
    &quot;metric&quot;: &quot;threats&quot;,
    &quot;item&quot;: &quot;mobile application attacks&quot;,
    &quot;value&quot;: 52705.0
  }
]</code></pre>
