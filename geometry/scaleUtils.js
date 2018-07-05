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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","../kernel","../config","../WKIDUnitConversion"],function(e,t,n,r,i){function a(e,t,n){return e&&t?e.getWidth()/t*(n||o)*u*c.screenDPI:0}function l(e,t,n,r,i){var a;return a=i?n:g.values[g[n]],e.expand(r*t/((a||o)*u*c.screenDPI)/e.getWidth())}var u=39.37,o=6370997*Math.PI/180,c=r.defaults,g=i,s={getUnitValueForSR:function(e){return this.getUnitValue(e)||o},getUnitValue:function(e){var t,n,r;if(e&&("object"==typeof e?(t=e.wkid,n=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(n=e)),t)r=g.values[g[t]];else if(n&&-1!==n.search(/^PROJCS/i)){var i=/UNIT\[([^\]]+)\]\]$/i.exec(n);i&&i[1]&&(r=parseFloat(i[1].split(",")[1]))}return r},getScale:function(e,t,n){var r,i,l;return arguments.length>1&&null!=t&&!t.declaredClass?(r=e,i=t,t=null,l=s.getUnitValue(n)):(r=t||e.extent,i=e.width,l=s.getUnitValue(r&&r.spatialReference)),a(r,i,l)},getExtentForScale:function(e,t,n){return l(n||e.extent,e.width,s.getUnitValue(e.spatialReference),t,!0)}};return t("extend-esri")&&(e.mixin(e.getObject("geometry",!0,n),s),n.geometry._getScale=a,n.geometry._getExtentForScale=l),s});