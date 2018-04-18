// COPYRIGHT © 2018 Esri
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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/Error","../core/promiseUtils","../core/accessorSupport/decorators","./FeatureLayer","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer"],function(e,t,r,o,n,l,a,i,u,c,p,s){return function(t){function c(){var e=t.call(this)||this;return e.title=null,e.type="map-notes",e}return r(c,t),Object.defineProperty(c.prototype,"fullExtent",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(e,t){return e?e.union(t.fullExtent):t.fullExtent},null):null},enumerable:!0,configurable:!0}),c.prototype.readFeatureCollectionsFromItem=function(e,t,r){return t.layers.map(function(e){return(new u).read(e,r)})},c.prototype.readFeatureCollectionsFromWebMap=function(e,t,r){return t.featureCollection.layers.map(function(e){return(new u).read(e,r)})},Object.defineProperty(c.prototype,"minScale",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(e,t){return null==e?t.minScale:Math.min(e,t.minScale)},null):0},set:function(e){this.featureCollections.forEach(function(t){t.minScale=e}),this._set("minScale",e)},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"maxScale",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(e,t){return null==e?t.maxScale:Math.min(e,t.maxScale)},null):0},set:function(e){this.featureCollections.forEach(function(t){t.maxScale=e}),this._set("maxScale",e)},enumerable:!0,configurable:!0}),c.prototype.load=function(){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]})),this.when()},c.prototype.importLayerViewModule=function(t){switch(t.type){case"2d":return a.create(function(t){return e(["../views/2d/layers/MapNotesLayerView2D"],t)});case"3d":return a.reject(new l("map-notes-layer:view-not-supported","MapNotesLayer is only supported in 2D"))}},o([i.property()],c.prototype,"title",void 0),o([i.property({dependsOn:["featureCollections"],readOnly:!0})],c.prototype,"fullExtent",null),o([i.property({type:n.ofType(u)})],c.prototype,"featureCollections",void 0),o([i.reader("portal-item","featureCollections",["layers"])],c.prototype,"readFeatureCollectionsFromItem",null),o([i.reader("web-map","featureCollections",["featureCollection.layers"])],c.prototype,"readFeatureCollectionsFromWebMap",null),o([i.property({dependsOn:["featureCollections"]})],c.prototype,"minScale",null),o([i.property({dependsOn:["featureCollections"]})],c.prototype,"maxScale",null),o([i.property({readOnly:!0,json:{read:!1}})],c.prototype,"type",void 0),c=o([i.subclass("esri.layers.MapNotesLayer")],c)}(i.declared(c,p,s))});