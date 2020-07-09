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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../Color","../../../core/JSONSupport","../../../core/lang","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType"],(function(e,o,r,t,l,p,n,u){Object.defineProperty(o,"__esModule",{value:!0});var c=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.label=null,o.value=0,o.color=null,o}var l;return r.__extends(o,e),l=o,o.prototype.clone=function(){return new l({label:this.label,value:this.value,color:p.clone(this.color)})},r.__decorate([n.property({type:String,json:{write:!0}})],o.prototype,"label",void 0),r.__decorate([n.property({type:Number,nonNullable:!0,json:{write:!0}})],o.prototype,"value",void 0),r.__decorate([n.property({type:t,json:{type:[u.Integer],write:!0}})],o.prototype,"color",void 0),o=l=r.__decorate([n.subclass("esri.renderers.support.pointCloud.StopInfo")],o)}(l.JSONSupport);o.StopInfo=c,o.default=c}));