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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators"],(function(e,r,t,o,p,i,s){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(r){return e.call(this,r)||this}var p;return t(r,e),p=r,r.prototype.clone=function(){return new p({customLayerParameters:i.clone(this.customLayerParameters),customParameters:i.clone(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})},o([s.property({json:{type:Object,write:!0}})],r.prototype,"customLayerParameters",void 0),o([s.property({json:{type:Object,write:!0}})],r.prototype,"customParameters",void 0),o([s.property({type:String,json:{write:!0}})],r.prototype,"layerIdentifier",void 0),o([s.property({type:String,json:{write:!0}})],r.prototype,"tileMatrixSet",void 0),o([s.property({type:String,json:{write:!0}})],r.prototype,"url",void 0),r=p=o([s.subclass("esri.layer.support.WMTSLayerInfo")],r)}(s.declared(p.JSONSupport));r.WMTSLayerInfo=a,r.default=a}));