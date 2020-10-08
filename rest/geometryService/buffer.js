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

define(["require","exports","tslib","../../geometry","../../request","../utils"],(function(e,r,t,n,i,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.buffer=void 0,r.buffer=function(e,r,a){return t.__awaiter(this,void 0,void 0,(function(){var o,u,f,_;return t.__generator(this,(function(c){return o=s.parseUrl(e),u=t.__assign(t.__assign(t.__assign({},o.query),{f:"json"}),r.toJSON()),f=r.outSpatialReference||r.geometries[0].spatialReference,_=s.asValidOptions(u,a),[2,i(o.path+"/buffer",_).then((function(e){return(e.data.geometries||[]).map((function(e){var r=e.rings;return new n.Polygon({spatialReference:f,rings:r})}))}))]}))}))}}));