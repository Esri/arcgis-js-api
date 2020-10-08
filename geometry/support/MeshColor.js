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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,r,o,t,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.MeshColor=void 0;var i=function(e){function r(r){return e.call(this,r)||this}return o.__extends(r,e),r.prototype.clone=function(){throw new Error("not implemented")},o.__decorate([n.property({readOnly:!0,json:{read:!1,write:{isRequired:!0,ignoreOrigin:!0,enabled:!0}}})],r.prototype,"type",void 0),r=o.__decorate([n.subclass("esri.geometry.support.MeshColor")],r)}(t.JSONSupport);r.MeshColor=i,r.default=i}));