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

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/Accessor","./core/CollectionFlattener","./core/Evented","./support/LayersMixin","./Ground","./support/basemapUtils","./support/groundUtils","./core/accessorSupport/decorators"],function(e,r,t,o,a,s,p,n,c,u,l,i){var y=function(e){function r(r){var t=e.call(this)||this;return t.basemap=null,t.ground=new c,t._basemapCache=u.createCache(),t}return t(r,e),Object.defineProperty(r.prototype,"allLayers",{get:function(){return new s({root:this,rootCollectionNames:["basemap.baseLayers","ground.layers","layers","basemap.referenceLayers"],getChildrenFunction:function(e){return e.layers}})},enumerable:!0,configurable:!0}),r.prototype.castBasemap=function(e){return u.ensureType(e,this._basemapCache)},r}(i.declared(a,p,n));return o([i.property({readOnly:!0})],y.prototype,"allLayers",null),o([i.property()],y.prototype,"basemap",void 0),o([i.cast("basemap")],y.prototype,"castBasemap",null),o([i.property(),i.cast(l.ensureType)],y.prototype,"ground",void 0),y=o([i.subclass("esri.Map")],y)});