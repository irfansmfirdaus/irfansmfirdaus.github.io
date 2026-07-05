---
layout: page
title: TIGGE Monitor
description: 
img: assets/img/thorpex.png
---

This page presents daily precipitation forecasts over Indonesia from the TIGGE THORPEX multi-model ensemble. The forecasts are generated using four global numerical weather prediction systems: KMA (Korea Meteorological Administration), JMA (Japan Meteorological Agency), UKMO (UK Met Office), and NCEP (National Centers for Environmental Prediction).

Please note that the data are available with an approximate 3-day latency.

**Update:** {{ site.time | date: "%d %B %Y" }}


<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path=site.data.update_seasonalmonitor.change_image title="TIGGE Forecast" class="img-fluid rounded z-depth-1" %}
  </div>
</div>