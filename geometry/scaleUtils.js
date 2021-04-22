// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","../kernel","../config","../WKIDUnitConversion"],(function(e,t,n,r,i){var a=6370997*Math.PI/180,l=r.defaults,u=i;function o(e,t,n){return e&&t?e.getWidth()/t*(n||a)*39.37*l.screenDPI:0}function c(e,t,n,r,i){var o;return o=i?n:u.values[u[n]],e.expand(r*t/(39.37*(o||a)*l.screenDPI)/e.getWidth())}var g={getUnitValueForSR:function(e){return this.getUnitValue(e)||a},getUnitValue:function(e){var t,n,r;if(e&&("object"==typeof e?(t=e.wkid,n=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(n=e)),t)r=u.values[u[t]];else if(n&&-1!==n.search(/^PROJCS/i)){var i=/UNIT\[([^\]]+)\]\]$/i.exec(n);i&&i[1]&&(r=parseFloat(i[1].split(",")[1]))}return r},getScale:function(e,t,n){var r,i,a;return arguments.length>1&&null!=t&&!t.declaredClass?(r=e,i=t,t=null,a=g.getUnitValue(n)):(r=t||e.extent,i=e.width,a=g.getUnitValue(r&&r.spatialReference)),o(r,i,a)},getExtentForScale:function(e,t,n){return c(n||e.extent,e.width,g.getUnitValue(e.spatialReference),t,!0)}};return t("extend-esri")&&(e.mixin(e.getObject("geometry",!0,n),g),n.geometry._getScale=o,n.geometry._getExtentForScale=c),g}));