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

define(["require","exports","tslib","../../request","../../geometry/support/jsonUtils","../utils","./utils"],(function(e,t,i,n,r,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.union=void 0,t.union=function(e,t,u){return i.__awaiter(this,void 0,void 0,(function(){var a,f,c,l;return i.__generator(this,(function(_){return a=t[0].spatialReference,f=s.parseUrl(e),c=i.__assign(i.__assign({},f.query),{f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(o.encodeGeometries(t))}),l=s.asValidOptions(c,u),[2,n(f.path+"/union",l).then((function(e){var t=e.data;return r.fromJSON(t.geometry).set({spatialReference:a})}))]}))}))}}));