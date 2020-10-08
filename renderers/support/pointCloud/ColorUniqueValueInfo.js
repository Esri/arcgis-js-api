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

define(["require","exports","tslib","../../../Color","../../../core/JSONSupport","../../../core/lang","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType"],(function(e,o,r,t,n,l,p,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.ColorUniqueValueInfo=void 0;var s=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.description=null,o.label=null,o.values=null,o.color=null,o}var n;return r.__extends(o,e),n=o,o.prototype.clone=function(){return new n({description:this.description,label:this.label,values:l.clone(this.values),color:l.clone(this.color)})},r.__decorate([p.property({type:String,json:{write:!0}})],o.prototype,"description",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],o.prototype,"label",void 0),r.__decorate([p.property({type:[String],json:{write:!0}})],o.prototype,"values",void 0),r.__decorate([p.property({type:t,json:{type:[i.Integer],write:!0}})],o.prototype,"color",void 0),o=n=r.__decorate([p.subclass("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],o)}(n.JSONSupport);o.ColorUniqueValueInfo=s,o.default=s}));