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

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","dojo/_base/lang","./core/Collection","./core/collectionUtils","./core/Error","./core/JSONSupport","./core/Loadable","./core/Logger","./core/promiseUtils","./core/accessorSupport/decorators","./layers/Layer","./layers/support/types"],function(e,r,t,o,n,a,i,s,l,u,p,c,y,f,d){var h=a.ofType(f),v=p.getLogger("esri.Ground");return function(r){function a(e){var t=r.call(this)||this;t.layers=new h;var o=function(e){e.parent&&e.parent!==t&&"remove"in e.parent&&e.parent.remove(e),e.parent=t,d.isOfType(e,["elevation","base-elevation"])||v.error("Layer '"+e.title+", id:"+e.id+"' of type '"+e.type+"' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.")},n=function(e){e.parent=null};return t.layers.on("after-add",function(e){return o(e.item)}),t.layers.on("after-remove",function(e){return n(e.item)}),t}return t(a,r),l=a,a.prototype.initialize=function(){this.when().catch(function(e){v.error("#load()","Failed to load ground",e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)},a.prototype.normalizeCtorArgs=function(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),e=n.mixin({},e),delete e.resourceInfo),e},Object.defineProperty(a.prototype,"layers",{set:function(e){this._set("layers",i.referenceSetter(e,this._get("layers"),h))},enumerable:!0,configurable:!0}),a.prototype.writeLayers=function(e,r,t,o){var a=[];if(!e)return void(r.layers=a);o=n.mixin({},o,{layerContainerType:"ground"}),e.forEach(function(e){if(e.write){var r={};e.write(r,o)&&a.push(r)}else o&&o.messages&&o.messages.push(new s("layer:unsupported","Layers ("+e.title+", "+e.id+") of type '"+e.declaredClass+"' cannot be persisted in the ground",{layer:e}))}),r.layers=a},a.prototype.load=function(){return this.addResolvingPromise(this._loadFromSource()),this.when()},a.prototype.queryElevation=function(r,t){var o=this;return c.create(function(r){return e(["./layers/support/ElevationQuery"],r)}).then(function(e){var n=new e.ElevationQuery,a=o.layers.filter(function(e){return"elevation"===e.type}).toArray();return n.queryAll(a,r,t)})},a.prototype.createElevationSampler=function(r,t){var o=this;return c.create(function(r){return e(["./layers/support/ElevationQuery"],r)}).then(function(e){var n=new e.ElevationQuery,a=o.layers.filter(function(e){return"elevation"===e.type}).toArray();return n.createSamplerAll(a,r,t)})},a.prototype.clone=function(){var e={resourceInfo:this.resourceInfo,layers:this.layers.slice()};return this.loaded&&(e.loadStatus="loaded"),new l(e)},a.prototype.read=function(e,r){return this.resourceInfo||this._set("resourceInfo",{data:e,context:r}),this.inherited(arguments)},a.prototype._loadFromSource=function(){var e=this.resourceInfo;return e?this._loadLayersFromJSON(e.data,e.context):c.resolve(null)},a.prototype._loadLayersFromJSON=function(r,t){var o=this,n=t&&t.origin||"web-scene",a=t&&t.portal||null,i=t&&t.url||null;return c.create(function(r){return e(["./portal/support/layersCreator"],r)}).then(function(e){var t=[];if(r.layers&&Array.isArray(r.layers)){var s={context:{origin:n,url:i,portal:a,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"};t.push.apply(t,e.populateOperationalLayers(o.layers,r.layers,s))}return c.eachAlways(t)}).then(function(){})},o([y.property({type:h,json:{read:!1}}),y.cast(i.castForReferenceSetter)],a.prototype,"layers",null),o([y.writer("layers")],a.prototype,"writeLayers",null),o([y.property({readOnly:!0})],a.prototype,"resourceInfo",void 0),a=l=o([y.subclass("esri.Ground")],a);var l}(y.declared(l,u))});