// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","./Renderer"],(function(e,r,n,o,t,a,s){var i=e(s,{declaredClass:"esri.renderer.ScaleDependentRenderer",constructor:function(e){this.setRendererInfos(e&&e.rendererInfos||[])},setRendererInfos:function(e){return this.rendererInfos=e,this._setRangeType(),this},getSymbol:function(e){var r=this.getRendererInfo(e);return r&&r.renderer&&r.renderer.getSymbol(e)},getRendererInfo:function(e){var r=e.getLayer().getMap();return"zoom"===this.rangeType?this.getRendererInfoByZoom(r.getZoom()):this.getRendererInfoByScale(r.getScale())},getRendererInfoByZoom:function(e){var r,n,o=this.rendererInfos,t=0;do{e>=(r=o[t]).minZoom&&e<=r.maxZoom&&(n=r),t++}while(!n&&t<o.length);return n},getRendererInfoByScale:function(e){var r,n,o,t,a,s,i=this.rendererInfos,d=0;do{!(a=!(o=(r=i[d]).minScale))&&e<=o&&(a=!0),!(s=!(t=r.maxScale))&&e>=t&&(s=!0),a&&s&&(n=r),d++}while(!n&&d<i.length);return n},addRendererInfo:function(e){var r,n,o=0,t=this.rendererInfos,a=e.hasOwnProperty("minZoom")?"minZoom":"minScale",s=t.length;do{n=t[o],(s===o||e[a]<n[a])&&(t.splice(o,0,e),this._setRangeType(),r=!0),o++}while(!r&&o<s);return this},_setRangeType:function(){var e=this.rendererInfos,r=e&&e[0];r&&(this.rangeType=r.hasOwnProperty("minZoom")?"zoom":r.hasOwnProperty("minScale")?"scale":"")},toJson:function(){if("zoom"===this.rangeType)return null;var e=this.rendererInfos||[],o=e[0]&&e[0].minScale,t=n.mixin(this.inherited(arguments),{type:"scaleDependent",minScale:o>0?o:0,rendererInfos:r.map(e,(function(e){return a.fixJson({maxScale:e.maxScale>0?e.maxScale:0,renderer:e.renderer&&e.renderer.toJson()})}))});return a.fixJson(t)}});return o("extend-esri")&&n.setObject("renderer.ScaleDependentRenderer",i,t),i}));