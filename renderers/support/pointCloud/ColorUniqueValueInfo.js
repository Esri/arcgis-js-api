// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../Color","../../../core/JSONSupport","../../../core/lang"],function(e,r,o,t,l,p,n,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.values=null,r.color=null,r}return o(r,e),n=r,r.prototype.clone=function(){return new n({description:this.description,label:this.label,values:i.clone(this.values),color:i.clone(this.color)})},t([l.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),t([l.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),t([l.property({type:[String],json:{write:!0}})],r.prototype,"values",void 0),t([l.property({type:p,json:{type:[Number],write:!0}})],r.prototype,"color",void 0),r=n=t([l.subclass("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],r);var n}(l.declared(n));r.ColorUniqueValueInfo=s,r["default"]=s});