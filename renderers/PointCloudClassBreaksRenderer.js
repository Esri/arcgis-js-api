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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","../core/accessorSupport/decorators","./PointCloudRenderer","./support/LegendOptions","./support/pointCloud/ColorClassBreakInfo"],function(e,r,o,t,s,n,p,l,i,d){return function(e){function r(r){var o=e.call(this)||this;return o.type="point-cloud-class-breaks",o.field=null,o.legendOptions=null,o.fieldTransformType=null,o.colorClassBreakInfos=null,o}t(r,e),a=r,r.prototype.clone=function(){return new a(o({},this.cloneProperties(),{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:n.clone(this.colorClassBreakInfos),legendOptions:n.clone(this.legendOptions)}))};var a;return s([p.property()],r.prototype,"type",void 0),s([p.property({json:{write:!0},type:String})],r.prototype,"field",void 0),s([p.property({type:i.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),s([p.property({json:{read:l.fieldTransformTypeKebabDict.read,write:l.fieldTransformTypeKebabDict.write},type:String})],r.prototype,"fieldTransformType",void 0),s([p.property({type:[d.default],json:{write:!0}})],r.prototype,"colorClassBreakInfos",void 0),r=a=s([p.subclass("esri.renderers.PointCloudClassBreaksRenderer")],r)}(p.declared(l))});