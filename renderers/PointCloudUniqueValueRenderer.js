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

define(["require","exports","tslib","../core/lang","../core/accessorSupport/decorators","./PointCloudRenderer","./support/LegendOptions","./support/pointCloud/ColorUniqueValueInfo"],(function(e,o,r,n,t,i,l,p){return function(e){function o(o){var r=e.call(this,o)||this;return r.type="point-cloud-unique-value",r.field=null,r.fieldTransformType=null,r.colorUniqueValueInfos=null,r.legendOptions=null,r}var s;return r.__extends(o,e),s=o,o.prototype.clone=function(){return new s(r.__assign(r.__assign({},this.cloneProperties()),{field:n.clone(this.field),fieldTransformType:n.clone(this.fieldTransformType),colorUniqueValueInfos:n.clone(this.colorUniqueValueInfos),legendOptions:n.clone(this.legendOptions)}))},r.__decorate([t.enumeration({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],o.prototype,"type",void 0),r.__decorate([t.property({json:{write:!0},type:String})],o.prototype,"field",void 0),r.__decorate([t.property({type:i.fieldTransformTypeKebabDict.apiValues,json:{type:i.fieldTransformTypeKebabDict.jsonValues,read:i.fieldTransformTypeKebabDict.read,write:i.fieldTransformTypeKebabDict.write}})],o.prototype,"fieldTransformType",void 0),r.__decorate([t.property({type:[p.default],json:{write:!0}})],o.prototype,"colorUniqueValueInfos",void 0),r.__decorate([t.property({type:l.default,json:{write:!0}})],o.prototype,"legendOptions",void 0),o=s=r.__decorate([t.subclass("esri.renderers.PointCloudUniqueValueRenderer")],o)}(i)}));