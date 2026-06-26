---
layout: page
title: Climate Change Monitor
description: 
img: assets/img/change.png
---

This page monitors surface air temperature across Indonesia and provides changes in temperature for provincial capitals relative to the 1991–2020 climatological baseline.

Please note that the data are available with an approximate 7-day latency.

**Update:** {{ site.time | date: "%d %B %Y" }}


<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% assign update_date = site.time | date: "%s" | minus: 604800 %}
    {% assign img_path = "assets/img/clima_monitor/change_temperature_P3_NOW_" | append: (update_date | date: "%d-%m-%Y") | append: ".png" %}
    {% include figure.liquid path=img_path title="Temperature Change" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% assign update_date = site.time | date: "%s" | minus: 604800 %}
    {% assign img_path = "assets/img/clima_monitor/temperature_capitals_" | append: (update_date | date: "%d-%m-%Y") | append: ".png" %}
    {% include figure.liquid path=img_path title="Change Capital Temperature" class="img-fluid rounded z-depth-1" %}
  </div>
</div>