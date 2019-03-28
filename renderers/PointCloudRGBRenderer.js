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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","../core/accessorSupport/decorators","./PointCloudRenderer"],function(e,r,o,t,n,i,p,l){return function(e){function r(r){var o=e.call(this)||this;return o.type="point-cloud-rgb",o.field=null,o}t(r,e),l=r,r.prototype.clone=function(){return new l(o({},this.cloneProperties(),{field:i.clone(this.field)}))};var l;return n([p.enumeration.serializable()({pointCloudRGBRenderer:"point-cloud-rgb"})],r.prototype,"type",void 0),n([p.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),r=l=n([p.subclass("esri.renderers.PointCloudRGBRenderer")],r)}(p.declared(l))});