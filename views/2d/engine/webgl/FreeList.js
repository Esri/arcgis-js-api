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

define(["require","exports"],function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this._largestRange=null,this._parent=e,this._updateLargestRange()}return Object.defineProperty(e.prototype,"largestRange",{get:function(){return this._largestRange},enumerable:!0,configurable:!0}),e.prototype.rangeCreated=function(e){(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)},e.prototype.rangeResized=function(e,t,n){e===this._largestRange?e.count<n&&this._updateLargestRange():(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)},e.prototype.findBestRange=function(e){for(var t=this._parent._freeHead,n=null;null!==t;)t.count>=e&&(!n||t.count-e<n.count-e)&&(n=t),t=t.next;return n},e.prototype.findAdjacentRanges=function(e,t){for(var n=!0,r=!1,o=null,a=this._parent._freeHead;n&&!r;){var u=null!==o?o.from+o.count:0,i=null!==a?a.from:this._parent._size;u<=e&&e+t<=i?r=!(n=!1):null!==a?a=(o=a).next:n=!1}return[o,a]},e.prototype._updateLargestRange=function(){for(var e=null,t=this._parent._freeHead;null!==t;)(!e||t.count>e.count)&&(e=t),t=t.next;this._largestRange=e},e}(),r=function(){function l(e,t){this._allocated=0,this._size=e,this._freeHead=0<e?{from:0,count:e,prev:null,next:null}:null,this._bookKeeper=t||new n(this),this._freeHead&&this._bookKeeper.rangeCreated(this._freeHead)}return l.prototype.allocate=function(e){var t=this._bookKeeper.findBestRange(e);if(null===t)return-1;var n=t.from,r=t.count;if(t.from+=e,t.count-=e,this._bookKeeper.rangeResized(t,n,r),this._allocated+=e,0===t.count){var o=null!==t.prev?this._freeHead:t.next;l._removeRange(t),this._freeHead=o}return n},l.prototype.free=function(e,t){var n=this._bookKeeper.findAdjacentRanges(e,t),r=n[0],o=n[1],a={from:e,count:t,prev:r,next:o};if(null!==r&&(r.next=a),null!==o&&(o.prev=a),this._bookKeeper.rangeCreated(a),this._allocated-=t,null!==o&&a.from+a.count===o.from){var u=a.from,i=a.count;l._fuse(a,o),l._removeRange(o),this._bookKeeper.rangeResized(a,u,i),this._bookKeeper.rangeResized(o,void 0,0)}if(null!==r&&r.from+r.count===a.from){u=r.from,i=r.count;l._fuse(r,a),l._removeRange(a),this._bookKeeper.rangeResized(r,u,i),this._bookKeeper.rangeResized(a,void 0,0)}this._freeHead=null!==a.prev?this._freeHead:a},Object.defineProperty(l.prototype,"fragmentation",{get:function(){var e=this._size-this._allocated;return 0===e?0:1-this._bookKeeper.largestRange.count/e},enumerable:!0,configurable:!0}),l._removeRange=function(e){null!==e.prev?null!==e.next?(e.prev.next=e.next,e.next.prev=e.prev):e.prev.next=null:null!==e.next&&(e.next.prev=null)},l._fuse=function(e,t){e.count+=t.count,e.next=t.next,t.from+=t.count,t.count=0,null!==t.next&&(t.next.prev=e)},l}();t.FreeList=r});