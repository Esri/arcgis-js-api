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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Accessor","../../core/Handles","../../core/maybe","../../core/promiseUtils","../../core/throttle","../../core/watchUtils","../../core/accessorSupport/decorators","./ElevationProfileLine","./support/constants","./support/profileUtils"],(function(e,t,r,o,n,i,s,l,a,u,c,p,d){"use strict";return function(e){function t(t){var o=e.call(this,t)||this;return o._abortController=null,o._handles=new n,o._update=function(){return r.__awaiter(o,void 0,void 0,(function(){var e,t,o,n,l,a,u,c,p,h,_,b,f,w,v;return r.__generator(this,(function(y){switch(y.label){case 0:if(i.isSome(this._abortController)&&this._abortController.abort(),e=s.createAbortController(),t=e.signal,this._abortController=e,o=this.parentViewModel,n=o.path,l=o.queue,a=o.options,u=o.view,i.isNone(n)||i.isNone(l))return this.line.updateFromResult(null),[2];c=d.generateProfile({path:n,provider:this.line.provider,options:a,queryOptions:{view:u,signal:t},queue:l}),y.label=1;case 1:y.trys.push([1,14,,15]),y.label=2;case 2:y.trys.push([2,7,8,13]),p=r.__asyncValues(c),y.label=3;case 3:return[4,p.next()];case 4:if((h=y.sent()).done)return[3,6];_=h.value,s.throwIfAborted(t),this.line.updateFromResult(_),y.label=5;case 5:return[3,3];case 6:return[3,13];case 7:return b=y.sent(),w={error:b},[3,13];case 8:return y.trys.push([8,,11,12]),h&&!h.done&&(v=p.return)?[4,v.call(p)]:[3,10];case 9:y.sent(),y.label=10;case 10:return[3,12];case 11:if(w)throw w.error;return[7];case 12:return[7];case 13:return[3,15];case 14:if(f=y.sent(),!s.isAbortError(f))throw f;return(this._abortController===e&&(this._abortController=null),[3,15]);case 15:return[2]}}))}))},o._throttledUpdate=l.default((function(){return s.ignoreAbortErrors(o._update())}),p.UPDATE_THROTTLE_MILLIS),o}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this._handles.add([a.init(this,["line.provider","parentViewModel.options","parentViewModel.path.paths","parentViewModel.view","parentViewModel.queue","parentViewModel.unit"],(function(){return e._throttledUpdate()}))])},t.prototype.destroy=function(){this._handles.destroy(),i.isSome(this._abortController)&&(this._abortController.abort(),this._abortController=null)},r.__decorate([u.property({type:c,nonNullable:!0})],t.prototype,"line",void 0),r.__decorate([u.property({nonNullable:!0})],t.prototype,"parentViewModel",void 0),t=r.__decorate([u.subclass("esri.widgets.ElevationProfile.ElevationProfileLineUpdater")],t)}(o)}));