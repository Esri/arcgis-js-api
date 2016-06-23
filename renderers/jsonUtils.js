// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","dojo/has","dojox/gfx/_base","../kernel","../Color","../symbols/jsonUtils","./SimpleRenderer","./UniqueValueRenderer","./ClassBreaksRenderer","./VectorFieldRenderer","./DotDensityRenderer","./ScaleDependentRenderer","./TimeClassBreaksAger","./TimeRampAger","./TemporalRenderer","./HeatmapRenderer"],function(e,o,r,n,a,s,t,i,l,c,d,m,g,u,p,h,R){var f={fromJson:function(e){var o,r=e.type||"";switch(r){case"simple":o=new i(e);break;case"uniqueValue":o=new l(e);break;case"classBreaks":o=new c(e);break;case"vectorField":o=new d(e);break;case"scaleDependent":o=this._scaleDependentFromJson(e);break;case"dotDensity":o=this._dotDensityFromJson(e);break;case"temporal":o=this._temporalFromJson(e);break;case"heatmap":o=this._heatmapFromJson(e)}return o},_scaleDependentFromJson:function(o){var r={},n=o.minScale,a=o.rendererInfos;return r.rendererInfos=e.map(a,function(e){var o=e.maxScale,r={minScale:n,maxScale:o,renderer:e.renderer&&this.fromJson(e.renderer)};return n=o,r},this),new g(r)},_dotDensityFromJson:function(r){return r.backgroundColor&&o.isArray(r.backgroundColor)&&(r.backgroundColor=s.toDojoColor(r.backgroundColor)),r.dotSize>0&&(r.dotSize=n.pt2px(r.dotSize)),r.fields&&e.forEach(r.fields,function(e){e&&o.isArray(e.color)&&(e.color=s.toDojoColor(e.color))}),r.legendOptions&&(r.legendOptions.backgroundColor&&o.isArray(r.legendOptions.backgroundColor)&&(r.legendOptions.backgroundColor=s.toDojoColor(r.legendOptions.backgroundColor)),r.legendOptions.outline&&(r.legendOptions.outline=t.fromJson(r.legendOptions.outline))),r.outline&&(r.outline=t.fromJson(r.outline)),new m(r)},_temporalFromJson:function(e){var o,r,n,a,s;return e=e||{},o=this.fromJson(e.observationRenderer),r=e.latestObservationRenderer?this.fromJson(e.latestObservationRenderer):null,n=e.trackRenderer?this.fromJson(e.trackRenderer):null,a=this._agerFromJson(e.observationAger),s=new h(o,r,n,a)},_agerFromJson:function(e){var o;return e=e||{},e.colorRange||e.sizeRange||e.alphaRange?o=this._timeRampFromJson(e):e.agerClassBreakInfos&&(o=this._timeClassBreaksFromJson(e)),o},_timeRampFromJson:function(e){var o,r,n,a;return e.colorRange&&e.colorRange.length>1&&(o=[s.toDojoColor(e.colorRange[0]),s.toDojoColor(e.colorRange[1])]),e.sizeRange&&e.sizeRange.length>1&&(r=[e.sizeRange[0],e.sizeRange[1]]),e.alphaRange&&e.alphaRange.length>1&&(n=[e.alphaRange[0]/255,e.alphaRange[1]/255]),a=new p(o,r,n)},_timeClassBreaksFromJson:function(e){function o(e){var o=u.UNIT_DAYS;switch(e){case"esriTimeUnitsSeconds":o=u.UNIT_SECONDS;break;case"esriTimeUnitsMilliseconds":o=u.UNIT_MILLISECONDS;break;case"esriTimeUnitsHours":o=u.UNIT_HOURS;break;case"esriTimeUnitsMinutes":o=u.UNIT_MINUTES;break;case"esriTimeUnitsMonths":o=u.UNIT_MONTHS;break;case"esriTimeUnitsWeeks":o=u.UNIT_WEEKS;break;case"esriTimeUnitsYears":o=u.UNIT_YEARS}return o}var r,n,a,t,i,l=e.agerClassBreakInfos,c=[];for(n=o(e.timeUnits),t=0;t<l.length;t+=1)r=l[t],a={minAge:0,maxAge:r.oldestAge||1/0},r.color&&(a.color=s.toDojoColor(r.color)),r.alpha&&(a.alpha=r.alpha/255),a.size=r.size,c[t]=a;return i=new u(c,n)},_heatmapFromJson:function(o){var r=o.colorStops;return r&&r instanceof Array&&e.forEach(r,function(e){e.color=s.toDojoColor(e.color)}),new R(o)}};return r("extend-esri")&&o.mixin(o.getObject("renderer",!0,a),f),f});