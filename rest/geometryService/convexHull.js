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

define(["require","exports","tslib","../../request","../../geometry/support/jsonUtils","../utils","./utils"],(function(e,t,r,i,n,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.convexHull=void 0,t.convexHull=function(e,t,u){return r.__awaiter(this,void 0,void 0,(function(){var a,l,c,f;return r.__generator(this,(function(_){return a=t[0].spatialReference,l=s.parseUrl(e),c=r.__assign(r.__assign({},l.query),{f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(o.encodeGeometries(t))}),f=s.asValidOptions(c,u),[2,i(l.path+"/convexHull",f).then((function(e){var t=e.data;return n.fromJSON(t.geometry).set({spatialReference:a})}))]}))}))}}));