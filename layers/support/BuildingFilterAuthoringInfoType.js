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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators"],function(e,r,t,o,p,l,i){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.filterType=null,r.filterValues=null,r}t(r,e),p=r,r.prototype.clone=function(){return new p({filterType:this.filterType,filterValues:l.clone(this.filterValues)})};var p;return o([i.property({type:String,json:{write:!0}})],r.prototype,"filterType",void 0),o([i.property({type:[String],json:{write:!0}})],r.prototype,"filterValues",void 0),r=p=o([i.subclass("esri.layers.support.BuildingFilterAuthoringInfoType")],r)}(i.declared(p.JSONSupport))});