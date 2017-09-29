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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/Accessor","./core/CollectionFlattener","./core/Evented","./core/Logger","./support/LayersMixin","./Basemap","./Ground","./support/basemapUtils","./support/groundUtils","./core/accessorSupport/decorators"],function(e,r,t,o,a,n,p,s,u,c,l,i,y,d){var g=s.getLogger("esri.Map"),b=function(e){function r(r){var t=e.call(this)||this;return t.basemap=null,t.ground=new l,t._basemapCache=i.createCache(),t}return t(r,e),Object.defineProperty(r.prototype,"allLayers",{get:function(){return new n({root:this,rootCollectionNames:["basemap.baseLayers","ground.layers","layers","basemap.referenceLayers"],getChildrenFunction:function(e){return e.layers}})},enumerable:!0,configurable:!0}),r.prototype.castBasemap=function(e){return i.ensureType(e,this._basemapCache)},r.prototype.castGround=function(e){var r=y.ensureType(e);return r?r:(g.error("Map.ground may not be set to null or undefined"),this._get("ground"))},o([d.property({readOnly:!0})],r.prototype,"allLayers",null),o([d.property({type:c})],r.prototype,"basemap",void 0),o([d.cast("basemap")],r.prototype,"castBasemap",null),o([d.property({type:l})],r.prototype,"ground",void 0),o([d.cast("ground")],r.prototype,"castGround",null),r=o([d.subclass("esri.Map")],r)}(d.declared(a,p,u));return b});