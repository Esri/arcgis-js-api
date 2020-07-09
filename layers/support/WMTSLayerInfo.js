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

define(["require","exports","tslib","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators"],(function(e,t,r,o,i,a){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(t){return e.call(this,t)||this}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({customLayerParameters:i.clone(this.customLayerParameters),customParameters:i.clone(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})},r.__decorate([a.property({json:{type:Object,write:!0}})],t.prototype,"customLayerParameters",void 0),r.__decorate([a.property({json:{type:Object,write:!0}})],t.prototype,"customParameters",void 0),r.__decorate([a.property({type:String,json:{write:!0}})],t.prototype,"layerIdentifier",void 0),r.__decorate([a.property({type:String,json:{write:!0}})],t.prototype,"tileMatrixSet",void 0),r.__decorate([a.property({type:String,json:{write:!0}})],t.prototype,"url",void 0),t=o=r.__decorate([a.subclass("esri.layer.support.WMTSLayerInfo")],t)}(o.JSONSupport);t.WMTSLayerInfo=p,t.default=p}));