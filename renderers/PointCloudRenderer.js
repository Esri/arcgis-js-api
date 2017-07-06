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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/kebabDictionary","../core/lang","../core/accessorSupport/decorators"],function(o,e,t,i,r,l,n,p){var a=function(o){function e(e){var t=o.call(this)||this;return t.pointSizeAlgorithm=null,t.colorModulation=null,t.pointsPerInch=10,t}return t(e,o),e.prototype.readPointSizeAlgorithm=function(o,e,t){return null==o||"object"!=typeof o?null:"pointCloudFixedSizeAlgorithm"===o.type?{type:"fixed-size",useRealWorldSymbolSizes:!!o.useRealWorldSymbolSizes,size:null!=o.size?parseFloat(o.size):0}:"pointCloudSplatAlgorithm"===o.type?{type:"splat",scaleFactor:null!=o.scaleFactor?parseFloat(o.scaleFactor):1,minSize:null!=o.minSize?parseFloat(o.minSize):4}:null},e.prototype.writePointSizeAlgorithm=function(o,e,t,i){o&&(e.pointSizeAlgorithm="fixed-size"===o.type?{type:"pointCloudFixedSizeAlgorithm",useRealWorldSymbolSizes:o.useRealWorldSymbolSizes,size:o.size}:{type:"pointCloudSplatAlgorithm",scaleFactor:o.scaleFactor,minSize:o.minSize})},e.prototype.readColorModulation=function(o,e,t){return null==o||"object"!=typeof o?null:{field:String(o.field),minValue:null!=o.minValue?parseFloat(o.minValue):0,maxValue:null!=o.maxValue?parseFloat(o.maxValue):255}},e.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},e.prototype.cloneProperties=function(){return{pointSizeAlgorithm:n.clone(this.pointSizeAlgorithm),colorModulation:n.clone(this.colorModulation),pointsPerInch:n.clone(this.pointsPerInch)}},e}(p.declared(r));return i([p.property({readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"type",void 0),i([p.property({json:{write:!0}})],a.prototype,"pointSizeAlgorithm",void 0),i([p.reader("pointSizeAlgorithm")],a.prototype,"readPointSizeAlgorithm",null),i([p.writer("pointSizeAlgorithm")],a.prototype,"writePointSizeAlgorithm",null),i([p.property({json:{write:!0}})],a.prototype,"colorModulation",void 0),i([p.reader("colorModulation")],a.prototype,"readColorModulation",null),i([p.property({json:{write:!0},type:Number})],a.prototype,"pointsPerInch",void 0),a=i([p.subclass("esri.renderers.PointCloudRenderer")],a),function(o){o.pointSizeKebabDict=l({pointCloudSplatAlgorithm:"fixed-size",pointCloudFixedSizeAlgorithm:"splat"}),o.fieldTransformTypeKebabDict=l({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(a||(a={})),a});