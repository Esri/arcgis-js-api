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

define(["require","exports","tslib","../../request","../../geometry/support/jsonUtils","../utils","./utils"],(function(e,t,r,i,n,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.difference=void 0,t.difference=function(e,t,f,u){return r.__awaiter(this,void 0,void 0,(function(){var a,g,c,_;return r.__generator(this,(function(y){return a=t[0].spatialReference,g=s.parseUrl(e),c=r.__assign(r.__assign({},g.query),{f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(o.encodeGeometries(t)),geometry:JSON.stringify({geometryType:n.getJsonType(f),geometry:f.toJSON()})}),_={query:c},u&&(_=r.__assign(r.__assign({},u),_)),[2,i(g.path+"/difference",_).then((function(e){return(e.data.geometries||[]).map((function(e){return n.fromJSON(e).set({spatialReference:a})}))}))]}))}))}}));