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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/promiseUtils"],(function(n,e,t){return function(){function n(n,e){this._lastId=-1,this._progress=e,this._parent=n}return n.prototype.reset=function(){this._lastId=-1},n.prototype.nextBatch=function(n){var e=this;if(null!==this._parent._mainSetInUse)return this._parent._mainSetInUse.then((function(t){return e.nextBatch(n)}),(function(t){return e.nextBatch(n)}));var r={returnpromise:null,hasset:!1},s=[];return r.returnpromise=t.create((function(t,a){e._parent._getSet(e._progress).then((function(_){var i=_._known.length-1;if("GETPAGES"===_._known[_._known.length-1]&&(i-=1),e._lastId+n<i&&_._known.length>0&&"GETPAGES"===_._known[_._known.length-1])e._parent._expandPagedSet(_,e._parent._maxQueryRate(),0,0,e._progress).then((function(t){return r.hasset=!0,e._parent._mainSetInUse=null,e.nextBatch(n)}),(function(n){r.hasset=!0,e._parent._mainSetInUse=null,a(n)}));else{if(i>=e._lastId+n||0===_._candidates.length){for(var o=0;o<n;o++){var u=o+e._lastId+1;if(u>=_._known.length)break;s[o]=_._known[u]}return e._lastId+=s.length,0===s.length&&(r.hasset=!0,e._parent._mainSetInUse=null,t([])),void e._parent._getFeatureBatch(s,e._progress).then((function(n){r.hasset=!0,e._parent._mainSetInUse=null,t(n)}),(function(n){r.hasset=!0,e._parent._mainSetInUse=null,a(n)}))}e._parent._refineSetBlock(_,e._parent._maxProcessingRate(),e._progress).then((function(){r.hasset=!0,e._parent._mainSetInUse=null,e.nextBatch(n).then(t,a)}),(function(n){r.hasset=!0,e._parent._mainSetInUse=null,a(n)}))}}),(function(n){r.hasset=!0,e._parent._mainSetInUse=null,a(n)}))})),!1===r.hasset&&(this._parent._mainSetInUse=r.returnpromise,r.hasset=!0),r.returnpromise},n.prototype.next=function(){var n=this;if(null!==this._parent._mainSetInUse)return this._parent._mainSetInUse.then((function(e){return n.next()}),(function(e){return n.next()}));var e={returnpromise:null,hasset:!1};return e.returnpromise=t.create((function(t,r){n._parent._getSet(n._progress).then((function(s){n._lastId<s._known.length-1?"GETPAGES"===s._known[n._lastId+1]?n._parent._expandPagedSet(s,n._parent._maxQueryRate(),0,0,n._progress).then((function(t){return e.hasset=!0,n._parent._mainSetInUse=null,n.next()})).then(t,r):(n._lastId+=1,n._parent._getFeature(s,s._known[n._lastId],n._progress).then((function(r){e.hasset=!0,n._parent._mainSetInUse=null,t(r)}),(function(t){e.hasset=!0,n._parent._mainSetInUse=null,r(t)}))):s._candidates.length>0?n._parent._refineSetBlock(s,n._parent._maxProcessingRate(),n._progress).then((function(){e.hasset=!0,n._parent._mainSetInUse=null,n.next().then(t,r)}),(function(t){e.hasset=!0,n._parent._mainSetInUse=null,r(t)})):(e.hasset=!0,n._parent._mainSetInUse=null,t(null))}),(function(t){e.hasset=!0,n._parent._mainSetInUse=null,r(t)}))})),!1===e.hasset&&(this._parent._mainSetInUse=e.returnpromise,e.hasset=!0),e.returnpromise},n.prototype.count=function(){var n=this;return-1!==this._parent._totalCount?t.resolve(this._parent._totalCount):this._parent._getSet(this._progress).then((function(e){return n._refineAllSets(e)})).then((function(e){return n._parent._totalCount=e._known.length,t.resolve(n._parent._totalCount)}))},n.prototype._refineAllSets=function(n){var e=this;return n._known.length>0&&"GETPAGES"===n._known[n._known.length-1]?this._parent._expandPagedSet(n,this._parent._maxQueryRate(),0,1,this._progress).then((function(t){return e._refineAllSets(n)})).then((function(n){return t.resolve(n)})):n._candidates.length>0?"GETPAGES"===n._known[n._candidates.length-1]?this._parent._expandPagedSet(n,this._parent._maxQueryRate(),0,2,this._progress).then((function(t){return e._refineAllSets(n)})).then((function(n){return t.resolve(n)})):this._parent._refineSetBlock(n,this._parent._maxProcessingRate(),this._progress).then((function(n){return n._candidates.length>0?e._refineAllSets(n):t.resolve(n)})):t.resolve(n)},n}()}));