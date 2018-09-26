// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../config","../../core/kebabDictionary","../../core/wgs84Constants","./WKIDUnitConversion"],function(e,t,r,n,s,a){function i(e){return S.fromJSON(e.toLowerCase())||null}function c(e){return S.toJSON(e)||null}function o(e){var t=u(e);return t>1e5?1:t}function l(e){return u(e)>1e5?"meters":d(e)}function u(e){return f(e)||t.decDegToMeters}function f(e){var t,r,n;if(e&&("object"==typeof e?(t=e.wkid,r=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(r=e)),t)n=m.values[m[t]];else if(r&&-1!==r.search(/^PROJCS/i)){var s=h.exec(r);s&&s[1]&&(n=parseFloat(s[1].split(",")[1]))}return n}function d(e){var t,r,n;if(e&&("object"==typeof e?(t=e.wkid,r=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(r=e)),t)n=m.units[m[t]];else if(r&&-1!==r.search(/^PROJCS/i)){var s=h.exec(r);s&&s[1]&&(s=/[\\"\\']{1}([^\\"\\']+)/.exec(s[1]),n=s&&s[1])}return n?i(n):null}function k(e){if(!e)return null;var t=d(e);switch(t){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return"imperial";case"50-kilometers":case"150-kilometers":case"meters":return"metric";case null:case void 0:return null}return null}function g(e,n){var s=n||e.extent,a=e.width,i=f(s&&s.spatialReference);return s&&a?s.width/a*(i||t.decDegToMeters)*t.inchesPerMeter*r.screenDPI:0}function _(e,n){return e/(u(n)*t.inchesPerMeter*r.screenDPI)}function y(e,t){var r=e.extent,n=e.width,s=_(t,r.spatialReference);return r.clone().expand(s*n/r.width)}Object.defineProperty(t,"__esModule",{value:!0}),t.inchesPerMeter=39.37,t.decDegToMeters=s.wgs84Radius*Math.PI/180;var h=/UNIT\[([^\]]+)\]\]$/i,m=a,S=n.strict()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"});t.unitFromRESTJSON=i,t.unitToRESTJSON=c,t.getMetersPerVerticalUnitForSR=o,t.getVerticalUnitStringForSR=l,t.getMetersPerUnitForSR=u,t.getMetersPerUnit=f,t.getUnitString=d,t.getDefaultUnitSystem=k,t.getScale=g,t.getResolutionForScale=_,t.getExtentForScale=y});