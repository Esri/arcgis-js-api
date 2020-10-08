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

define(["require","exports","../../../core/lang","../../../core/maybe","../../support/utils"],(function(e,s,a,t,p){"use strict";return function(){function e(e){this.name=null,this.label=null,this.description=null,this.supportedBasemaps=null,this.basemapGroups=null,this.schemes=null;var s=e.name,a=e.label,t=e.description,r=e.schemes;this.name=s,this.label=a,this.description=t,this.schemes=r;var i=e.basemapGroups||p.defaultBasemapGroups,m=[];if(i)for(var n in i)m=m.concat(i[n]);this.supportedBasemaps=m,this.basemapGroups=i}return e.prototype.isBasemapSupported=function(e){var s=p.getBasemapId(e,this.supportedBasemaps);return!!(s&&this.supportedBasemaps.indexOf(s)>-1)},e.prototype.getRawSchemes=function(e){var s=function(e,s,a){var r=null,i=null;if(s&&(r=p.getBasemapId(s,e,!1))){var m=p.getBasemapGroup(r);t.isSome(m)&&(i=m)}return!r&&a&&(r="dark"===a?"dark-gray":"gray",i=a),r||i||(r="gray",i="light"),{basemapId:r,basemapTheme:i}}(this.supportedBasemaps,e.basemap,e.basemapTheme),r=s.basemapId,i=s.basemapTheme,m=i;if(r){var n=p.getBasemapGroup(r,this.basemapGroups);t.isSome(n)&&(m=n)}var o=e.geometryType;"multipoint"===o?o="point":"mesh"===o&&(o="polygon");var u=this.schemes[o]||this.schemes.default;return{schemesInfo:a.clone(u[m]),basemapId:r,basemapTheme:i}},e}()}));