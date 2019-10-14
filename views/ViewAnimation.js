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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Error","../core/Promise","../core/promiseUtils","../core/promiseUtils","../core/scheduling","../core/accessorSupport/decorators"],function(t,e,r,i,s,o,n,p,d,a){var c=function(t){function e(e){var r=t.call(this)||this;return r.state="running",r.target=null,r}return r(e,t),e.prototype.initialize=function(){var t=this;this.addResolvingPromise(n.create(function(e,r){t._dfd={resolve:e,reject:r}}))},Object.defineProperty(e.prototype,"done",{get:function(){return"finished"===this.state||"stopped"===this.state},enumerable:!0,configurable:!0}),e.prototype.stop=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","stopped"),d.schedule(this._dfd.reject.bind(this._dfd,new s("ViewAnimation stopped"))))},e.prototype.finish=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","finished"),d.schedule(this._dfd.resolve))},e.prototype.update=function(t,e){e||(e=p.isThenable(t)?"waiting-for-target":"running"),this._set("target",t),this._set("state",e)},i([a.property({readOnly:!0,dependsOn:["state"]})],e.prototype,"done",null),i([a.property({readOnly:!0,type:String})],e.prototype,"state",void 0),i([a.property()],e.prototype,"target",void 0),e=i([a.subclass("esri.views.ViewAnimation")],e)}(a.declared(o.EsriPromise));return function(t){t.State={RUNNING:"running",STOPPED:"stopped",FINISHED:"finished",WAITING_FOR_TARGET:"waiting-for-target"}}(c||(c={})),c});