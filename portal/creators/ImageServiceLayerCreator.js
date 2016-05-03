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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessoireSupport/typescript","./LayerCreator","../../layers/ImageryLayer","../../layers/support/RasterFunction"],function(e,r,t,n,o,u,i,p){var s=function(e){function r(){e.apply(this,arguments)}return t(r,e),r.prototype.layerProperties=function(e){return this.inherited(arguments).then(function(r){return e.renderingRule&&e.renderingRule.rasterFunction&&(r.renderingRule=new p(e.renderingRule),r.renderingRule.outputPixelType&&(r.renderingRule.outputPixelType=r.renderingRule.outputPixelType.toLowerCase())),r})},n([o.shared("esri.portal.creators.ImageServiceLayerCreator")],r.prototype,"declaredClass",void 0),n([o.shared(i)],r.prototype,"type",void 0),r=n([o.subclass()],r)}(u);return s});