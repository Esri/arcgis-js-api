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

define(["../core/declare","dojo/_base/array","dojo/_base/lang","../core/lang","./Renderer"],function(e,r,n,t,o){var a=e(o,{declaredClass:"esri.renderer.ScaleDependentRenderer",constructor:function(e){this.setRendererInfos(e&&e.rendererInfos||[])},setRendererInfos:function(e){return this.rendererInfos=e,this._setRangeType(),this},getSymbol:function(e){var r=this.getRendererInfo(e);return r&&r.renderer&&r.renderer.getSymbol(e)},getRendererInfo:function(e){var r,n=e.getLayer().getMap();return r="zoom"===this.rangeType?this.getRendererInfoByZoom(n.getZoom()):this.getRendererInfoByScale(n.getScale())},getRendererInfoByZoom:function(e){var r,n,t=this.rendererInfos,o=0;do r=t[o],e>=r.minZoom&&e<=r.maxZoom&&(n=r),o++;while(!n&&o<t.length);return n},getRendererInfoByScale:function(e){var r,n,t,o,a,i,s=this.rendererInfos,d=0;do r=s[d],t=r.minScale,o=r.maxScale,a=!t,i=!o,!a&&t>=e&&(a=!0),!i&&e>=o&&(i=!0),a&&i&&(n=r),d++;while(!n&&d<s.length);return n},addRendererInfo:function(e){var r,n,t=0,o=this.rendererInfos,a=e.hasOwnProperty("minZoom")?"minZoom":"minScale",i=o.length;do n=o[t],(i===t||e[a]<n[a])&&(o.splice(t,0,e),this._setRangeType(),r=!0),t++;while(!r&&i>t);return this},_setRangeType:function(){var e=this.rendererInfos,r=e&&e[0];r&&(this.rangeType=r.hasOwnProperty("minZoom")?"zoom":r.hasOwnProperty("minScale")?"scale":"")},toJSON:function(){if("zoom"===this.rangeType)return null;var e=this.rendererInfos||[],o=e[0]&&e[0].minScale,a=n.mixin(this.inherited(arguments),{type:"scaleDependent",minScale:o>0?o:0,rendererInfos:r.map(e,function(e){return t.fixJson({maxScale:e.maxScale>0?e.maxScale:0,renderer:e.renderer&&e.renderer.toJSON()})})});return t.fixJson(a)}});return a});