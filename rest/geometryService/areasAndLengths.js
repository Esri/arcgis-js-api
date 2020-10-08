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

define(["require","exports","tslib","../../request","../utils"],(function(e,n,t,r,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.areasAndLengths=void 0,n.areasAndLengths=function(e,n,i){return t.__awaiter(this,void 0,void 0,(function(){var a,u,o;return t.__generator(this,(function(_){return a=s.parseUrl(e),u=t.__assign(t.__assign(t.__assign({},a.query),{f:"json"}),n.toJSON()),o=s.asValidOptions(u,i),[2,r(a.path+"/areasAndLengths",o).then((function(e){return e.data}))]}))}))}}));