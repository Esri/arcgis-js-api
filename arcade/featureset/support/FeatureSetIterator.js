// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/promiseUtils"],function(e,t,n){return function(){function e(e,t){this._lastId=-1,this._progress=t,this._parent=e}return e.prototype.reset=function(){this._lastId=-1},e.prototype.next=function(){var e=this;if(null!==this._parent._mainSetInUse)return this._parent._mainSetInUse.then(function(t){return e.next()},function(t){return e.next()});var t={returnpromise:null,hasset:!1};return t.returnpromise=n.create(function(n,r){!1===t.hasset&&(e._parent._mainSetInUse=t.returnpromise,t.hasset=!0),e._parent._getSet(e._progress).then(function(t){e._lastId<t._known.length-1?"GETPAGES"===t._known[e._lastId+1]?e._parent._expandPagedSet(t,e._parent._maxQueryRate(),0,0,e._progress).then(function(t){return e._parent._mainSetInUse=null,e.next()}).then(n,r):(e._lastId+=1,e._parent._getFeature(t,t._known[e._lastId],e._progress).then(function(t){e._parent._mainSetInUse=null,n(t)},function(t){e._parent._mainSetInUse=null,r(t)})):t._candidates.length>0?e._parent._refineSetBlock(t,e._parent._maxProcessingRate(),e._progress).then(function(){e._parent._mainSetInUse=null,e.next().then(n,r)},function(t){e._parent._mainSetInUse=null,r(t)}):(e._parent._mainSetInUse=null,n(null))},function(t){e._parent._mainSetInUse=null,r(t)})}),!1===t.hasset&&(this._parent._mainSetInUse=t.returnpromise,t.hasset=!0),t.returnpromise},e.prototype.count=function(){var e=this;return-1!==this._parent._totalCount?n.resolve(this._parent._totalCount):this._parent._getSet(this._progress).then(function(t){return e._refineAllSets(t)}).then(function(t){return e._parent._totalCount=t._known.length,n.resolve(e._parent._totalCount)})},e.prototype._refineAllSets=function(e){var t=this;return e._known.length>0&&"GETPAGES"===e._known[e._known.length-1]?this._parent._expandPagedSet(e,this._parent._maxQueryRate(),0,1,this._progress).then(function(n){return t._refineAllSets(e)}).then(function(e){return n.resolve(e)}):e._candidates.length>0?"GETPAGES"===e._known[e._candidates.length-1]?this._parent._expandPagedSet(e,this._parent._maxQueryRate(),0,2,this._progress).then(function(n){return t._refineAllSets(e)}).then(function(e){return n.resolve(e)}):this._parent._refineSetBlock(e,this._parent._maxProcessingRate(),this._progress).then(function(e){return e._candidates.length>0?t._refineAllSets(e):n.resolve(e)}):n.resolve(e)},e}()});