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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessoireSupport/typescript","./support/jsonUtils","./LayerLoader"],function(e,i,n,r,a,t,o){var s=function(e){function i(){e.apply(this,arguments)}return n(i,e),i.prototype.loadLayer=function(){var e=this;return this.fetchData().then(function(i){if(i){var n=i.layerDefinition&&i.layerDefinition.definitionExpression;t.readIfDefined(e.instance,"definitionExpression",n,{definitionExpression:n}),t.readIfDefined(e.instance,"minScale",i.minScale,{minScale:i.minScale}),t.readIfDefined(e.instance,"maxScale",i.maxScale,{maxScale:i.maxScale}),t.readIfDefined(e.instance,"mosaicRule",i.mosaicRule,{mosaicRule:i.mosaicRule}),t.readIfDefined(e.instance,"opacity",i.opacity,{opacity:i.opacity}),t.readIfDefined(e.instance,"renderingRule",i.renderingRule,{renderingRule:i.renderingRule})}})},r([a.shared("esri.portal.loaders.ImageryLayerLoader")],i.prototype,"declaredClass",void 0),r([a.shared(["Image Service"])],i.prototype,"supportedItemTypes",void 0),i=r([a.subclass()],i)}(o);return s});