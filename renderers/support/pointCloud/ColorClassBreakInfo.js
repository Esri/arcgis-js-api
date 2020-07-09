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

define(["require","exports","tslib","../../../Color","../../../core/JSONSupport","../../../core/lang","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType"],(function(e,r,o,t,a,l,p,s){Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.minValue=0,r.maxValue=0,r.color=null,r}var a;return o.__extends(r,e),a=r,r.prototype.clone=function(){return new a({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:l.clone(this.color)})},o.__decorate([p.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o.__decorate([p.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o.__decorate([p.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],r.prototype,"minValue",void 0),o.__decorate([p.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],r.prototype,"maxValue",void 0),o.__decorate([p.property({type:t,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),r=a=o.__decorate([p.subclass("esri.renderers.support.pointCloud.ColorClassBreakInfo")],r)}(a.JSONSupport);r.ColorClassBreakInfo=n,r.default=n}));