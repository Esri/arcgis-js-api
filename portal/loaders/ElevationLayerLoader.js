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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessoireSupport/typescript","./LayerLoader","../../core/Collection","../../core/Error"],function(e,r,t,o,a,p,i,n){var s=function(e){function r(){e.apply(this,arguments)}return t(r,e),r.prototype.validateItem=function(){this.inherited(arguments);var e=new i(this.portalItem.typeKeywords);if(!e.find(function(e){return"elevation 3d layer"===e.toLowerCase()}))throw new n("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})},r.prototype.loadLayer=function(){},o([a.shared("esri.portal.loaders.ElevationLayerLoader")],r.prototype,"declaredClass",void 0),o([a.shared(["Image Service"])],r.prototype,"supportedItemTypes",void 0),r=o([a.subclass()],r)}(p);return s});