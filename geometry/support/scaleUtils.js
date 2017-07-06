// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["../../config","../../core/lang","./WKIDUnitConversion","./WKIDUnitStrings"],function(e,t,n,r){function i(t,n,r){return t&&n?t.width/n*(r||o)*a*e.screenDPI:0}var a=39.37,o=20015077/180,u=n,l=r,c={getVerticalUnitValueForSR:function(e){var t=this.getUnitValueForSR(e);return t>1e5?1:t},getVerticalUnitStringForSR:function(e){var t=this.getUnitValueForSR(e);if(t>1e5)return"meter";var n=this.getUnitString(e);return n?n.toLowerCase().replace(/_/g,"-"):"meter"},getUnitValueForSR:function(e){return this.getUnitValue(e)||o},getUnitValue:function(e){var t,n,r;if(e&&("object"==typeof e?(t=e.wkid,n=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(n=e)),t)r=u.values[u[t]];else if(n&&-1!==n.search(/^PROJCS/i)){var i=/UNIT\[([^\]]+)\]\]$/i.exec(n);i&&i[1]&&(r=parseFloat(i[1].split(",")[1]))}return r},getUnitString:function(e){var t,n;return"object"==typeof e?t=e.wkid:"number"==typeof e&&(t=e),t&&(n=l.strings[u[t]]),n},getScale:function(e,n,r){var a,o,u;return arguments.length>1&&t.isDefined(n)&&!n.declaredClass?(a=e,o=n,n=null,u=c.getUnitValue(r)):(a=n||e.extent,o=e.width,u=c.getUnitValue(a&&a.spatialReference)),i(a,o,u)},getResolutionForScale:function(t,n){var r=c.getUnitValueForSR(n);return t/(r*a*e.screenDPI)},getExtentForScale:function(e,t){var n=e.extent,r=e.width,i=c.getResolutionForScale(t,n.spatialReference);return n.clone().expand(i*r/n.width)}};return c});