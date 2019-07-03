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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/promiseUtils"],function(n,t,e){return function(){function n(n,t){this._lastId=-1,this._progress=t,this._parent=n}return n.prototype.reset=function(){this._lastId=-1},n.prototype.nextBatch=function(n){var t=this;if(null!==this._parent._mainSetInUse)return this._parent._mainSetInUse.then(function(e){return t.nextBatch(n)},function(e){return t.nextBatch(n)});var r={returnpromise:null,hasset:!1},s=[];return r.returnpromise=e.create(function(e,a){t._parent._getSet(t._progress).then(function(_){var i=_._known.length-1;if("GETPAGES"===_._known[_._known.length-1]&&(i-=1),t._lastId+n<i&&_._known.length>0&&"GETPAGES"===_._known[_._known.length-1])return void t._parent._expandPagedSet(_,t._parent._maxQueryRate(),0,0,t._progress).then(function(e){return r.hasset=!0,t._parent._mainSetInUse=null,t.nextBatch(n)},function(n){r.hasset=!0,t._parent._mainSetInUse=null,a(n)});if(i>=t._lastId+n||0===_._candidates.length){for(var o=0;o<n;o++){var u=o+t._lastId+1;if(u>=_._known.length)break;s[o]=_._known[u]}return t._lastId+=s.length,0===s.length&&(r.hasset=!0,t._parent._mainSetInUse=null,e([])),void t._parent._getFeatureBatch(s,t._progress).then(function(n){r.hasset=!0,t._parent._mainSetInUse=null,e(n)},function(n){r.hasset=!0,t._parent._mainSetInUse=null,a(n)})}t._parent._refineSetBlock(_,t._parent._maxProcessingRate(),t._progress).then(function(){r.hasset=!0,t._parent._mainSetInUse=null,t.nextBatch(n).then(e,a)},function(n){r.hasset=!0,t._parent._mainSetInUse=null,a(n)})},function(n){r.hasset=!0,t._parent._mainSetInUse=null,a(n)})}),!1===r.hasset&&(this._parent._mainSetInUse=r.returnpromise,r.hasset=!0),r.returnpromise},n.prototype.next=function(){var n=this;if(null!==this._parent._mainSetInUse)return this._parent._mainSetInUse.then(function(t){return n.next()},function(t){return n.next()});var t={returnpromise:null,hasset:!1};return t.returnpromise=e.create(function(e,r){n._parent._getSet(n._progress).then(function(s){n._lastId<s._known.length-1?"GETPAGES"===s._known[n._lastId+1]?n._parent._expandPagedSet(s,n._parent._maxQueryRate(),0,0,n._progress).then(function(e){return t.hasset=!0,n._parent._mainSetInUse=null,n.next()}).then(e,r):(n._lastId+=1,n._parent._getFeature(s,s._known[n._lastId],n._progress).then(function(r){t.hasset=!0,n._parent._mainSetInUse=null,e(r)},function(e){t.hasset=!0,n._parent._mainSetInUse=null,r(e)})):s._candidates.length>0?n._parent._refineSetBlock(s,n._parent._maxProcessingRate(),n._progress).then(function(){t.hasset=!0,n._parent._mainSetInUse=null,n.next().then(e,r)},function(e){t.hasset=!0,n._parent._mainSetInUse=null,r(e)}):(t.hasset=!0,n._parent._mainSetInUse=null,e(null))},function(e){t.hasset=!0,n._parent._mainSetInUse=null,r(e)})}),!1===t.hasset&&(this._parent._mainSetInUse=t.returnpromise,t.hasset=!0),t.returnpromise},n.prototype.count=function(){var n=this;return-1!==this._parent._totalCount?e.resolve(this._parent._totalCount):this._parent._getSet(this._progress).then(function(t){return n._refineAllSets(t)}).then(function(t){return n._parent._totalCount=t._known.length,e.resolve(n._parent._totalCount)})},n.prototype._refineAllSets=function(n){var t=this;return n._known.length>0&&"GETPAGES"===n._known[n._known.length-1]?this._parent._expandPagedSet(n,this._parent._maxQueryRate(),0,1,this._progress).then(function(e){return t._refineAllSets(n)}).then(function(n){return e.resolve(n)}):n._candidates.length>0?"GETPAGES"===n._known[n._candidates.length-1]?this._parent._expandPagedSet(n,this._parent._maxQueryRate(),0,2,this._progress).then(function(e){return t._refineAllSets(n)}).then(function(n){return e.resolve(n)}):this._parent._refineSetBlock(n,this._parent._maxProcessingRate(),this._progress).then(function(n){return n._candidates.length>0?t._refineAllSets(n):e.resolve(n)}):e.resolve(n)},n}()});