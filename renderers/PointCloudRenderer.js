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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/kebabDictionary","../core/accessorSupport/decorators"],function(e,o,t,i,r,l,n){var p=function(e){function o(o){var t=e.call(this)||this;return t.pointSizeAlgorithm=null,t.colorModulation=null,t.pointsPerInch=10,t}return t(o,e),o.prototype.readPointSizeAlgorithm=function(e,o,t){return null==e||"object"!=typeof e?null:"pointCloudFixedSizeAlgorithm"===e.type?{type:"fixed-size",useRealWorldSymbolSizes:!!e.useRealWorldSymbolSizes,size:null!=e.size?parseFloat(e.size):0}:"pointCloudSplatAlgorithm"===e.type?{type:"splat",scaleFactor:null!=e.scaleFactor?parseFloat(e.scaleFactor):1,minSize:null!=e.minSize?parseFloat(e.minSize):4}:null},o.prototype.writePointSizeAlgorithm=function(e,o,t,i){e&&(o.pointSizeAlgorithm="fixed-size"===e.type?{type:"pointCloudFixedSizeAlgorithm",useRealWorldSymbolSizes:e.useRealWorldSymbolSizes,size:e.size}:{type:"pointCloudSplatAlgorithm",scaleFactor:e.scaleFactor,minSize:e.minSize})},o.prototype.readColorModulation=function(e,o,t){return null==e||"object"!=typeof e?null:{field:String(e.field),minValue:null!=e.minValue?parseFloat(e.minValue):0,maxValue:null!=e.maxValue?parseFloat(e.maxValue):255}},o}(n.declared(r));return i([n.property({readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],p.prototype,"type",void 0),i([n.property({json:{write:!0}})],p.prototype,"pointSizeAlgorithm",void 0),i([n.reader("pointSizeAlgorithm")],p.prototype,"readPointSizeAlgorithm",null),i([n.writer("pointSizeAlgorithm")],p.prototype,"writePointSizeAlgorithm",null),i([n.property({json:{write:!0}})],p.prototype,"colorModulation",void 0),i([n.reader("colorModulation")],p.prototype,"readColorModulation",null),i([n.property({json:{write:!0},type:Number})],p.prototype,"pointsPerInch",void 0),p=i([n.subclass("esri.renderers.PointCloudRenderer")],p),function(e){e.pointSizeKebabDict=l({pointCloudSplatAlgorithm:"fixed-size",pointCloudFixedSizeAlgorithm:"splat"}),e.fieldTransformTypeKebabDict=l({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(p||(p={})),p});