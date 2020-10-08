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

define(["require","exports","tslib","../core/lang","../core/accessorSupport/decorators","./PointCloudRenderer","./support/LegendOptions","./support/pointCloud/StopInfo"],(function(e,t,o,r,n,i,p,s){"use strict";return function(e){function t(t){var o=e.call(this,t)||this;return o.type="point-cloud-stretch",o.field=null,o.legendOptions=null,o.fieldTransformType=null,o.stops=null,o}var d;return o.__extends(t,e),d=t,t.prototype.clone=function(){return new d(o.__assign(o.__assign({},this.cloneProperties()),{field:r.clone(this.field),fieldTransformType:r.clone(this.fieldTransformType),stops:r.clone(this.stops),legendOptions:r.clone(this.legendOptions)}))},o.__decorate([n.enumeration({pointCloudStretchRenderer:"point-cloud-stretch"})],t.prototype,"type",void 0),o.__decorate([n.property({json:{write:!0},type:String})],t.prototype,"field",void 0),o.__decorate([n.property({type:p.default,json:{write:!0}})],t.prototype,"legendOptions",void 0),o.__decorate([n.property({type:i.fieldTransformTypeKebabDict.apiValues,json:{type:i.fieldTransformTypeKebabDict.jsonValues,read:i.fieldTransformTypeKebabDict.read,write:i.fieldTransformTypeKebabDict.write}})],t.prototype,"fieldTransformType",void 0),o.__decorate([n.property({type:[s.default],json:{write:!0}})],t.prototype,"stops",void 0),t=d=o.__decorate([n.subclass("esri.renderers.PointCloudStretchRenderer")],t)}(i)}));