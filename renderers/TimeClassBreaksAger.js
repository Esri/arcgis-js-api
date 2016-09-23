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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/array","dojo/_base/lang","dojo/date","../core/lang","../symbols/support/jsonUtils","../Color","./SymbolAger"],function(e,s,i,t,r,n,o,a){var m={UNIT_DAYS:"day",UNIT_HOURS:"hour",UNIT_MILLISECONDS:"millisecond",UNIT_MINUTES:"minute",UNIT_MONTHS:"month",UNIT_SECONDS:"second",UNIT_WEEKS:"week",UNIT_YEARS:"year"},l=e(a,{declaredClass:"esri.renderer.TimeClassBreaksAger",constructor:function(e,s){this.infos=e,this.timeUnits=s||"day",e.sort(function(e,s){return e.minAge<s.minAge?-1:e.minAge>s.minAge?1:0})},getAgedSymbol:function(e,i){var o=i.getLayer(),a=i.attributes,m=r.isDefined;e=n.fromJSON(e.toJSON());var l=o._map.timeExtent,U=l.endTime;if(!U)return e;var c=new Date(a[o._startTimeField]),T=t.difference(c,U,this.timeUnits);return s.some(this.infos,function(s){if(T>=s.minAge&&T<=s.maxAge){var i=s.color,t=s.size,r=s.alpha;return i&&e.setColor(i),m(t)&&this._setSymbolSize(e,t),m(r)&&e.color&&(e.color.a=r),!0}},this),e},toJSON:function(){var e,s,i,t={agerClassBreakInfos:[]};for(t.timeUnits=this._getRestUnits(this.timeUnits),e=0;e<this.infos.length;e+=1)s=this.infos[e],i={},i.oldestAge=s.maxAge===1/0?null:s.maxAge,i.size=s.size,s.color&&(i.color=o.toJSON(s.color)),s.alpha&&(i.alpha=Math.round(255*s.alpha)),t.agerClassBreakInfos[e]=i;return t},_getRestUnits:function(e){var s="esriTimeUnitsDays";switch(e){case l.UNIT_SECONDS:s="esriTimeUnitsSeconds";break;case l.UNIT_MILLISECONDS:s="esriTimeUnitsMilliseconds";break;case l.UNIT_HOURS:s="esriTimeUnitsHours";break;case l.UNIT_MINUTES:s="esriTimeUnitsMinutes";break;case l.UNIT_MONTHS:s="esriTimeUnitsMonths";break;case l.UNIT_WEEKS:s="esriTimeUnitsWeeks";break;case l.UNIT_YEARS:s="esriTimeUnitsYears"}return s}});return i.mixin(l,m),l});