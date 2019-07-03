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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../core/Collection","../core/Error","../core/promiseUtils","../core/accessorSupport/decorators","./FeatureLayer","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer"],function(e,t,r,o,n,l,a,i,u,p,c,s,f,y){return function(t){function s(){var e=t.call(this)||this;return e.title=null,e.type="map-notes",e}return r(s,t),Object.defineProperty(s.prototype,"fullExtent",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(e,t){return e?e.union(t.fullExtent):t.fullExtent},null):null},enumerable:!0,configurable:!0}),s.prototype.readFeatureCollectionsFromItem=function(e,t,r){return t.layers.map(function(e){var t=new c;return t.read(e,r),t})},s.prototype.readFeatureCollectionsFromWebMap=function(e,t,r){return t.featureCollection.layers.map(function(e){var t=new c;return t.read(e,r),t})},Object.defineProperty(s.prototype,"minScale",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(e,t){return null==e?t.minScale:Math.min(e,t.minScale)},null):0},set:function(e){this.featureCollections.forEach(function(t){t.minScale=e}),this._set("minScale",e)},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"maxScale",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(e,t){return null==e?t.maxScale:Math.min(e,t.maxScale)},null):0},set:function(e){this.featureCollections.forEach(function(t){t.maxScale=e}),this._set("maxScale",e)},enumerable:!0,configurable:!0}),s.prototype.load=function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),this.when()},s.prototype.importLayerViewModule=function(t){return l(this,void 0,void 0,function(){return n(this,function(r){switch(t.type){case"2d":return[2,u.create(function(t){return e(["../views/2d/layers/MapNotesLayerView2D"],t)})];case"3d":return[2,u.reject(new i("map-notes-layer:view-not-supported","MapNotesLayer is only supported in 2D"))]}return[2]})})},o([p.property()],s.prototype,"title",void 0),o([p.property({dependsOn:["featureCollections"],readOnly:!0})],s.prototype,"fullExtent",null),o([p.property({type:["show","hide"]})],s.prototype,"listMode",void 0),o([p.property({type:a.ofType(c)})],s.prototype,"featureCollections",void 0),o([p.reader("portal-item","featureCollections",["layers"])],s.prototype,"readFeatureCollectionsFromItem",null),o([p.reader("web-map","featureCollections",["featureCollection.layers"])],s.prototype,"readFeatureCollectionsFromWebMap",null),o([p.property({dependsOn:["featureCollections"]})],s.prototype,"minScale",null),o([p.property({dependsOn:["featureCollections"]})],s.prototype,"maxScale",null),o([p.property({readOnly:!0,json:{read:!1}})],s.prototype,"type",void 0),s=o([p.subclass("esri.layers.MapNotesLayer")],s)}(p.declared(s,f,y))});