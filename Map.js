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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","./Basemap","./Ground","./core/Accessor","./core/CollectionFlattener","./core/Evented","./core/Logger","./core/accessorSupport/decorators","./support/basemapUtils","./support/groundUtils","./support/LayersMixin","./support/TablesMixin"],(function(e,r,t,o,a,n,s,p,i,u,l,c,y,d){"use strict";var b=i.getLogger("esri.Map");return function(e){function r(r){var t=e.call(this,r)||this;return t.basemap=null,t.ground=new a,t._basemapCache=l.createCache(),t}return t.__extends(r,e),r.prototype.destroy=function(){var e,r;this.allLayers.destroy(),this.allTables.destroy(),null===(e=this.ground)||void 0===e||e.destroy(),null===(r=this.basemap)||void 0===r||r.destroy(),l.destroyCache(this._basemapCache),this._basemapCache=null},Object.defineProperty(r.prototype,"allLayers",{get:function(){return new s({root:this,rootCollectionNames:["basemap.baseLayers","ground.layers","layers","basemap.referenceLayers"],getChildrenFunction:function(e){return e.layers}})},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"allTables",{get:function(){return this._createTablesFlattener(this)},enumerable:!1,configurable:!0}),r.prototype.castBasemap=function(e){return l.ensureType(e,this._basemapCache)},r.prototype.castGround=function(e){var r=c.ensureType(e);return r||(b.error("Map.ground may not be set to null or undefined"),this._get("ground"))},r.prototype.findLayerById=function(e){return this.allLayers.find((function(r){return r.id===e}))},r.prototype._createTablesFlattener=function(e){var r=this;return new s({root:e,rootCollectionNames:["tables","layers"],getChildrenFunction:function(e){return e&&"group"===e.type?r._createTablesFlattener(e):null},itemFilterFunction:function(e){return r._isMapOrGroupLayer(e.parent)&&e.parent.tables.includes(e)}})},r.prototype._isMapOrGroupLayer=function(e){return e&&(e===this||this._isGroupLayer(e))},r.prototype._isGroupLayer=function(e){return e&&"group"===e.type},t.__decorate([u.property({readOnly:!0})],r.prototype,"allLayers",null),t.__decorate([u.property({readOnly:!0})],r.prototype,"allTables",null),t.__decorate([u.property({type:o})],r.prototype,"basemap",void 0),t.__decorate([u.cast("basemap")],r.prototype,"castBasemap",null),t.__decorate([u.property({type:a,nonNullable:!0})],r.prototype,"ground",void 0),t.__decorate([u.cast("ground")],r.prototype,"castGround",null),r=t.__decorate([u.subclass("esri.Map")],r)}(d.TablesMixin(y.LayersMixin(p.EventedMixin(n))))}));