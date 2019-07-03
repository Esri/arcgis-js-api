// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/lang","../../core/accessorSupport/decorators","./PointCloudFilter"],function(e,r,t,i,o,l,d){return function(e){function r(r){var t=e.call(this)||this;return t.requiredClearBits=null,t.requiredSetBits=null,t.type="bitfield",t}t(r,e),d=r,r.prototype.clone=function(){return new d({field:this.field,requiredClearBits:o.clone(this.requiredClearBits),requiredSetBits:o.clone(this.requiredSetBits)})};var d;return i([l.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],r.prototype,"requiredClearBits",void 0),i([l.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],r.prototype,"requiredSetBits",void 0),i([l.property({type:["bitfield"],json:{type:["pointCloudBitfieldFilter"]}})],r.prototype,"type",void 0),r=d=i([l.subclass("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],r)}(l.declared(d))});