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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessoireSupport/typescript","./LayerCreator","../../geometry/Extent","../../layers/WebTileLayer","../../layers/support/TileInfo"],function(e,t,r,o,l,p,n,a,i){var s=function(e){function t(){e.apply(this,arguments)}return r(t,e),t.prototype.layerProperties=function(e){return this.inherited(arguments).then(function(t){return void 0!==e.copyright&&(t.copyright=e.copyright),e.fullExtent&&(t.fullExtent=n.fromJSON(e.fullExtent),t.spatialReference=t.fullExtent&&t.fullExtent.spatialReference.clone()),e.tileInfo&&(t.tileInfo=i.fromJSON(e.tileInfo)),void 0!==e.urlTemplate?t.urlTemplate=e.urlTemplate:void 0!==e.templateUrl&&(t.urlTemplate=e.templateUrl),t})},o([l.shared("esri.portal.creators.WebTileLayerCreator")],t.prototype,"declaredClass",void 0),o([l.shared(a)],t.prototype,"type",void 0),t=o([l.subclass()],t)}(p);return s});