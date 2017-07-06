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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Layer","./FeatureLayer","./mixins/OperationalLayer","./mixins/PortalLayer","../core/Collection"],function(e,t,r,o,l,n,a,p,i,u){var s=function(e){function t(){var t=e.call(this)||this;return t.title=null,t.type="map-notes",t}return r(t,e),Object.defineProperty(t.prototype,"fullExtent",{get:function(){var e=null;return this.featureCollections?this.featureCollections.reduce(function(e,t){return e?e.union(t.fullExtent):t.fullExtent},e):e},enumerable:!0,configurable:!0}),t.prototype.readFeatureCollectionsFromItem=function(e,t,r){return t.layers.map(function(e){var t=new a;return t.read(e,r)})},t.prototype.readFeatureCollectionsFromWebMap=function(e,t,r){return t.featureCollection.layers.map(function(e){var t=new a;return t.read(e,r)})},t.prototype.load=function(){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]})),this},t}(l.declared(n,p,i));return o([l.shared({"2d":"../views/2d/layers/MapNotesLayerView2D"})],s.prototype,"viewModulePaths",void 0),o([l.property()],s.prototype,"title",void 0),o([l.property({dependsOn:["featureCollections"],readOnly:!0})],s.prototype,"fullExtent",null),o([l.property({type:u.ofType(a)})],s.prototype,"featureCollections",void 0),o([l.reader("portal-item","featureCollections",["layers"])],s.prototype,"readFeatureCollectionsFromItem",null),o([l.reader("web-map","featureCollections",["featureCollection.layers"])],s.prototype,"readFeatureCollectionsFromWebMap",null),o([l.property({readOnly:!0,json:{read:!1}})],s.prototype,"type",void 0),s=o([l.subclass("esri.layers.MapNotesLayer")],s)});