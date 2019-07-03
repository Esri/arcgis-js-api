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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/awaiterHelper","../../core/tsSupport/generatorHelper","../../request","../../core/urlUtils","../../geometry/support/jsonUtils"],function(e,r,t,n,i,o,s,u){function p(e,r,p){return n(this,void 0,void 0,function(){var n,f,l,y,g;return i(this,function(i){switch(i.label){case 0:return n="string"==typeof e?s.urlToObject(e):e,f=r[0].spatialReference,l=u.getJsonType(r[0]),y=t({},p,{query:t({},n.query,{f:"json",sr:f.wkid?f.wkid:JSON.stringify(f),geometries:JSON.stringify(a(r))})}),[4,o(n.path+"/simplify",y)];case 1:return g=i.sent(),[2,c(g.data,l,f)]}})})}function a(e){return{geometryType:u.getJsonType(e[0]),geometries:e.map(function(e){return e.toJSON()})}}function c(e,r,t){var n=u.getGeometryType(r);return e.map(function(e){var r=n.fromJSON(e);return r.spatialReference=t,r})}Object.defineProperty(r,"__esModule",{value:!0}),r.simplify=p});