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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/Deferred","../core/Accessor","../core/Promise","../core/Scheduler","../core/Error","../core/promiseUtils"],function(e,t,r,i,s,o,n,p,d,a,c){var u=function(e){function t(t){var r=e.call(this)||this;return r.state="running",r.target=null,r}return r(t,e),t.prototype.initialize=function(){this._dfd=new o,this.addResolvingPromise(this._dfd.promise)},Object.defineProperty(t.prototype,"done",{get:function(){return"finished"===this.state||"stopped"===this.state},enumerable:!0,configurable:!0}),t.prototype.stop=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","stopped"),d.schedule(this._dfd.reject.bind(this._dfd,new a("ViewAnimation stopped"))))},t.prototype.finish=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","finished"),d.schedule(this._dfd.resolve))},t.prototype.update=function(e,t){t||(t=c.isThenable(e)?"waiting-for-target":"running"),this._set("target",e),this._set("state",t)},i([s.property({readOnly:!0,dependsOn:["state"]})],t.prototype,"done",null),i([s.property({readOnly:!0,type:String})],t.prototype,"state",void 0),i([s.property()],t.prototype,"target",void 0),t=i([s.subclass("esri.views.ViewAnimation")],t)}(s.declared(n,p));return function(e){e.State={RUNNING:"running",STOPPED:"stopped",FINISHED:"finished",WAITING_FOR_TARGET:"waiting-for-target"}}(u||(u={})),u});