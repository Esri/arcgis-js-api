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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/lang","./utils"],function(e,t,s,r,a){function i(e,t){for(var s in t)if(t[s].indexOf(e)>-1)return s}var o={light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]};return function(){function e(e){this.name=null,this.label=null,this.description=null,this.supportedBasemaps=null,this.basemapGroups=null,this.schemes=null;var t=e.name,s=e.label,r=e.description,a=e.schemes;this.name=t,this.label=s,this.description=r,this.schemes=a;var i=e.basemapGroups||o,p=[];if(i)for(var n in i)p=p.concat(i[n]);this.supportedBasemaps=p,this.basemapGroups=i}return e.prototype.isBasemapSupported=function(e){var t=a.getBasemapId(e,this.supportedBasemaps);return!!(t&&this.supportedBasemaps.indexOf(t)>-1)},e.prototype.getRawSchemes=function(e){var t=a.getBasemapId(e.basemap,this.supportedBasemaps);if(this.isBasemapSupported(t)){var s=i(t,this.basemapGroups),o=e.geometryType;"multipoint"===o?o="point":"mesh"===o&&(o="polygon");var p=this.schemes[o]||this.schemes.default;return r.clone(p[s])}},e}()});