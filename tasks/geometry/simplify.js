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

define(["require","exports","tslib","../../request","../../core/urlUtils","../../geometry/support/jsonUtils"],(function(e,t,r,i,n,s){"use strict";function o(e){return{geometryType:s.getJsonType(e[0]),geometries:e.map((function(e){return e.toJSON()}))}}function u(e,t,r){var i=s.getGeometryType(t);return e.map((function(e){var t=i.fromJSON(e);return t.spatialReference=r,t}))}Object.defineProperty(t,"__esModule",{value:!0}),t.simplify=void 0,t.simplify=function(e,t,a){return r.__awaiter(this,void 0,void 0,(function(){var f,c,p,y;return r.__generator(this,(function(g){switch(g.label){case 0:return f="string"==typeof e?n.urlToObject(e):e,c=t[0].spatialReference,p=s.getJsonType(t[0]),y=r.__assign(r.__assign({},a),{query:r.__assign(r.__assign({},f.query),{f:"json",sr:c.wkid?c.wkid:JSON.stringify(c),geometries:JSON.stringify(o(t))})}),[4,i(f.path+"/simplify",y)];case 1:return[2,u(g.sent().data,p,c)]}}))}))}}));