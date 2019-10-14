// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/lang","../../../../core/maybe","../../support/utils"],function(e,s,a,t,p,r){function i(e,s,a){var t=null,i=null;if(s&&(t=r.getBasemapId(s,e,!1))){var m=r.getBasemapGroup(t);p.isSome(m)&&(i=m)}return!t&&a&&(t="dark"===a?"dark-gray":"gray",i=a),t||i||(t="gray",i="light"),{basemapId:t,basemapTheme:i}}return function(){function e(e){this.name=null,this.label=null,this.description=null,this.supportedBasemaps=null,this.basemapGroups=null,this.schemes=null;var s=e.name,a=e.label,t=e.description,p=e.schemes;this.name=s,this.label=a,this.description=t,this.schemes=p;var i=e.basemapGroups||r.defaultBasemapGroups,m=[];if(i)for(var o in i)m=m.concat(i[o]);this.supportedBasemaps=m,this.basemapGroups=i}return e.prototype.isBasemapSupported=function(e){var s=r.getBasemapId(e,this.supportedBasemaps);return!!(s&&this.supportedBasemaps.indexOf(s)>-1)},e.prototype.getRawSchemes=function(e){var s=i(this.supportedBasemaps,e.basemap,e.basemapTheme),a=s.basemapId,m=s.basemapTheme,o=m;if(a){var n=r.getBasemapGroup(a,this.basemapGroups);p.isSome(n)&&(o=n)}var u=e.geometryType;"multipoint"===u?u="point":"mesh"===u&&(u="polygon");var h=this.schemes[u]||this.schemes.default;return{schemesInfo:t.clone(h[o]),basemapId:a,basemapTheme:m}},e}()});