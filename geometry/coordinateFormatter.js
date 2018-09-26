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

define(["require","exports","../core/Error","./pe","./Point","./SpatialReference"],function(e,n,o,t,r,i){function a(){return t.isLoaded()}function s(){return t.isSupported()}function _(){return t.load()}function d(e,n){var o=[];e=e.replace(/\u2032/g,"'");var a=S(n);return t.PeNotationDms.dms_to_geog(a,1,[e],o)?new r(o[0][0],o[0][1],n||i.WGS84):null}function u(e,n,o){var a=[],s=m(o);if(-1===s)return console.warn("invalid conversionMode: "+o),null;var _=S(n);return t.PeNotationMgrs.mgrs_to_geog_extended(_,1,[e],s,a)?new r(a[0][0],a[0][1],n||i.WGS84):null}function l(e,n){var o=[];!n&&/\(.+27/.test(e)&&(n=i.GCS_NAD_1927);var a=S(n);return t.PeNotationUsng.usng_to_geog(a,1,[e],o)?new r(o[0][0],o[0][1],n||i.WGS84):null}function c(e,n,o){var a=[],s=N(o);if(-1===s)return console.warn("invalid conversionMode: "+o),null;var _=S(n);return t.PeNotationUtm.utm_to_geog(_,1,[e],s,a)?new r(a[0][0],a[0][1],n||i.WGS84):null}function g(e,n,o){void 0===o&&(o=0);var r=[[e.x,e.y]],i=[],a=S(e.spatialReference),s=0;switch(n){case"dd":s=t.PeNotationDms.geog_to_dd(a,1,r,o,i);break;case"ddm":s=t.PeNotationDms.geog_to_ddm(a,1,r,o,i);break;case"dms":s=t.PeNotationDms.geog_to_dms(a,1,r,o,i);break;default:return console.warn("invalid format: "+n),null}return s?i[0]:null}function P(e,n,o,r){void 0===o&&(o=0),void 0===r&&(r=!1);var i=[[e.x,e.y]],a=[],s=S(e.spatialReference),_=m(n);return-1===_?(console.warn("invalid conversionMode: "+n),null):(r&&(_|=t.PeNotationMgrs.PE_MGRS_ADD_SPACES),t.PeNotationMgrs.geog_to_mgrs_extended(s,1,i,o,!1,_,a)?a[0]:null)}function f(e,n,o){void 0===n&&(n=0),void 0===o&&(o=!1);var r=[[e.x,e.y]],i=[],a=S(e.spatialReference);return t.PeNotationUsng.geog_to_usng(a,1,r,n,!1,o,i)?i[0]:null}function v(e,n,o){void 0===o&&(o=!1);var r=[[e.x,e.y]],i=[],a=S(e.spatialReference),s=N(n);return-1===s?(console.warn("invalid conversionMode: "+n),null):(o&&(s|=t.PeNotationUtm.PE_UTM_OPTS_ADD_SPACES),t.PeNotationUtm.geog_to_utm(a,1,r,s,i)?i[0]:null)}function S(e){var n=null;if(e||(e=i.WGS84),e.wkid){if(!(n=t.PeFactory.geogcs(e.wkid)))throw new o("coordinate-formatter:invalid-spatial-reference","wkid is not valid")}else{if(!e.wkt)throw new o("coordinate-formatter:invalid-spatial-reference","wkid and wkt are missing");if(!(n=t.PeFactory.fromString(t.PeDefs.PE_TYPE_GEOGCS,e.wkt)))throw new o("coordinate-formatter:invalid-spatial-reference","wkt is not valid")}return n}function m(e){var n=-1;switch(e){case"automatic":n=t.PeNotationMgrs.PE_MGRS_STYLE_AUTO;break;case"new-180-in-zone-01":n=t.PeNotationMgrs.PE_MGRS_STYLE_NEW|t.PeNotationMgrs.PE_MGRS_180_ZONE_1_PLUS;break;case"new-180-in-zone-60":n=t.PeNotationMgrs.PE_MGRS_STYLE_NEW;break;case"old-180-in-zone-01":n=t.PeNotationMgrs.PE_MGRS_STYLE_OLD|t.PeNotationMgrs.PE_MGRS_180_ZONE_1_PLUS;break;case"old-180-in-zone-60":n=t.PeNotationMgrs.PE_MGRS_STYLE_OLD}return n}function N(e){var n=-1;switch(e){case"latitude-band-indicators":n=t.PeNotationUtm.PE_UTM_OPTS_NONE;break;case"north-south-indicators":n=t.PeNotationUtm.PE_UTM_OPTS_NS}return n}Object.defineProperty(n,"__esModule",{value:!0}),n.isLoaded=a,n.isSupported=s,n.load=_,n.fromLatitudeLongitude=d,n.fromMgrs=u,n.fromUsng=l,n.fromUtm=c,n.toLatitudeLongitude=g,n.toMgrs=P,n.toUsng=f,n.toUtm=v});