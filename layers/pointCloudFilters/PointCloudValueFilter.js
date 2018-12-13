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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/lang","../../core/accessorSupport/decorators","./PointCloudFilter"],function(e,r,t,o,l,i,p){return function(e){function r(r){var t=e.call(this)||this;return t.mode="exclude",t.type="value",t.values=[],t}t(r,e),p=r,r.prototype.clone=function(){return new p({field:this.field,mode:this.mode,values:l.clone(this.values)})};var p;return o([i.property({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"mode",void 0),o([i.property({type:["value"],json:{type:["pointCloudValueFilter"]}})],r.prototype,"type",void 0),o([i.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"values",void 0),r=p=o([i.subclass("esri.layers.pointCloudFilters.PointCloudValueFilter")],r)}(i.declared(p))});