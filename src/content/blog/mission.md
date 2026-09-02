---
title: "Mission Statement"
description: "Public data across Kenya is locked away in PDFs, spreadsheets, and websites that make it hard to use. Here's why we're building Plus254 to change that."
date: 2026-07-15
type: "announcement"
toc: false
tags: ["mission", "open-data"]
---

Tourism is an important sector of Kenya's economy. It contributes significantly to GDP, supports hundreds of businesses, and provides employment to thousands of Kenyans. Given that, it's worth being able to answer the following question: what is peak tourism season in Kenya?

Fortunately, that data exists. For over a decade the Kenya National Bureau of Statistics has published monthly arrival figures for Kenya's two international airports, Jomo Kenyatta International Airport and Moi International Airport.

Unfortunately, the data is scattered across more than 200 monthly PDF reports. Answering a question as simple as "When is Kenya's peak tourism season?" means piecing together nearly two decades of reports before you can even start looking for a pattern.

With the Plus254 API, accessing this data becomes a matter of a few lines of code:

```python
import requests

response = requests.get("https://plus254.co.ke/api/arrivals")
data = response.json()
```
Now you have monthly arrivals from 2009 to present, ready to analyze. 

With a small tweak to your query, you can break the same data down by country of origin:

```python
response = requests.get("https://plus254.co.ke/api/arrivals?breakdown=country")
data = response.json()
# e.g. see how US arrivals in August compare to German arrivals in December
```

Now you can start asking more interesting questions. Which source markets are growing fastest? Are there countries whose travel patterns differ from the overall seasonal trend? These are the kinds of insights that help businesses in the industry allocate marketing budgets, anticipate demand, and better understand the market.

Visitor arrivals data is just one example. Across Kenya, valuable public data exists, but too often it is locked away in PDFs, spreadsheets, or websites that make large-scale analysis difficult. This is the problem we started plus254.co.ke to solve. We do the tedious work of collecting, structuring, and maintaining public datasets so that researchers, businesses, journalists, and developers can spend less time gathering information and more time using it.

We believe better access to data in machine readable formats leads to better analysis, better products, and ultimately, better decisions. 

