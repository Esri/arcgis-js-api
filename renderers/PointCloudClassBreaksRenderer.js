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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/lang","../core/accessorSupport/decorators","./PointCloudRenderer","./support/LegendOptions","./support/pointCloud/ColorClassBreakInfo"],(function(e,r,o,t,s,n,i,l){"use strict";return function(e){function r(r){var o=e.call(this,r)||this;return o.type="point-cloud-class-breaks",o.field=null,o.legendOptions=null,o.fieldTransformType=null,o.colorClassBreakInfos=null,o}var a;return o.__extends(r,e),a=r,r.prototype.clone=function(){return new a(o.__assign(o.__assign({},this.cloneProperties()),{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:t.clone(this.colorClassBreakInfos),legendOptions:t.clone(this.legendOptions)}))},o.__decorate([s.enumeration({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],r.prototype,"type",void 0),o.__decorate([s.property({json:{write:!0},type:String})],r.prototype,"field",void 0),o.__decorate([s.property({type:i.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),o.__decorate([s.property({type:n.fieldTransformTypeKebabDict.apiValues,json:{type:n.fieldTransformTypeKebabDict.jsonValues,read:n.fieldTransformTypeKebabDict.read,write:n.fieldTransformTypeKebabDict.write}})],r.prototype,"fieldTransformType",void 0),o.__decorate([s.property({type:[l.default],json:{write:!0}})],r.prototype,"colorClassBreakInfos",void 0),r=a=o.__decorate([s.subclass("esri.renderers.PointCloudClassBreaksRenderer")],r)}(n)}));