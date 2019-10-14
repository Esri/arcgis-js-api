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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,r,o,t,u,n){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(r){var o=e.call(this)||this;return o.minValue=0,o.maxValue=0,o}o(r,e),u=r,r.prototype.clone=function(){return new u({minValue:this.minValue,maxValue:this.maxValue})};var u;return t([n.property({type:Number,json:{write:!0}})],r.prototype,"minValue",void 0),t([n.property({type:Number,json:{write:!0}})],r.prototype,"maxValue",void 0),r=u=t([n.subclass("esri.renderer.support.AuthoringInfoClassBreakInfo")],r)}(n.declared(u.JSONSupport));r.AuthoringInfoClassBreakInfo=a,r.default=a});