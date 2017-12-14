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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","../core/lang","./PointCloudRenderer","./support/pointCloud/StopInfo","./support/LegendOptions"],function(e,r,t,o,p,n,i,s,l,d){var c=function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-stretch",t.field=null,t.legendOptions=null,t.fieldTransformType=null,t.stops=null,t}return t(r,e),c=r,r.prototype.clone=function(){return new c(n.mixin(this.cloneProperties(),{field:i.clone(this.field),fieldTransformType:i.clone(this.fieldTransformType),stops:i.clone(this.stops),legendOptions:i.clone(this.legendOptions)}))},o([p.property()],r.prototype,"type",void 0),o([p.property({json:{write:!0},type:String})],r.prototype,"field",void 0),o([p.property({type:d["default"],json:{write:!0}})],r.prototype,"legendOptions",void 0),o([p.property({json:{read:s.fieldTransformTypeKebabDict.read,write:s.fieldTransformTypeKebabDict.write},type:String})],r.prototype,"fieldTransformType",void 0),o([p.property({type:[l["default"]],json:{write:!0}})],r.prototype,"stops",void 0),r=c=o([p.subclass("esri.renderers.PointCloudStretchRenderer")],r);var c}(p.declared(s));return c});