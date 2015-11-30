// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/lang","dojo/has","../kernel","../config","../lang","../WKIDUnitConversion"],function(e,t,n,r,i,a){function l(e,t,n){return e&&t?e.getWidth()/t*(n||g)*o*c.screenDPI:0}function u(e,t,n,r,i){var a;return a=i?n:s.values[s[n]],e.expand(r*t/((a||g)*o*c.screenDPI)/e.getWidth())}var o=39.37,g=6370997*Math.PI/180,c=r.defaults,s=a,f={getUnitValueForSR:function(e){return this.getUnitValue(e)||g},getUnitValue:function(e){var t,n,r;if(e&&("object"==typeof e?(t=e.wkid,n=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(n=e)),t)r=s.values[s[t]];else if(n&&-1!==n.search(/^PROJCS/i)){var i=/UNIT\[([^\]]+)\]\]$/i.exec(n);i&&i[1]&&(r=parseFloat(i[1].split(",")[1]))}return r},getScale:function(e,t,n){var r,a,u;return arguments.length>1&&i.isDefined(t)&&!t.declaredClass?(r=e,a=t,t=null,u=f.getUnitValue(n)):(r=t||e.extent,a=e.width,u=f.getUnitValue(r&&r.spatialReference)),l(r,a,u)},getExtentForScale:function(e,t,n){return u(n||e.extent,e.width,f.getUnitValue(e.spatialReference),t,!0)}};return t("extend-esri")&&(e.mixin(e.getObject("geometry",!0,n),f),n.geometry._getScale=l,n.geometry._getExtentForScale=u),f});