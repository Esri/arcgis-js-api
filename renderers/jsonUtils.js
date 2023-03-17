// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","dojo/has","dojox/gfx/_base","../kernel","../Color","../symbols/jsonUtils","./SimpleRenderer","./UniqueValueRenderer","./ClassBreaksRenderer","./VectorFieldRenderer","./DotDensityRenderer","./ScaleDependentRenderer","./TimeClassBreaksAger","./TimeRampAger","./TemporalRenderer","./HeatmapRenderer","./StretchRenderer","./ShadedReliefRenderer","./ColormapRenderer"],(function(e,r,o,n,a,s,t,l,i,c,d,m,u,g,p,R,f,h,b,k){var C={createDefaultRenderer:function(e){var r=t.createDefaultSymbol(e);return new l(r)},fromJson:function(e,r){var o;switch(e.type||""){case"simple":o=new l(e,r);break;case"uniqueValue":o=new i(e,null,null,null,null,r);break;case"classBreaks":o=new c(e,null,r);break;case"vectorField":o=new d(e);break;case"scaleDependent":o=this._scaleDependentFromJson(e);break;case"dotDensity":o=e.attributes?C.createDefaultRenderer("esriGeometryPolygon"):this._dotDensityFromJson(e);break;case"temporal":o=this._temporalFromJson(e,r);break;case"heatmap":o=this._heatmapFromJson(e);break;case"rasterStretch":o=new h(e);break;case"rasterShadedRelief":o=new b(e);break;case"rasterColormap":o=new k(e);break;default:var n=r&&r.geometryType;o=n?C.createDefaultRenderer(n):null}return o},_scaleDependentFromJson:function(r){var o={},n=r.minScale,a=r.rendererInfos;return o.rendererInfos=e.map(a,(function(e){var r=e.maxScale,o={minScale:n,maxScale:r,renderer:e.renderer&&this.fromJson(e.renderer)};return n=r,o}),this),new u(o)},_dotDensityFromJson:function(o){return o.backgroundColor&&r.isArray(o.backgroundColor)&&(o.backgroundColor=s.toDojoColor(o.backgroundColor)),o.dotSize>0&&(o.dotSize=n.pt2px(o.dotSize)),o.fields&&e.forEach(o.fields,(function(e){e&&r.isArray(e.color)&&(e.color=s.toDojoColor(e.color))})),o.legendOptions&&(o.legendOptions.backgroundColor&&r.isArray(o.legendOptions.backgroundColor)&&(o.legendOptions.backgroundColor=s.toDojoColor(o.legendOptions.backgroundColor)),o.legendOptions.outline&&(o.legendOptions.outline=t.fromJson(o.legendOptions.outline))),o.outline&&(o.outline=t.fromJson(o.outline)),new m(o)},_temporalFromJson:function(e,r){var o,n,a,s,t=r&&r.geometryType;return e=e||{},o=this.fromJson(e.observationRenderer,r),n=e.latestObservationRenderer?this.fromJson(e.latestObservationRenderer,r):null,a=e.trackRenderer?this.fromJson(e.trackRenderer,t?{geometryType:"esriGeometryPolyline"}:null):null,s=this._agerFromJson(e.observationAger),new R(o,n,a,s)},_agerFromJson:function(e){var r;return(e=e||{}).colorRange||e.sizeRange||e.alphaRange?r=this._timeRampFromJson(e):e.agerClassBreakInfos&&(r=this._timeClassBreaksFromJson(e)),r},_timeRampFromJson:function(e){var r,o,n;return e.colorRange&&e.colorRange.length>1&&(r=[s.toDojoColor(e.colorRange[0]),s.toDojoColor(e.colorRange[1])]),e.sizeRange&&e.sizeRange.length>1&&(o=[e.sizeRange[0],e.sizeRange[1]]),e.alphaRange&&e.alphaRange.length>1&&(n=[e.alphaRange[0]/255,e.alphaRange[1]/255]),new p(r,o,n)},_timeClassBreaksFromJson:function(e){var r,o,n,a,t=e.agerClassBreakInfos,l=[];for(o=function(e){var r=g.UNIT_DAYS;switch(e){case"esriTimeUnitsSeconds":r=g.UNIT_SECONDS;break;case"esriTimeUnitsMilliseconds":r=g.UNIT_MILLISECONDS;break;case"esriTimeUnitsHours":r=g.UNIT_HOURS;break;case"esriTimeUnitsMinutes":r=g.UNIT_MINUTES;break;case"esriTimeUnitsMonths":r=g.UNIT_MONTHS;break;case"esriTimeUnitsWeeks":r=g.UNIT_WEEKS;break;case"esriTimeUnitsYears":r=g.UNIT_YEARS}return r}(e.timeUnits),a=0;a<t.length;a+=1)n={minAge:0,maxAge:(r=t[a]).oldestAge||1/0},r.color&&(n.color=s.toDojoColor(r.color)),r.alpha&&(n.alpha=r.alpha/255),n.size=r.size,l[a]=n;return new g(l,o)},_heatmapFromJson:function(r){var o=r.colorStops;return o&&o instanceof Array&&e.forEach(o,(function(e){e.color=s.toDojoColor(e.color)})),new f(r)}};return o("extend-esri")&&r.mixin(r.getObject("renderer",!0,a),C),C}));