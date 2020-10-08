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

define(["require","exports","tslib","../../request","../utils"],(function(t,e,n,i,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.distance=void 0,e.distance=function(t,e,s){return n.__awaiter(this,void 0,void 0,(function(){var a,u,o;return n.__generator(this,(function(d){return a=r.parseUrl(t),u=n.__assign(n.__assign(n.__assign({},a.query),{f:"json"}),e.toJSON()),o=r.asValidOptions(u,s),[2,i(a.path+"/distance",o).then((function(t){var e=t.data;return e&&e.distance}))]}))}))}}));