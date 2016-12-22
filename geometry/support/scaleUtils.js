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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../config","../../core/lang","./WKIDUnitConversion"],function(e,t,n){function i(t,n,i){return t&&n?t.width/n*(i||a)*r*e.screenDPI:0}var r=39.37,a=20015077/180,u=n,l={getUnitValueForSR:function(e){return this.getUnitValue(e)||a},getUnitValue:function(e){var t,n,i;if(e&&("object"==typeof e?(t=e.wkid,n=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(n=e)),t)i=u.values[u[t]];else if(n&&-1!==n.search(/^PROJCS/i)){var r=/UNIT\[([^\]]+)\]\]$/i.exec(n);r&&r[1]&&(i=parseFloat(r[1].split(",")[1]))}return i},getScale:function(e,n,r){var a,u,c;return arguments.length>1&&t.isDefined(n)&&!n.declaredClass?(a=e,u=n,n=null,c=l.getUnitValue(r)):(a=n||e.extent,u=e.width,c=l.getUnitValue(a&&a.spatialReference)),i(a,u,c)},getExtentForScale:function(t,n){var i=t.extent,u=t.width,c=l.getUnitValue(i.get("spatialReference"));return i.clone().expand(n*u/((c||a)*r*e.screenDPI)/i.get("width"))}};return l});