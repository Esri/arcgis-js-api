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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["./scalePreviewUtil","dojo/_base/array","dojo/_base/declare","dojo/Stateful","dojo/i18n!../../nls/jsapi"],function(e,n,a,i,t){var l=a(i,{_scaleRangeStops:[{id:"room",minScale:100},{id:"rooms",minScale:400},{id:"smallBuilding",minScale:800},{id:"building",minScale:1999},{id:"buildings",minScale:3999},{id:"street",minScale:7499},{id:"streets",minScale:14999},{id:"neighborhood",minScale:29999},{id:"town",minScale:59999},{id:"city",minScale:119999},{id:"cities",minScale:249999},{id:"metropolitanArea",minScale:499999},{id:"county",minScale:999999},{id:"counties",minScale:1999999},{id:"state",minScale:3999999},{id:"states",minScale:6999999},{id:"country",minScale:14999999},{id:"countries",minScale:34999999},{id:"continent",minScale:99999999},{id:"world",minScale:147914382}],_allRanges:null,_ranges:null,length:0,constructor:function(){this._allRanges=this.getScaleRanges()},_scaleRangeBoundsSetter:function(e){var n=this.getScaleRanges(e.maxScale,e.minScale);this._ranges=n,this.length=n.length},getScaleRanges:function(e,n){var a,i,t,l=this._scaleRangeStops,r=l.length;e=e>=0?e:0,n=n>0?n:l[r-1].minScale,a=e,i=[];for(var c=0;r>c;c++){var s=Math.min(l[c].minScale,n);t=Math.min(s,n),s>=e&&n>a&&i.push({id:l[c].id,maxScale:Math.max(a,e),minScale:t}),a=t+1}return i.reverse(),i},getScalePreviewSpriteBackgroundPosition:function(n){return n=this._toFullRangeIndex(n),e.getScalePreviewSpriteBackgroundPosition(n)},_toFullRangeIndex:function(e){for(var n=this.findScaleRangeByIndex(Math.floor(e)),a=this._allRanges,i=a.length,t=0,l=0;i>l;l++)if(a[l].id===n.id){t=l;break}return t},getScaleRangeLabel:function(e){var n=this._ranges[this._clampScaleRangeIndex(e)];return t.widgets.visibleScaleRangeSlider.scaleRangeLabels[n.id]},findScaleRange:function(e){var n,a,i=this._ranges;if(e>=i[0].maxScale)return i[0];if(e<=i[i.length-1].minScale)return i[i.length-1];for(var t=0;t<i.length;t++)if(a=i[t],e>=a.maxScale&&e<=a.minScale){n=a;break}return n},findScaleRangeByIndex:function(e){return e=this._clampScaleRangeIndex(e),this._ranges[e]},clampScale:function(e){return Math.min(this.get("minScale"),Math.max(this.get("maxScale"),e))},_minScaleGetter:function(){return this.get("firstRange").minScale},_maxScaleGetter:function(){return this.get("lastRange").maxScale},_firstRangeGetter:function(){return this._ranges[0]},_lastRangeGetter:function(){var e=this._ranges,n=e.length-1;return e[n]},clampMinScale:function(e){return 0===e?this.get("minScale"):this.clampScale(e)},clampMaxScale:function(e){return this.clampScale(e)},_clampScaleRangeIndex:function(e){var n=0;if(n>=e)return n;var a=this._ranges.length-1;return e>a?a:Math.floor(e)},scaleToRangeIndex:function(e){return n.indexOf(this._ranges,this.findScaleRange(e))},contains:function(e){for(var n,a=this._ranges,i=!1,t=0;t<a.length;t++)if(n=a[t],e>=n.maxScale&&e<=n.minScale){i=!0;break}return i}});return l.getScalePreviewSource=function(n){return e.getScalePreviewSource(n)},l});