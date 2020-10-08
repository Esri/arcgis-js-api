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

define(["require","exports","tslib","../../request","../../geometry/support/jsonUtils","../utils"],(function(e,t,n,i,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.densify=void 0,t.densify=function(e,t,o){return n.__awaiter(this,void 0,void 0,(function(){var a,u,f,_;return n.__generator(this,(function(d){return a=t.geometries[0].spatialReference,u=s.parseUrl(e),f=n.__assign(n.__assign(n.__assign({},u.query),{f:"json"}),t.toJSON()),_=s.asValidOptions(f,o),[2,i(u.path+"/densify",_).then((function(e){return(e.data.geometries||[]).map((function(e){return r.fromJSON(e).set({spatialReference:a})}))}))]}))}))}}));