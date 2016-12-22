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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/Accessor","./core/CollectionFlattener","./core/Evented","./support/LayersMixin","./Ground","./support/basemapUtils","./support/groundUtils","./core/accessorSupport/decorators"],function(e,r,t,o,a,s,n,p,c,u,l,i){function y(){return a}var d=function(e){function r(r){e.call(this),this.basemap=null,this.ground=new c,this._basemapCache=u.createCache()}return t(r,e),Object.defineProperty(r.prototype,"allLayers",{get:function(){return new s({root:this,rootCollectionNames:["basemap.baseLayers","ground.layers","layers","basemap.referenceLayers"],getChildrenFunction:function(e){return e.layers}})},enumerable:!0,configurable:!0}),r.prototype.castBasemap=function(e){return u.ensureType(e,this._basemapCache)},o([i.property({readOnly:!0})],r.prototype,"allLayers",null),o([i.property()],r.prototype,"basemap",void 0),o([i.cast("basemap")],r.prototype,"castBasemap",null),o([i.property(),i.cast(l.ensureType)],r.prototype,"ground",void 0),r=o([i.subclass("esri.Map")],r)}(i.declared(y(),n,p));return d});