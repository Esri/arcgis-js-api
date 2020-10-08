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

define(["require","exports","tslib","../../request","../../core/urlUtils","../../geometry/support/jsonUtils","./utils"],(function(e,i,s,t,r,n,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.simplify=void 0,i.simplify=function(e,i,u){return s.__awaiter(this,void 0,void 0,(function(){var a,c,f,l,_;return s.__generator(this,(function(d){switch(d.label){case 0:return a="string"==typeof e?r.urlToObject(e):e,c=i[0].spatialReference,f=n.getJsonType(i[0]),l=s.__assign(s.__assign({},u),{query:s.__assign(s.__assign({},a.query),{f:"json",sr:c.wkid?c.wkid:JSON.stringify(c),geometries:JSON.stringify(o.encodeGeometries(i))})}),[4,t(a.path+"/simplify",l)];case 1:return _=d.sent().data,[2,o.decodeGeometries(_.geometries,f,c)]}}))}))}}));