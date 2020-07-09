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

define(["require","exports","tslib","../core/jsonMap","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","./support/pointCloud/ColorModulation","./support/pointCloud/pointSizeAlgorithmJSONUtils","./support/pointCloud/pointSizeAlgorithmTypeUtils"],(function(o,e,t,r,n,i,l,p,u,s){var d=r.strict()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),c=function(o){function e(e){var t=o.call(this,e)||this;return t.type=void 0,t.pointSizeAlgorithm=null,t.colorModulation=null,t.pointsPerInch=10,t}return t.__extends(e,o),e.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},e.prototype.cloneProperties=function(){return{pointSizeAlgorithm:i.clone(this.pointSizeAlgorithm),colorModulation:i.clone(this.colorModulation),pointsPerInch:i.clone(this.pointsPerInch)}},t.__decorate([l.property({type:d.apiValues,readOnly:!0,nonNullable:!0,json:{type:d.jsonValues,read:!1,write:d.write}})],e.prototype,"type",void 0),t.__decorate([l.property({types:s.pointSizeAlgorithmTypes,json:{read:u.read,write:!0}})],e.prototype,"pointSizeAlgorithm",void 0),t.__decorate([l.property({type:p.default,json:{write:!0}})],e.prototype,"colorModulation",void 0),t.__decorate([l.property({json:{write:!0},nonNullable:!0,type:Number})],e.prototype,"pointsPerInch",void 0),e=t.__decorate([l.subclass("esri.renderers.PointCloudRenderer")],e)}(n.JSONSupport);return function(o){o.fieldTransformTypeKebabDict=new r.JSONMap({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(c||(c={})),c}));