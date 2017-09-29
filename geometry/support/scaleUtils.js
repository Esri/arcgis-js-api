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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["../../config","../../core/lang","../../core/kebabDictionary","./WKIDUnitConversion"],function(e,t,r,n){function i(t,r,n){return t&&r?t.width/r*(n||s)*o*e.screenDPI:0}var o=39.37,s=20015077/180,a=/UNIT\[([^\]]+)\]\]$/i,c=n,l=r({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"},{ignoreUnknown:!0}),u={unitFromRESTJSON:function(e){return l.fromJSON(e.toLowerCase())||null},unitToRESTJSON:function(e){return l.toJSON(e)||null},getMetersPerVerticalUnitForSR:function(e){var t=this.getMetersPerUnitForSR(e);return t>1e5?1:t},getVerticalUnitStringForSR:function(e){var t=this.getMetersPerUnitForSR(e);return t>1e5?"meters":this.getUnitString(e)},getMetersPerUnitForSR:function(e){return this.getMetersPerUnit(e)||s},getMetersPerUnit:function(e){var t,r,n;if(e&&("object"==typeof e?(t=e.wkid,r=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(r=e)),t)n=c.values[c[t]];else if(r&&-1!==r.search(/^PROJCS/i)){var i=a.exec(r);i&&i[1]&&(n=parseFloat(i[1].split(",")[1]))}return n},getUnitString:function(e){var t,r,n;if(e&&("object"==typeof e?(t=e.wkid,r=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(r=e)),t)n=c.units[c[t]];else if(r&&-1!==r.search(/^PROJCS/i)){var i=a.exec(r);i&&i[1]&&(i=/[\\"\\']{1}([^\\"\\']+)/.exec(i[1]),n=i&&i[1])}return n?this.unitFromRESTJSON(n):null},getScale:function(e,r,n){var o,s,a;return arguments.length>1&&t.isDefined(r)&&!r.declaredClass?(o=e,s=r,r=null,a=u.getMetersPerUnit(n)):(o=r||e.extent,s=e.width,a=u.getMetersPerUnit(o&&o.spatialReference)),i(o,s,a)},getResolutionForScale:function(t,r){var n=u.getMetersPerUnitForSR(r);return t/(n*o*e.screenDPI)},getExtentForScale:function(e,t){var r=e.extent,n=e.width,i=u.getResolutionForScale(t,r.spatialReference);return r.clone().expand(i*n/r.width)}};return u});