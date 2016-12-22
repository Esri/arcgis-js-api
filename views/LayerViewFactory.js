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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/Deferred","dojo/when","../core/Accessor","../core/Collection","../core/Error","../core/watchUtils"],function(e,r,t,o,i,n,s,a,c,u,p){var d=function(e){function r(){e.apply(this,arguments),this.creationRequests=new c,this.paused=!0}return t(r,e),r.prototype.initialize=function(){var e=this;p.whenFalse(this,"paused",function(){var r=e.creationRequests.toArray();r.forEach(e._processRequest,e)},!0)},r.prototype.destroy=function(){this.creationRequests.drain(function(e){return e.deferred.cancel(void 0)})},Object.defineProperty(r.prototype,"working",{get:function(){return this.creationRequests.length>0},enumerable:!0,configurable:!0}),r.prototype.create=function(e,r){var t=this.getLayerViewPromise(r);if(t)return t;var o=this.creationRequests,i=new n(function(){var e=new u("cancelled:layerview-create","layerview creation cancelled",{layer:r});return o.remove(s),s.creationPromise&&s.creationPromise.cancel(e),e}),s={deferred:i,view:e,layer:r,started:!1,creationPromise:null};return o.push(s),this.paused||this._processRequest(s),s.deferred.promise},r.prototype.dispose=function(e){var r=e.layer;r.destroyLayerView(e)},r.prototype.getLayerViewPromise=function(e){var r=this.creationRequests&&this.creationRequests.find(function(r){return r.layer===e});return r&&r.deferred.promise},r.prototype._processRequest=function(e){var r=this;if(!e.started){e.started=!0;var t=e.deferred,o=e.layer,i=e.view;o.load().then(function(r){return t.isCanceled()?void 0:(e.creationPromise=r.createLayerView(i),e.creationPromise)}).then(function(r){return t.isCanceled()?r:e.creationPromise=s(r)}).otherwise(function(e){t.isCanceled()||t.reject(new u("layerview:create-error","layerview creation failed",{layer:o,error:e}))}).then(function(o){return r.creationRequests&&r.creationRequests.remove(e),t.isFulfilled()?o&&r.dispose(o):t.resolve(o),o})}},o([i.property()],r.prototype,"creationRequests",void 0),o([i.property()],r.prototype,"paused",void 0),o([i.property()],r.prototype,"view",void 0),o([i.property({dependsOn:["paused","creationRequests.length"],readOnly:!0})],r.prototype,"working",null),r=o([i.subclass("esri.views.LayerViewFactory")],r)}(i.declared(a));return d});