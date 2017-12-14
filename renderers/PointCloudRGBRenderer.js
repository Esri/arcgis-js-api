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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","../core/lang","./PointCloudRenderer"],function(e,r,o,t,n,i,p,l){var c=function(e){function r(r){var o=e.call(this)||this;return o.type="point-cloud-rgb",o.field=null,o}return o(r,e),l=r,r.prototype.clone=function(){return new l(i.mixin(this.cloneProperties(),{field:p.clone(this.field)}))},t([n.property()],r.prototype,"type",void 0),t([n.property({json:{write:!0},type:String})],r.prototype,"field",void 0),r=l=t([n.subclass("esri.renderers.PointCloudRGBRenderer")],r);var l}(n.declared(l));return c});