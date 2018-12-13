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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../config","../../core/compilerUtils","../../core/kebabDictionary","../../core/wgs84Constants","./WKIDUnitConversion"],function(e,t,r,n,s,a,i){function c(e){return p.fromJSON(e.toLowerCase())||null}function o(e){return p.toJSON(e)||null}function l(e){var t=f(e);return t>1e5?1:t}function u(e){return f(e)>1e5?"meters":k(e)}function f(e){return d(e)||t.decDegToMeters}function d(e){var t,r,n;if(e&&("object"==typeof e?(t=e.wkid,r=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(r=e)),t)n=S.values[S[t]];else if(r&&-1!==r.search(/^PROJCS/i)){var s=m.exec(r);s&&s[1]&&(n=parseFloat(s[1].split(",")[1]))}return n}function k(e){var t,r,n;if(e&&("object"==typeof e?(t=e.wkid,r=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(r=e)),t)n=S.units[S[t]];else if(r&&-1!==r.search(/^PROJCS/i)){var s=m.exec(r);s&&s[1]&&(s=/[\\"\\']{1}([^\\"\\']+)/.exec(s[1]),n=s&&s[1])}return n?c(n):null}function g(e){if(!e)return null;var t=k(e);switch(t){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return"imperial";case"50-kilometers":case"150-kilometers":case"meters":return"metric";case null:case void 0:return null;default:n.neverReached(t)}return null}function _(e,n){var s=n||e.extent,a=e.width,i=d(s&&s.spatialReference);return s&&a?s.width/a*(i||t.decDegToMeters)*t.inchesPerMeter*r.screenDPI:0}function h(e,n){return e/(f(n)*t.inchesPerMeter*r.screenDPI)}function y(e,t){var r=e.extent,n=e.width,s=h(t,r.spatialReference);return r.clone().expand(s*n/r.width)}Object.defineProperty(t,"__esModule",{value:!0}),t.inchesPerMeter=39.37,t.decDegToMeters=a.wgs84Radius*Math.PI/180;var m=/UNIT\[([^\]]+)\]\]$/i,S=i,p=s.strict()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"});t.unitFromRESTJSON=c,t.unitToRESTJSON=o,t.getMetersPerVerticalUnitForSR=l,t.getVerticalUnitStringForSR=u,t.getMetersPerUnitForSR=f,t.getMetersPerUnit=d,t.getUnitString=k,t.getDefaultUnitSystem=g,t.getScale=_,t.getResolutionForScale=h,t.getExtentForScale=y});