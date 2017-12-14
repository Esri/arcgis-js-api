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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/accessorSupport/decorators","dojo/_base/lang","./core/JSONSupport","./core/Loadable","./core/Collection","./core/collectionUtils","./core/Logger","./core/requireUtils","./core/promiseUtils","./core/Error","./layers/Layer","./layers/support/types"],function(e,r,t,o,n,a,s,i,l,u,p,c,y,d,f,h){var v=l.ofType(f),g=p.getLogger("esri.Ground"),w=function(r){function s(e){var t=r.call(this)||this;return t.layers=new v,t.layers.on("after-add",function(e){var r=e.item;h.isOfType(r,["elevation","base-elevation"])||g.error("Layer '"+r.title+", id:"+r.id+"' of type '"+r.type+"' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.")}),t}return t(s,r),i=s,s.prototype.initialize=function(){this.when()["catch"](function(e){g.error("#load()","Failed to load ground",e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)},s.prototype.normalizeCtorArgs=function(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),e=a.mixin({},e),delete e.resourceInfo),e},Object.defineProperty(s.prototype,"layers",{set:function(e){this._set("layers",u.referenceSetter(e,this._get("layers"),v))},enumerable:!0,configurable:!0}),s.prototype.writeLayers=function(e,r,t,o){var n=[];return e?(o=a.mixin({},o,{layerContainerType:"ground"}),e.forEach(function(e){if(e.write){var r={};e.write(r,o)&&n.push(r)}else o&&o.messages&&o.messages.push(new d("layer:unsupported","Layers ("+e.title+", "+e.id+") of type '"+e.declaredClass+"' cannot be persisted in the ground",{layer:e}))}),void(r.layers=n)):void(r.layers=n)},s.prototype.load=function(){return this.addResolvingPromise(this._loadFromSource()),this.when()},s.prototype.queryElevation=function(r,t){var o=this;return c.when(e,"./layers/support/ElevationQuery").then(function(e){var n=new e.ElevationQuery,a=o.layers.filter(function(e){return"elevation"===e.type}).toArray();return n.queryAll(a,r,t)})},s.prototype.clone=function(){var e={resourceInfo:this.resourceInfo,layers:this.layers.slice()};return this.loaded&&(e.loadStatus="loaded"),new i(e)},s.prototype.read=function(e,r){return this.resourceInfo||this._set("resourceInfo",{data:e,context:r}),this.inherited(arguments)},s.prototype._loadFromSource=function(){var e=this.resourceInfo;return e?this._loadLayersFromJSON(e.data,e.context):y.resolve(null)},s.prototype._loadLayersFromJSON=function(r,t){var o=this,n=t&&t.origin||"web-scene",a=t&&t.portal||null,s=t&&t.url||null;return c.when(e,"./portal/support/layersCreator").then(function(e){var t=[];if(r.layers&&Array.isArray(r.layers)){var i={context:{origin:n,url:s,portal:a,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"};t.push.apply(t,e.populateOperationalLayers(o.layers,r.layers,i))}return y.eachAlways(t)}).then(function(){})},o([n.property({type:v,json:{read:!1}}),n.cast(u.castForReferenceSetter)],s.prototype,"layers",null),o([n.writer("layers")],s.prototype,"writeLayers",null),o([n.property({readOnly:!0})],s.prototype,"resourceInfo",void 0),s=i=o([n.subclass("esri.Ground")],s);var i}(n.declared(s,i));return w});