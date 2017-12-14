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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/kebabDictionary","../core/lang","../core/accessorSupport/decorators","./support/pointCloud/pointSizeAlgorithmTypeUtils","./support/pointCloud/pointSizeAlgorithmJSONUtils","./support/pointCloud/ColorModulation"],function(o,e,t,r,n,i,l,p,u,s,d){var c=i({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),a=function(o){function e(e){var t=o.call(this)||this;return t.pointSizeAlgorithm=null,t.colorModulation=null,t.pointsPerInch=10,t}return t(e,o),e.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},e.prototype.cloneProperties=function(){return{pointSizeAlgorithm:l.clone(this.pointSizeAlgorithm),colorModulation:l.clone(this.colorModulation),pointsPerInch:l.clone(this.pointsPerInch)}},r([p.property({type:String,readOnly:!0,nonNullable:!0,json:{read:!1,write:c.write}})],e.prototype,"type",void 0),r([p.property({types:u.pointSizeAlgorithmTypes,json:{read:s.read,write:!0}})],e.prototype,"pointSizeAlgorithm",void 0),r([p.property({type:d["default"],json:{write:!0}})],e.prototype,"colorModulation",void 0),r([p.property({json:{write:!0},nonNullable:!0,type:Number})],e.prototype,"pointsPerInch",void 0),e=r([p.subclass("esri.renderers.PointCloudRenderer")],e)}(p.declared(n));return function(o){o.fieldTransformTypeKebabDict=i({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"}),o.defaultMinSize=1.1}(a||(a={})),a});