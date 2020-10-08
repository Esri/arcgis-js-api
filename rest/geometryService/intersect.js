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

define(["require","exports","tslib","../../request","../../geometry/support/jsonUtils","../utils","./utils"],(function(e,t,r,i,n,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.intersect=void 0,t.intersect=function(e,t,u,a){return r.__awaiter(this,void 0,void 0,(function(){var f,c,g,p;return r.__generator(this,(function(y){return f=t[0].spatialReference,c=s.parseUrl(e),g=r.__assign(r.__assign({},c.query),{f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify(o.encodeGeometries(t)),geometry:JSON.stringify({geometryType:n.getJsonType(u),geometry:u.toJSON()})}),p=s.asValidOptions(g,a),[2,i(c.path+"/intersect",p).then((function(e){return(e.data.geometries||[]).map((function(e){return n.fromJSON(e).set({spatialReference:f})}))}))]}))}))}}));