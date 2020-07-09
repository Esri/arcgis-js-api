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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/Accessor","../../../../../core/promiseUtils","../../../../../core/accessorSupport/decorators","@dojo/framework/shim/Promise"],(function(e,t,r,o,n,s){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(t){var r=e.call(this,t)||this;return r._queue=[],r._onGoingRequest=null,r._abortController=n.createAbortController(),r}return r.__extends(t,e),t.prototype.destroy=function(){this.clear()},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.destroyed&&(this._queue.length>0||null!=this._onGoingRequest)},enumerable:!0,configurable:!0}),t.prototype.clear=function(){if(this.destroyed)throw new Error("instance is already destroyed");for(var e=this._queue.pop();e;)e.resolver.reject(n.createAbortError()),e=this._queue.pop();this._queue.length=0,this._abortController.abort(),this._abortController=n.createAbortController()},t.prototype.push=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,o=this;return r.__generator(this,(function(r){if(this.destroyed)throw new Error("instance is already destroyed");return t=n.createResolver(),this._queue.push({event:e,resolver:t}),this.notifyChange("updating"),Promise.resolve().then((function(){o._processNext()})),[2,t.promise]}))}))},t.prototype._processNext=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t,o,n,s,i,u,a,c,d,h,l,p,f,_,g,y,v,b,q,w,E,C=this;return r.__generator(this,(function(r){switch(r.label){case 0:if(this._onGoingRequest)return[2];for(e=[],t=new Set,o=new Set,n=new Set,s=this._queue.shift();s;){for(i=s.event,u=i.addedFeatures,a=i.deletedFeatures,c=i.updatedFeatures,d=s.resolver,e.push(d),h=0,l=u;h<l.length;h++)p=l[h],q=p.objectId,p.error||(t.add(q),o.add(q),n.delete(q));for(f=0,_=c;f<_.length;f++)g=_[f],q=g.objectId,g.error||(o.add(q),n.delete(q));for(y=0,v=a;y<v.length;y++)b=v[y],q=b.objectId,b.error||(t.has(q)?t.delete(q):n.add(q),o.delete(q));s=this._queue.shift()}return o.size||n.size?(w=[],E=[],o.size&&o.forEach((function(e){w.push(e)})),n.size&&n.forEach((function(e){E.push(e)})),this._onGoingRequest=Promise.resolve().then((function(){return C.processEdits(w,E,{signal:C._abortController.signal})})).catch((function(){})),this.notifyChange("updating"),[4,this._onGoingRequest]):(this.notifyChange("updating"),e.forEach((function(e){return e()})),[2]);case 1:return r.sent(),this._onGoingRequest=null,this.notifyChange("updating"),e.forEach((function(e){return e()})),this._queue.length>0&&this._processNext(),[2]}}))}))},r.__decorate([s.property({constructOnly:!0})],t.prototype,"processEdits",void 0),r.__decorate([s.property({readOnly:!0})],t.prototype,"updating",null),t=r.__decorate([s.subclass("esri.views.2d.layers.features.controllers.EditsQueue")],t)}(o);t.EditsQueue=i}));