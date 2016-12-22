// COPYRIGHT © 2016 Esri
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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/accessorSupport/decorators"],function(e,o,t,r,l,i){var p=function(e){function o(o){e.call(this),this.pointShape="diskFlat",this.pointSizeAlgorithm=null,this.colorModulation=null,this.useLightSource=!1,this.pointsPerInch=10}return t(o,e),o.prototype.readPointShape=function(e,o,t){return"diskFlat"===e||"diskShaded"===e?e:"diskFlat"},o.prototype.readPointSizeAlgorithm=function(e,o,t){return null==e||"object"!=typeof e?null:"pointCloudFixedSizeAlgorithm"===e.type?{type:"pointCloudFixedSizeAlgorithm",useRealWorldSymbolSizes:!!e.useRealWorldSymbolSizes,size:null!=e.size?parseFloat(e.size):0}:"pointCloudSplatAlgorithm"===e.type?{type:"pointCloudSplatAlgorithm",scaleFactor:null!=e.scaleFactor?parseFloat(e.scaleFactor):1,minSize:null!=e.minSize?parseFloat(e.minSize):4}:null},o.prototype.readColorModulation=function(e,o,t){return null==e||"object"!=typeof e?null:{field:String(e.field),minValue:null!=e.minValue?parseFloat(e.minValue):0,maxValue:null!=e.maxValue?parseFloat(e.maxValue):255}},r([i.property({readOnly:!0,json:{readable:!1,writeAlways:!0}})],o.prototype,"type",void 0),r([i.property({json:{writable:!0}})],o.prototype,"pointShape",void 0),r([i.read("pointShape")],o.prototype,"readPointShape",null),r([i.property({json:{writable:!0}})],o.prototype,"pointSizeAlgorithm",void 0),r([i.read("pointSizeAlgorithm")],o.prototype,"readPointSizeAlgorithm",null),r([i.property({json:{writable:!0}})],o.prototype,"colorModulation",void 0),r([i.read("colorModulation")],o.prototype,"readColorModulation",null),r([i.property({json:{writable:!0},type:Boolean})],o.prototype,"useLightSource",void 0),r([i.property({json:{writable:!0},type:Number})],o.prototype,"pointsPerInch",void 0),o=r([i.subclass("esri.renderer.PointCloudRenderer")],o)}(i.declared(l));return p});