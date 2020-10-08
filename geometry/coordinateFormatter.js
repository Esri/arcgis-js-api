// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../core/Error","./pe","./Point","./SpatialReference"],(function(e,o,t,n,r,i){"use strict";function a(e){var o=null;if(e||(e=i.WGS84),e.wkid){if(!(o=n.PeFactory.geogcs(e.wkid)))throw new t("coordinate-formatter:invalid-spatial-reference","wkid is not valid")}else{if(!e.wkt)throw new t("coordinate-formatter:invalid-spatial-reference","wkid and wkt are missing");if(!(o=n.PeFactory.fromString(n.PeDefs.PE_TYPE_GEOGCS,e.wkt)))throw new t("coordinate-formatter:invalid-spatial-reference","wkt is not valid")}return o}function s(e){var o=-1;switch(e){case"automatic":o=n.PeNotationMgrs.PE_MGRS_STYLE_AUTO;break;case"new-180-in-zone-01":o=n.PeNotationMgrs.PE_MGRS_STYLE_NEW|n.PeNotationMgrs.PE_MGRS_180_ZONE_1_PLUS;break;case"new-180-in-zone-60":o=n.PeNotationMgrs.PE_MGRS_STYLE_NEW;break;case"old-180-in-zone-01":o=n.PeNotationMgrs.PE_MGRS_STYLE_OLD|n.PeNotationMgrs.PE_MGRS_180_ZONE_1_PLUS;break;case"old-180-in-zone-60":o=n.PeNotationMgrs.PE_MGRS_STYLE_OLD}return o}function d(e){var o=-1;switch(e){case"latitude-band-indicators":o=n.PeNotationUtm.PE_UTM_OPTS_NONE;break;case"north-south-indicators":o=n.PeNotationUtm.PE_UTM_OPTS_NS}return o}Object.defineProperty(o,"__esModule",{value:!0}),o.toUtm=o.toUsng=o.toMgrs=o.toLatitudeLongitude=o.fromUtm=o.fromUsng=o.fromMgrs=o.fromLatitudeLongitude=o.load=o.isSupported=o.isLoaded=void 0,o.isLoaded=function(){return n.isLoaded()},o.isSupported=function(){return n.isSupported()},o.load=function(){return n.load()},o.fromLatitudeLongitude=function(e,o){var t=[];e=e.replace(/\u2032/g,"'");var s=a(o);return n.PeNotationDms.dms_to_geog(s,1,[e],t)?new r(t[0][0],t[0][1],o||i.WGS84):null},o.fromMgrs=function(e,o,t){var d=[],u=s(t);if(-1===u)return console.warn("invalid conversionMode: "+t),null;var _=a(o);return n.PeNotationMgrs.mgrs_to_geog_extended(_,1,[e],u,d)?new r(d[0][0],d[0][1],o||i.WGS84):null},o.fromUsng=function(e,o){var t=[];!o&&/\(.+27/.test(e)&&(o=i.GCS_NAD_1927);var s=a(o);return n.PeNotationUsng.usng_to_geog(s,1,[e],t)?new r(t[0][0],t[0][1],o||i.WGS84):null},o.fromUtm=function(e,o,t){var s=[],u=d(t);if(-1===u)return console.warn("invalid conversionMode: "+t),null;var _=a(o);return n.PeNotationUtm.utm_to_geog(_,1,[e],u,s)?new r(s[0][0],s[0][1],o||i.WGS84):null},o.toLatitudeLongitude=function(e,o,t){void 0===t&&(t=0);var r=[[e.x,e.y]],i=[],s=a(e.spatialReference),d=0;switch(o){case"dd":d=n.PeNotationDms.geog_to_dd(s,1,r,t,i);break;case"ddm":d=n.PeNotationDms.geog_to_ddm(s,1,r,t,i);break;case"dms":d=n.PeNotationDms.geog_to_dms(s,1,r,t,i);break;default:return console.warn("invalid format: "+o),null}return d?i[0]:null},o.toMgrs=function(e,o,t,r){void 0===t&&(t=0),void 0===r&&(r=!1);var i=[[e.x,e.y]],d=[],u=a(e.spatialReference),_=s(o);return-1===_?(console.warn("invalid conversionMode: "+o),null):(r&&(_|=n.PeNotationMgrs.PE_MGRS_ADD_SPACES),n.PeNotationMgrs.geog_to_mgrs_extended(u,1,i,t,!1,_,d)?d[0]:null)},o.toUsng=function(e,o,t){void 0===o&&(o=0),void 0===t&&(t=!1);var r=[[e.x,e.y]],i=[],s=a(e.spatialReference);return n.PeNotationUsng.geog_to_usng(s,1,r,o,!1,t,i)?i[0]:null},o.toUtm=function(e,o,t){void 0===t&&(t=!1);var r=[[e.x,e.y]],i=[],s=a(e.spatialReference),u=d(o);return-1===u?(console.warn("invalid conversionMode: "+o),null):(t&&(u|=n.PeNotationUtm.PE_UTM_OPTS_ADD_SPACES),n.PeNotationUtm.geog_to_utm(s,1,r,u,i)?i[0]:null)}}));