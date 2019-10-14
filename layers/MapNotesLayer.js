// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../core/Collection","../core/Error","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/accessorSupport/decorators","./FeatureLayer","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer"],function(e,t,r,o,n,l,i,a,u,p,c,s,y,f,d){return function(t){function u(){var e=t.call(this)||this;return e.title=null,e.type="map-notes",e}return r(u,t),Object.defineProperty(u.prototype,"fullExtent",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(e,t){return e?e.union(t.fullExtent):t.fullExtent},null):null},enumerable:!0,configurable:!0}),u.prototype.readFeatureCollectionsFromItem=function(e,t,r){return t.layers.map(function(e){var t=new s;return t.read(e,r),t})},u.prototype.readFeatureCollectionsFromWebMap=function(e,t,r){return t.featureCollection.layers.map(function(e){var t=new s;return t.read(e,r),t})},Object.defineProperty(u.prototype,"minScale",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(e,t){return null==e?t.minScale:Math.min(e,t.minScale)},null):0},set:function(e){this.featureCollections.forEach(function(t){t.minScale=e}),this._set("minScale",e)},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"maxScale",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(e,t){return null==e?t.maxScale:Math.min(e,t.maxScale)},null):0},set:function(e){this.featureCollections.forEach(function(t){t.maxScale=e}),this._set("maxScale",e)},enumerable:!0,configurable:!0}),u.prototype.load=function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),this.when()},u.prototype.importLayerViewModule=function(t){return l(this,void 0,void 0,function(){return n(this,function(r){switch(t.type){case"2d":return[2,p.create(function(t){return e(["../views/2d/layers/MapNotesLayerView2D"],t)})];case"3d":return[2,p.reject(new a("map-notes-layer:view-not-supported","MapNotesLayer is only supported in 2D"))]}return[2]})})},o([c.property()],u.prototype,"title",void 0),o([c.property({dependsOn:["featureCollections"],readOnly:!0})],u.prototype,"fullExtent",null),o([c.property({type:["show","hide"]})],u.prototype,"listMode",void 0),o([c.property({type:i.ofType(s)})],u.prototype,"featureCollections",void 0),o([c.reader("portal-item","featureCollections",["layers"])],u.prototype,"readFeatureCollectionsFromItem",null),o([c.reader("web-map","featureCollections",["featureCollection.layers"])],u.prototype,"readFeatureCollectionsFromWebMap",null),o([c.property({dependsOn:["featureCollections"]})],u.prototype,"minScale",null),o([c.property({dependsOn:["featureCollections"]})],u.prototype,"maxScale",null),o([c.property({readOnly:!0,json:{read:!1}})],u.prototype,"type",void 0),u=o([c.subclass("esri.layers.MapNotesLayer")],u)}(c.declared(f.OperationalLayer(d.PortalLayer(u.MultiOriginJSONMixin(y)))))});