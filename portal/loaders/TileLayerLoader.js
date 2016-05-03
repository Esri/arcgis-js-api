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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessoireSupport/typescript","./support/jsonUtils","./LayerLoader"],function(e,r,t,o,p,a,s){var i=function(e){function r(){e.apply(this,arguments)}return t(r,e),r.prototype.loadLayer=function(){var e=this;return this.fetchData().then(function(r){r&&(a.readIfDefined(e.instance,"opacity",r.opacity,{opacity:r.opacity}),a.readPopupTemplates(e.instance,r))})},o([p.shared("esri.portal.loaders.TileLayerLoader")],r.prototype,"declaredClass",void 0),o([p.shared(["Image Service","Map Service"])],r.prototype,"supportedItemTypes",void 0),r=o([p.subclass()],r)}(s);return i});