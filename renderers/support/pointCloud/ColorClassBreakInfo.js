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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Color","../../../core/JSONSupport","../../../core/lang","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType"],function(e,r,o,t,l,p,a,s,n){Object.defineProperty(r,"__esModule",{value:!0});var i=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.minValue=0,r.maxValue=0,r.color=null,r}o(r,e),p=r,r.prototype.clone=function(){return new p({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:a.clone(this.color)})};var p;return t([s.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),t([s.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),t([s.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],r.prototype,"minValue",void 0),t([s.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],r.prototype,"maxValue",void 0),t([s.property({type:l,json:{type:[n.Integer],write:!0}})],r.prototype,"color",void 0),r=p=t([s.subclass("esri.renderers.support.pointCloud.ColorClassBreakInfo")],r)}(s.declared(p.JSONSupport));r.ColorClassBreakInfo=i,r.default=i});