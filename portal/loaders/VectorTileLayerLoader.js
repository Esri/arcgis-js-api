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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessoireSupport/typescript","../../core/promiseUtils","../../request","./LayerLoader"],function(e,r,t,o,s,a,p,i){var n=function(e){function r(){e.apply(this,arguments)}return t(r,e),r.prototype.loadItemProperties=function(){var e=this;if(this.instance.url)return a.resolve(this.portalItem);var r=this.portalItem.itemUrl+"/resources/styles/root.json";return p(r,{callbackParamName:"callback",query:{f:"json"}}).otherwise(function(){r=e.portalItem.url}).then(function(){return e.instance.url=r,a.resolve(e.portalItem)})},r.prototype.loadLayer=function(){},o([s.shared("esri.portal.loaders.VectorTileLayerLoader")],r.prototype,"declaredClass",void 0),o([s.shared(["Vector Tile Service"])],r.prototype,"supportedItemTypes",void 0),r=o([s.subclass()],r)}(i);return n});