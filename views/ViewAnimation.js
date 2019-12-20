// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Error","../core/has","../core/Promise","../core/promiseUtils","../core/promiseUtils","../core/scheduling","../core/accessorSupport/decorators"],function(e,t,r,i,s,o,n,p,a,d,c){var u=function(e){function t(t){var r=e.call(this,t)||this;return r.state="running",r.target=null,r}return r(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(p.create(function(t,r){return e._dfd={resolve:t,reject:r}}))},Object.defineProperty(t.prototype,"done",{get:function(){return"finished"===this.state||"stopped"===this.state},enumerable:!0,configurable:!0}),t.prototype.stop=function(){var e=this;"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","stopped"),o("esri-native-promise")?this._dfd.reject(new s("ViewAnimation stopped")):d.schedule(function(){return e._dfd.reject(new s("ViewAnimation stopped"))}))},t.prototype.finish=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","finished"),o("esri-native-promise")?this._dfd.resolve():d.schedule(this._dfd.resolve))},t.prototype.update=function(e,t){t||(t=a.isPromiseLike(e)?"waiting-for-target":"running"),this._set("target",e),this._set("state",t)},i([c.property({readOnly:!0,dependsOn:["state"]})],t.prototype,"done",null),i([c.property({readOnly:!0,type:String})],t.prototype,"state",void 0),i([c.property()],t.prototype,"target",void 0),t=i([c.subclass("esri.views.ViewAnimation")],t)}(c.declared(n.EsriPromise));return function(e){e.State={RUNNING:"running",STOPPED:"stopped",FINISHED:"finished",WAITING_FOR_TARGET:"waiting-for-target"}}(u||(u={})),u});