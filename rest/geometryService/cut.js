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

define(["require","exports","tslib","../../geometry","../../request","../../geometry/support/jsonUtils","../utils"],(function(e,t,r,s,i,n,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cut=void 0,t.cut=function(e,t,o,a){return r.__awaiter(this,void 0,void 0,(function(){var c,g,f,_,p,y,d;return r.__generator(this,(function(l){switch(l.label){case 0:return c=u.parseUrl(e),g=t[0].spatialReference,f=r.__assign(r.__assign({},a),{query:r.__assign(r.__assign({},c.query),{f:"json",sr:JSON.stringify(g),target:JSON.stringify({geometryType:n.getJsonType(t[0]),geometries:t}),cutter:JSON.stringify(o)})}),[4,i(c.path+"/cut",f)];case 1:return _=l.sent(),p=_.data,y=p.cutIndexes,d=p.geometries,[2,{cutIndexes:y,geometries:(void 0===d?[]:d).map((function(e){var t=s.fromJSON(e);return t.spatialReference=g,t}))}]}}))}))}}));