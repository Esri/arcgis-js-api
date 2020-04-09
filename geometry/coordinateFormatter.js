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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/Error","./pe","./Point","./SpatialReference"],(function(e,n,o,t,r,i){function a(e){var n=null;if(e||(e=i.WGS84),e.wkid){if(!(n=t.PeFactory.geogcs(e.wkid)))throw new o("coordinate-formatter:invalid-spatial-reference","wkid is not valid")}else{if(!e.wkt)throw new o("coordinate-formatter:invalid-spatial-reference","wkid and wkt are missing");if(!(n=t.PeFactory.fromString(t.PeDefs.PE_TYPE_GEOGCS,e.wkt)))throw new o("coordinate-formatter:invalid-spatial-reference","wkt is not valid")}return n}function s(e){var n=-1;switch(e){case"automatic":n=t.PeNotationMgrs.PE_MGRS_STYLE_AUTO;break;case"new-180-in-zone-01":n=t.PeNotationMgrs.PE_MGRS_STYLE_NEW|t.PeNotationMgrs.PE_MGRS_180_ZONE_1_PLUS;break;case"new-180-in-zone-60":n=t.PeNotationMgrs.PE_MGRS_STYLE_NEW;break;case"old-180-in-zone-01":n=t.PeNotationMgrs.PE_MGRS_STYLE_OLD|t.PeNotationMgrs.PE_MGRS_180_ZONE_1_PLUS;break;case"old-180-in-zone-60":n=t.PeNotationMgrs.PE_MGRS_STYLE_OLD}return n}function _(e){var n=-1;switch(e){case"latitude-band-indicators":n=t.PeNotationUtm.PE_UTM_OPTS_NONE;break;case"north-south-indicators":n=t.PeNotationUtm.PE_UTM_OPTS_NS}return n}Object.defineProperty(n,"__esModule",{value:!0}),n.isLoaded=function(){return t.isLoaded()},n.isSupported=function(){return t.isSupported()},n.load=function(){return t.load()},n.fromLatitudeLongitude=function(e,n){var o=[];e=e.replace(/\u2032/g,"'");var s=a(n);return t.PeNotationDms.dms_to_geog(s,1,[e],o)?new r(o[0][0],o[0][1],n||i.WGS84):null},n.fromMgrs=function(e,n,o){var _=[],d=s(o);if(-1===d)return console.warn("invalid conversionMode: "+o),null;var u=a(n);return t.PeNotationMgrs.mgrs_to_geog_extended(u,1,[e],d,_)?new r(_[0][0],_[0][1],n||i.WGS84):null},n.fromUsng=function(e,n){var o=[];!n&&/\(.+27/.test(e)&&(n=i.GCS_NAD_1927);var s=a(n);return t.PeNotationUsng.usng_to_geog(s,1,[e],o)?new r(o[0][0],o[0][1],n||i.WGS84):null},n.fromUtm=function(e,n,o){var s=[],d=_(o);if(-1===d)return console.warn("invalid conversionMode: "+o),null;var u=a(n);return t.PeNotationUtm.utm_to_geog(u,1,[e],d,s)?new r(s[0][0],s[0][1],n||i.WGS84):null},n.toLatitudeLongitude=function(e,n,o){void 0===o&&(o=0);var r=[[e.x,e.y]],i=[],s=a(e.spatialReference),_=0;switch(n){case"dd":_=t.PeNotationDms.geog_to_dd(s,1,r,o,i);break;case"ddm":_=t.PeNotationDms.geog_to_ddm(s,1,r,o,i);break;case"dms":_=t.PeNotationDms.geog_to_dms(s,1,r,o,i);break;default:return console.warn("invalid format: "+n),null}return _?i[0]:null},n.toMgrs=function(e,n,o,r){void 0===o&&(o=0),void 0===r&&(r=!1);var i=[[e.x,e.y]],_=[],d=a(e.spatialReference),u=s(n);return-1===u?(console.warn("invalid conversionMode: "+n),null):(r&&(u|=t.PeNotationMgrs.PE_MGRS_ADD_SPACES),t.PeNotationMgrs.geog_to_mgrs_extended(d,1,i,o,!1,u,_)?_[0]:null)},n.toUsng=function(e,n,o){void 0===n&&(n=0),void 0===o&&(o=!1);var r=[[e.x,e.y]],i=[],s=a(e.spatialReference);return t.PeNotationUsng.geog_to_usng(s,1,r,n,!1,o,i)?i[0]:null},n.toUtm=function(e,n,o){void 0===o&&(o=!1);var r=[[e.x,e.y]],i=[],s=a(e.spatialReference),d=_(n);return-1===d?(console.warn("invalid conversionMode: "+n),null):(o&&(d|=t.PeNotationUtm.PE_UTM_OPTS_ADD_SPACES),t.PeNotationUtm.geog_to_utm(s,1,r,d,i)?i[0]:null)}}));