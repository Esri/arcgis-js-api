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

define(["dojo/_base/lang","dojo/Deferred","dojo/when","../core/Accessoire","../core/Error","../core/Collection","../core/watchUtils"],function(e,r,t,i,n,s,a){var o=i.createSubclass({declaredClass:"esri.views.LayerViewFactory",classMetadata:{properties:{creationRequests:{type:s},paused:{},working:{dependsOn:["paused","creationRequests.length"],readOnly:!0}}},getDefaults:function(){return e.mixin(this.inherited(arguments),{creationRequests:[]})},initialize:function(){a.whenFalse(this,"paused",function(){var e=this.creationRequests.toArray();e.forEach(this._processRequest,this)}.bind(this))},destroy:function(){this.creationRequests.drain(function(e){e.deferred.cancel()})},creationRequests:null,paused:!0,view:null,_workingGetter:function(){return this.creationRequests.length>0},create:function(e,t){var i=this.getLayerViewPromise(t);if(i)return i;var s=this.creationRequests,a=new r(function(){var e=new n("cancelled:layerview-create","layerview creation cancelled",{layer:t});return s.remove(o),o.creationPromise&&o.creationPromise.cancel(e),e}),o={deferred:a,view:e,layer:t,started:!1};return s.push(o),this.paused||this._processRequest(o),o.deferred.promise},dispose:function(e){var r=e.layer;r.destroyLayerView(e)},getLayerViewPromise:function(e){var r=this.creationRequests&&this.creationRequests.find(function(r){return r.layer===e});return r&&r.deferred.promise},_processRequest:function(e){if(!e.started){e.started=!0;var r=e.deferred,i=e.layer,s=e.view;i.load().then(function(t){return r.isCanceled()?void 0:(e.creationPromise=t.createLayerView(s),e.creationPromise)}).then(function(i){return r.isCanceled()?i:(e.creationPromise=t(i,function(e){return e.layerView?e.layerView:i}),e.creationPromise)}).otherwise(function(e){r.isCanceled()||r.reject(new n("layerview:create-error","layerview creation failed",{layer:i,error:e}))}).then(function(t){return this.creationRequests&&this.creationRequests.remove(e),r.isFulfilled()?t&&this.dispose(t):r.resolve(t),t}.bind(this))}}});return o});