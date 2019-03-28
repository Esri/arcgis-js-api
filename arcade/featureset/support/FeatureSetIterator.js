// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","../../polyfill/promiseUtils"],function(t,e,n){"use strict";return function(){function t(t,e){this._lastId=-1,this._progress=e,this._parent=t}return t.prototype.reset=function(){this._lastId=-1},t.prototype.next=function(){var t=this;if(null!==this._parent._mainSetInUse)return this._parent._mainSetInUse.then(function(e){return t.next()},function(e){return t.next()});var e={returnpromise:null,hasset:!1};return e.returnpromise=n.create(function(n,r){!1===e.hasset&&(t._parent._mainSetInUse=e.returnpromise,e.hasset=!0),t._parent._getSet(t._progress).then(function(e){t._lastId<e._known.length-1?"GETPAGES"===e._known[t._lastId+1]?t._parent._expandPagedSet(e,t._parent._maxQueryRate(),0,0,t._progress).then(function(e){return t._parent._mainSetInUse=null,t.next()}).then(n,r):(t._lastId+=1,t._parent._getFeature(e,e._known[t._lastId],t._progress).then(function(e){t._parent._mainSetInUse=null,n(e)},function(e){t._parent._mainSetInUse=null,r(e)})):e._candidates.length>0?t._parent._refineSetBlock(e,t._parent._maxProcessingRate(),t._progress).then(function(){t._parent._mainSetInUse=null,t.next().then(n,r)},function(e){t._parent._mainSetInUse=null,r(e)}):(t._parent._mainSetInUse=null,n(null))},function(e){t._parent._mainSetInUse=null,r(e)})}),!1===e.hasset&&(this._parent._mainSetInUse=e.returnpromise,e.hasset=!0),e.returnpromise},t.prototype.count=function(){var t=this;return-1!==this._parent._totalCount?n.resolve(this._parent._totalCount):this._parent._getSet(this._progress).then(function(e){return t._refineAllSets(e)}).then(function(e){return t._parent._totalCount=e._known.length,n.resolve(t._parent._totalCount)})},t.prototype._refineAllSets=function(t){var e=this;return t._known.length>0&&"GETPAGES"===t._known[t._known.length-1]?this._parent._expandPagedSet(t,this._parent._maxQueryRate(),0,1,this._progress).then(function(n){return e._refineAllSets(t)}).then(function(t){return n.resolve(t)}):t._candidates.length>0?"GETPAGES"===t._known[t._candidates.length-1]?this._parent._expandPagedSet(t,this._parent._maxQueryRate(),0,2,this._progress).then(function(n){return e._refineAllSets(t)}).then(function(t){return n.resolve(t)}):this._parent._refineSetBlock(t,this._parent._maxProcessingRate(),this._progress).then(function(t){return t._candidates.length>0?e._refineAllSets(t):n.resolve(t)}):n.resolve(t)},t}()});