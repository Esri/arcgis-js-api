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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/JSONSupport","../../../core/accessorSupport/decorators"],function(e,r,o,t,l,p){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.field=null,r.minValue=0,r.maxValue=255,r}o(r,e),l=r,r.prototype.clone=function(){return new l({field:this.field,minValue:this.minValue,maxValue:this.maxValue})};var l;return t([p.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),t([p.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"minValue",void 0),t([p.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"maxValue",void 0),r=l=t([p.subclass("esri.renderers.support.pointCloud.ColorModulation")],r)}(p.declared(l.JSONSupport));r.ColorModulation=u,r.default=u});