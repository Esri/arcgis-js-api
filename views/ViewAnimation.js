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

define(["require","exports","tslib","../core/Error","../core/Promise","../core/promiseUtils","../core/promiseUtils","../core/accessorSupport/decorators"],(function(t,e,i,r,o,s,n,p){var a=function(t){function e(e){var i=t.call(this,e)||this;return i.state="running",i.target=null,i}return i.__extends(e,t),e.prototype.initialize=function(){var t=this;this.addResolvingPromise(s.create((function(e,i){return t._dfd={resolve:e,reject:i}})))},Object.defineProperty(e.prototype,"done",{get:function(){return"finished"===this.state||"stopped"===this.state},enumerable:!0,configurable:!0}),e.prototype.stop=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","stopped"),this._dfd.reject(new r("ViewAnimation stopped")))},e.prototype.finish=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","finished"),this._dfd.resolve())},e.prototype.update=function(t,e){e||(e=n.isPromiseLike(t)?"waiting-for-target":"running"),this._set("target",t),this._set("state",e)},i.__decorate([p.property({readOnly:!0,dependsOn:["state"]})],e.prototype,"done",null),i.__decorate([p.property({readOnly:!0,type:String})],e.prototype,"state",void 0),i.__decorate([p.property()],e.prototype,"target",void 0),e=i.__decorate([p.subclass("esri.views.ViewAnimation")],e)}(o.EsriPromise);return function(t){t.State={RUNNING:"running",STOPPED:"stopped",FINISHED:"finished",WAITING_FOR_TARGET:"waiting-for-target"}}(a||(a={})),a}));