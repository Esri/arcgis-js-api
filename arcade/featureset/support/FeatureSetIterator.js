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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../support/shared"],function(e,n,t,r){"use strict";return function(){function e(e,n){this._lastId=-1,this._progress=n,this._parent=e}return e.prototype.reset=function(){this._lastId=-1},e.prototype.next=function(){var e=this,n=new t;return null!==this._parent._mainSetInUse?(this._parent._mainSetInUse.then(r.callback(function(t){e.next().then(r.callback(function(e){n.resolve(e)},n),r.errback(n))},n),function(t){e.next().then(r.callback(function(e){n.resolve(e)},n),r.errback(n))}),n.promise):(this._parent._mainSetInUse=n.promise,this._parent._getSet(this._progress).then(function(t){e._lastId<t._known.length-1?"GETPAGES"===t._known[e._lastId+1]?e._parent._expandPagedSet(t,e._parent._maxQueryRate(),0,0,e._progress).then(r.callback(function(t){e._parent._mainSetInUse=null,e.next().then(r.callback(function(e){n.resolve(e)},n),r.errback(n))},n),r.errback(n)):(e._lastId+=1,e._parent._getFeature(t,t._known[e._lastId],e._progress).then(r.callback(function(t){e._parent._mainSetInUse=null,n.resolve(t)},n),function(t){e._parent._mainSetInUse=null,n.reject(t)})):t._candidates.length>0?e._parent._refineSetBlock(t,e._parent._maxProcessingRate(),e._progress).then(r.callback(function(){e._parent._mainSetInUse=null,e.next().then(r.callback(function(e){n.resolve(e)},n),r.errback(n))},n),function(t){e._parent._mainSetInUse=null,n.reject(t)}):(e._parent._mainSetInUse=null,n.resolve(null))},function(t){e._parent._mainSetInUse=null,n.reject(t)}),n.promise)},e.prototype.count=function(){var e=this,n=new t;return-1!==this._parent._totalCount?n.resolve(this._parent._totalCount):this._parent._getSet(this._progress).then(r.callback(function(t){e._refineAllSets(t).then(r.callback(function(t){e._parent._totalCount=t._known.length,n.resolve(e._parent._totalCount)},n),r.errback(n))},n),r.errback(n)),n.promise},e.prototype._refineAllSets=function(e){var n=this,a=new t;return e._known.length>0&&"GETPAGES"===e._known[e._known.length-1]?(this._parent._expandPagedSet(e,this._parent._maxQueryRate(),0,1,this._progress).then(r.callback(function(t){n._refineAllSets(e).then(r.callback(function(e){a.resolve(e)},a),r.errback(a))},a),r.errback(a)),a.promise):(e._candidates.length>0?"GETPAGES"===e._known[e._candidates.length-1]?this._parent._expandPagedSet(e,this._parent._maxQueryRate(),0,2,this._progress).then(r.callback(function(t){n._refineAllSets(e).then(r.callback(function(e){a.resolve(e)},a),r.errback(a))},a),r.errback(a)):this._parent._refineSetBlock(e,this._parent._maxProcessingRate(),this._progress).then(r.callback(function(e){e._candidates.length>0?n._refineAllSets(e).then(r.callback(function(e){a.resolve(e)},a),r.errback(a)):a.resolve(e)},a),r.errback(a)):a.resolve(e),a.promise)},e}()});