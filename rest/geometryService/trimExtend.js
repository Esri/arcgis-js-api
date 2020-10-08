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

define(["require","exports","tslib","../../geometry","../../request","../utils","../../tasks/operations/trimExtend","../../tasks/support/TrimExtendParameters"],(function(t,e,r,n,i,s,a,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.trimExtend=void 0,e.trimExtend=function(t,e,u){return r.__awaiter(this,void 0,void 0,(function(){var d,m,p,_,f;return r.__generator(this,(function(c){return e=o.from(e),d=a.trimExtendToRESTParameters(e),m=s.parseUrl(t),p=r.__assign(r.__assign(r.__assign({},m.query),{f:"json"}),d),_=e.sr,f=s.asValidOptions(p,u),[2,i(m.path+"/trimExtend",f).then((function(t){return(t.data.geometries||[]).map((function(t){var e=t.paths;return new n.Polyline({spatialReference:_,paths:e})}))}))]}))}))}}));