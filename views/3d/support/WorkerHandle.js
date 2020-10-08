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

define(["require","exports","tslib","../../../core/Logger","../../../core/promiseUtils","../../../core/workers"],(function(e,t,r,i,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WorkerHandle=void 0;var s=i.getLogger("esri.views.3d.support.WorkerHandle"),h=function(){function e(e,t,i,o){var h=this;void 0===o&&(o={}),this._methodName=t,this._promise=n.open(e,r.__assign(r.__assign({},o),{scheduler:i})).then((function(e){void 0===h._thread?(h._thread=e,h._promise=null):e.close()})),this._promise.catch((function(t){return s.error("Failed to initialize "+e+" worker: "+t)}))}return e.prototype.destroy=function(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null},e.prototype.invoke=function(e,t){var r=this;if(void 0===t&&(t=null),this._thread){var i=this.getTransferList(e);return this._thread.invoke(this._methodName,e,{transferList:i,signal:t})}return this._promise?this._promise.then((function(){return o.throwIfAborted(t),r.invoke(e,t)})):o.reject(null)},e.prototype.broadcast=function(e,t){var r=this;return this._thread?o.all(this._thread.broadcast(t,e)).then((function(){})):this._promise?this._promise.then((function(){return r.broadcast(e,t)})):o.reject()},Object.defineProperty(e.prototype,"promise",{get:function(){return this._promise},enumerable:!1,configurable:!0}),e}();t.WorkerHandle=h}));