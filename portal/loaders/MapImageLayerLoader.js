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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessoireSupport/typescript","./support/jsonUtils","./LayerLoader"],function(e,a,r,t,s,i,n){var o=function(e){function a(){e.apply(this,arguments)}return r(a,e),a.prototype.loadLayer=function(){var e=this;return this.fetchData().then(function(a){a&&(i.readIfDefined(e.instance,"minScale",a.minScale,{minScale:a.minScale}),i.readIfDefined(e.instance,"maxScale",a.maxScale,{maxScale:a.maxScale}),i.readIfDefined(e.instance,"opacity",a.opacity,{opacity:a.opacity}),i.readIfDefined(e.instance,"sublayers",a.visibleLayers||a.layers,{visibleLayers:a.visibleLayers,layers:a.layers}))})},t([s.shared("esri.portal.loaders.MapImageLayerLoader")],a.prototype,"declaredClass",void 0),t([s.shared(["Map Service"])],a.prototype,"supportedItemTypes",void 0),a=t([s.subclass()],a)}(n);return o});