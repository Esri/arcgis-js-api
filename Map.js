// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","./Basemap","./Ground","./core/Accessor","./core/CollectionFlattener","./core/Evented","./core/Logger","./core/accessorSupport/decorators","./support/basemapUtils","./support/groundUtils","./support/LayersMixin"],(function(e,r,t,o,n,a,s,p,u,c,i,l,d){var y=u.getLogger("esri.Map");return function(e){function r(r){var t=e.call(this,r)||this;return t.basemap=null,t.ground=new n,t._basemapCache=i.createCache(),t}return t.__extends(r,e),Object.defineProperty(r.prototype,"allLayers",{get:function(){return new s({root:this,rootCollectionNames:["basemap.baseLayers","ground.layers","layers","basemap.referenceLayers"],getChildrenFunction:function(e){return e.layers}})},enumerable:!0,configurable:!0}),r.prototype.castBasemap=function(e){return i.ensureType(e,this._basemapCache)},r.prototype.castGround=function(e){var r=l.ensureType(e);return r||(y.error("Map.ground may not be set to null or undefined"),this._get("ground"))},r.prototype.findLayerById=function(e){return this.allLayers.find((function(r){return r.id===e}))},t.__decorate([c.property({readOnly:!0})],r.prototype,"allLayers",null),t.__decorate([c.property({type:o})],r.prototype,"basemap",void 0),t.__decorate([c.cast("basemap")],r.prototype,"castBasemap",null),t.__decorate([c.property({type:n,nonNullable:!0})],r.prototype,"ground",void 0),t.__decorate([c.cast("ground")],r.prototype,"castGround",null),r=t.__decorate([c.subclass("esri.Map")],r)}(d.LayersMixin(p.EventedMixin(a)))}));