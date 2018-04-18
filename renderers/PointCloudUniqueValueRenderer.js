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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/_base/lang","../core/lang","../core/accessorSupport/decorators","./PointCloudRenderer","./support/LegendOptions","./support/pointCloud/ColorUniqueValueInfo"],function(e,o,r,t,n,i,l,p,s,u){return function(e){function o(o){var r=e.call(this)||this;return r.type="point-cloud-unique-value",r.field=null,r.fieldTransformType=null,r.colorUniqueValueInfos=null,r.legendOptions=null,r}return r(o,e),d=o,o.prototype.clone=function(){return new d(n.mixin(this.cloneProperties(),{field:i.clone(this.field),fieldTransformType:i.clone(this.fieldTransformType),colorUniqueValueInfos:i.clone(this.colorUniqueValueInfos),legendOptions:i.clone(this.legendOptions)}))},t([l.property()],o.prototype,"type",void 0),t([l.property({json:{write:!0},type:String})],o.prototype,"field",void 0),t([l.property({json:{read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write},type:String})],o.prototype,"fieldTransformType",void 0),t([l.property({type:[u.default],json:{write:!0}})],o.prototype,"colorUniqueValueInfos",void 0),t([l.property({type:s.default,json:{write:!0}})],o.prototype,"legendOptions",void 0),o=d=t([l.subclass("esri.renderers.PointCloudUniqueValueRenderer")],o);var d}(l.declared(p))});