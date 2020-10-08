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

define(["require","exports","tslib","../../geometry","../../request","./../utils","./utils"],(function(e,t,i,r,n,o,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.autoComplete=void 0,t.autoComplete=function(e,t,a,u){return i.__awaiter(this,void 0,void 0,(function(){var l,f,g,p;return i.__generator(this,(function(c){return l=t[0].spatialReference,f=o.parseUrl(e),g=i.__assign(i.__assign({},f.query),{f:"json",sr:JSON.stringify(l.toJSON()),polygons:JSON.stringify(s.encodeGeometries(t).geometries),polylines:JSON.stringify(s.encodeGeometries(a).geometries)}),p=o.asValidOptions(g,u),[2,n(f.path+"/autoComplete",p).then((function(e){return(e.data.geometries||[]).map((function(e){var t=e.rings;return new r.Polygon({spatialReference:l,rings:t})}))}))]}))}))}}));