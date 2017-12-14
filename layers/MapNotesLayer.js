// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Layer","./FeatureLayer","./mixins/OperationalLayer","./mixins/PortalLayer","../core/Collection"],function(e,t,r,o,n,l,a,i,u,c){var p=function(e){function t(){var t=e.call(this)||this;return t.title=null,t.type="map-notes",t}return r(t,e),Object.defineProperty(t.prototype,"fullExtent",{get:function(){var e=null;return this.featureCollections?this.featureCollections.reduce(function(e,t){return e?e.union(t.fullExtent):t.fullExtent},e):e},enumerable:!0,configurable:!0}),t.prototype.readFeatureCollectionsFromItem=function(e,t,r){return t.layers.map(function(e){var t=new a;return t.read(e,r)})},t.prototype.readFeatureCollectionsFromWebMap=function(e,t,r){return t.featureCollection.layers.map(function(e){var t=new a;return t.read(e,r)})},Object.defineProperty(t.prototype,"minScale",{get:function(){var e=null;return this.featureCollections?this.featureCollections.reduce(function(e,t){return null==e?t.minScale:Math.min(e,t.minScale)},e):0},set:function(e){this.featureCollections.forEach(function(t){t.minScale=e}),this._set("minScale",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxScale",{get:function(){var e=null;return this.featureCollections?this.featureCollections.reduce(function(e,t){return null==e?t.maxScale:Math.min(e,t.maxScale)},e):0},set:function(e){this.featureCollections.forEach(function(t){t.maxScale=e}),this._set("maxScale",e)},enumerable:!0,configurable:!0}),t.prototype.load=function(){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]})),this.when()},o([n.shared({"2d":"../views/2d/layers/MapNotesLayerView2D"})],t.prototype,"viewModulePaths",void 0),o([n.property()],t.prototype,"title",void 0),o([n.property({dependsOn:["featureCollections"],readOnly:!0})],t.prototype,"fullExtent",null),o([n.property({type:c.ofType(a)})],t.prototype,"featureCollections",void 0),o([n.reader("portal-item","featureCollections",["layers"])],t.prototype,"readFeatureCollectionsFromItem",null),o([n.reader("web-map","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollectionsFromWebMap",null),o([n.property({dependsOn:["featureCollections"]})],t.prototype,"minScale",null),o([n.property({dependsOn:["featureCollections"]})],t.prototype,"maxScale",null),o([n.property({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),t=o([n.subclass("esri.layers.MapNotesLayer")],t)}(n.declared(l,i,u));return p});