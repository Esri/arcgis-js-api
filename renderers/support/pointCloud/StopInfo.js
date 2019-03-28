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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Color","../../../core/JSONSupport","../../../core/lang","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType"],function(e,r,o,t,p,l,n,u,c){Object.defineProperty(r,"__esModule",{value:!0});var s=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.label=null,r.value=0,r.color=null,r}o(r,e),l=r,r.prototype.clone=function(){return new l({label:this.label,value:this.value,color:n.clone(this.color)})};var l;return t([u.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),t([u.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"value",void 0),t([u.property({type:p,json:{type:[c.Integer],write:!0}})],r.prototype,"color",void 0),r=l=t([u.subclass("esri.renderers.support.pointCloud.StopInfo")],r)}(u.declared(l));r.StopInfo=s,r.default=s});