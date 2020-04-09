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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/generatorHelper","../../../../../core/tsSupport/awaiterHelper","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/Accessor","../../../../../core/promiseUtils","../../../../../core/accessorSupport/decorators","@dojo/framework/shim/Promise"],(function(e,t,r,o,n,s,i,u,a){Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(t){var r=e.call(this,t)||this;return r._queue=[],r._onGoingRequest=null,r._abortController=u.createAbortController(),r}return s(t,e),t.prototype.destroy=function(){this.clear()},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.destroyed&&(this._queue.length>0||null!=this._onGoingRequest)},enumerable:!0,configurable:!0}),t.prototype.clear=function(){if(this.destroyed)throw new Error("instance is already destroyed");for(var e=this._queue.pop();e;)e.resolver.reject(u.createAbortError()),e=this._queue.pop();this._queue.length=0,this._abortController.abort(),this._abortController=u.createAbortController()},t.prototype.push=function(e){return n(this,void 0,void 0,(function(){var t,r=this;return o(this,(function(o){if(this.destroyed)throw new Error("instance is already destroyed");return t=u.createResolver(),this._queue.push({event:e,resolver:t}),this.notifyChange("updating"),Promise.resolve().then((function(){r._processNext()})),[2,t.promise]}))}))},t.prototype._processNext=function(){return n(this,void 0,void 0,(function(){var e,t,r,n,s,i,u,a,c,l,d,h,p,f,g,y,_,v,b,q,E,w,C=this;return o(this,(function(o){switch(o.label){case 0:if(this._onGoingRequest)return[2];for(e=[],t=new Set,r=new Set,n=new Set,s=this._queue.shift();s;){for(i=s.event,u=i.addedFeatures,a=i.deletedFeatures,c=i.updatedFeatures,l=s.resolver,e.push(l),d=0,h=u;d<h.length;d++)p=h[d],q=p.objectId,p.error||(t.add(q),r.add(q),n.delete(q));for(f=0,g=c;f<g.length;f++)y=g[f],q=y.objectId,y.error||(r.add(q),n.delete(q));for(_=0,v=a;_<v.length;_++)b=v[_],q=b.objectId,b.error||(t.has(q)?t.delete(q):n.add(q),r.delete(q));s=this._queue.shift()}return r.size||n.size?(E=[],w=[],r.size&&r.forEach((function(e){E.push(e)})),n.size&&n.forEach((function(e){w.push(e)})),this._onGoingRequest=Promise.resolve().then((function(){return C.processEdits(E,w,{signal:C._abortController.signal})})).catch((function(){})),this.notifyChange("updating"),[4,this._onGoingRequest]):(this.notifyChange("updating"),e.forEach((function(e){return e()})),[2]);case 1:return o.sent(),this._onGoingRequest=null,this.notifyChange("updating"),e.forEach((function(e){return e()})),this._queue.length>0&&this._processNext(),[2]}}))}))},r([a.property({constructOnly:!0})],t.prototype,"processEdits",void 0),r([a.property({readOnly:!0})],t.prototype,"updating",null),t=r([a.subclass("esri.views.2d.layers.features.controllers.EditsQueue")],t)}(a.declared(i));t.EditsQueue=c}));