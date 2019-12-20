// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType"],function(e,r,t,o,s,p,u,i){Object.defineProperty(r,"__esModule",{value:!0});var c=function(e){function r(r){var t=e.call(this,r)||this;return t.id="",t.sublayerIds=null,t}t(r,e),s=r,r.prototype.clone=function(){return new s({id:this.id,sublayerIds:p.clone(this.sublayerIds)})};var s;return o([u.property({type:String,json:{write:!0}})],r.prototype,"id",void 0),o([u.property({type:[i.Integer],json:{read:{source:"subLayerIds"},write:{target:"subLayerIds"}}})],r.prototype,"sublayerIds",void 0),r=s=o([u.subclass("esri.webscene.support.SlideVisibleLayer")],r)}(u.declared(s.JSONSupport));r.SlideVisibleLayer=c,r.default=c});