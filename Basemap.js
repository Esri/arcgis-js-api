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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/extendsHelper","./core/tsSupport/decorateHelper","./core/accessoireSupport/typescript","./support/basemapDefinitions","./core/Collection","./core/collectionUtils","./core/Error","./core/Evented","./core/JSONSupporter","./core/LoadableAccessoire","./core/promiseUtils","./core/requireUtils","./portal/PortalItem"],function(e,r,t,o,a,n,s,i,p,l,u,c,y,f,d){function h(){return u}var m=0,I=function(r){function u(){r.call(this),this.baseLayers=null,this.id=null,this.portalItem=null,this.referenceLayers=null,this.resourceInfo=null,this.thumbnailUrl=null,this.title=null}return t(u,r),u.prototype.getDefaults=function(){return{id:Date.now().toString(16)+"-basemap-"+m++,baseLayers:new s,referenceLayers:new s}},u.prototype.initialize=function(){this.resourceInfo&&this.read(this.resourceInfo)},u.prototype.load=function(){return this.addResolvingPromise(this._loadFromSource()),this},u.prototype.clone=function(){var e={id:this.id,title:this.title};return this.resourceInfo||this.portalItem?(e.portalItem=this.portalItem,e.resourceInfo=this.resourceInfo):(e.baseLayers=this.baseLayers.clone(),e.referenceLayers=this.referenceLayers.clone()),new u(e)},u.prototype.toJSON=function(){throw new p("internal:not-yet-implemented","Basemap.toJSON is not yet implemented")},u.prototype._loadFromSource=function(){var e=this.resourceInfo,r=this.portalItem;return e?this._loadFromJSON(e):r?this._loadFromItem(r):y.resolve(null)},u.prototype._loadFromJSON=function(r){var t=this,o=this.portalItem&&this.portalItem.portal;return f.when(e,"./portal/creators/layersCreator").then(function(e){var a=[];if(r.baseMapLayers&&Array.isArray(r.baseMapLayers)){var n={defaultLayerType:"DefaultTiledLayer",portal:o},s=e.populateOperationalLayers(t.baseLayers,r.baseMapLayers.filter(function(e){return!e.isReference}),n);a.push.apply(a,s);var i=e.populateOperationalLayers(t.referenceLayers,r.baseMapLayers.filter(function(e){return e.isReference}),n);a.push.apply(a,i)}return y.eachAlways(a)}).then(function(){})},u.prototype._loadFromItem=function(e){var r=this;return e.load().then(function(e){return e.fetchData()}).then(function(e){return r.resourceInfo=e.baseMap,r.read(r.resourceInfo),r._loadFromJSON(r.resourceInfo)})},u.fromJSON=function(e){return e?new u({resourceInfo:e}):null},u.fromId=function(e){var r=n[e];return r?u.fromJSON(r):null},o([a.shared("esri.Basemap")],u.prototype,"declaredClass",void 0),o([a.shared({reader:{exclude:["baseMapLayers"]}})],u.prototype,"classMetadata",void 0),o([a.property({setter:i.referenceSetter})],u.prototype,"baseLayers",void 0),o([a.property()],u.prototype,"id",void 0),o([a.property({type:d})],u.prototype,"portalItem",void 0),o([a.property({setter:i.referenceSetter})],u.prototype,"referenceLayers",void 0),o([a.property()],u.prototype,"resourceInfo",void 0),o([a.property({value:null})],u.prototype,"thumbnailUrl",void 0),o([a.property({value:""})],u.prototype,"title",void 0),u=o([a.subclass([l,c])],u)}(h());return I});