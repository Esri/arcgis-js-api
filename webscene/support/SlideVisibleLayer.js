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

define(["require","exports","tslib","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType"],(function(e,r,t,s,o,i,u){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.SlideVisibleLayer=void 0;var d=function(e){function r(r){var t=e.call(this,r)||this;return t.id="",t.sublayerIds=null,t}var s;return t.__extends(r,e),s=r,r.prototype.clone=function(){return new s({id:this.id,sublayerIds:o.clone(this.sublayerIds)})},t.__decorate([i.property({type:String,json:{write:!0}})],r.prototype,"id",void 0),t.__decorate([i.property({type:[u.Integer],json:{read:{source:"subLayerIds"},write:{target:"subLayerIds"}}})],r.prototype,"sublayerIds",void 0),r=s=t.__decorate([i.subclass("esri.webscene.support.SlideVisibleLayer")],r)}(s.JSONSupport);r.SlideVisibleLayer=d,r.default=d}));