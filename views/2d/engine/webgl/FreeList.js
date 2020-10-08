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

define(["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FreeList=void 0;var n=function(){function e(e){this._largestRange=null,this._parent=e,this._updateLargestRange()}return Object.defineProperty(e.prototype,"largestRange",{get:function(){return this._largestRange},enumerable:!1,configurable:!0}),e.prototype.rangeCreated=function(e){(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)},e.prototype.rangeResized=function(e,t){e===this._largestRange?e.count<t&&this._updateLargestRange():(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)},e.prototype.findBestRange=function(e){for(var t=this._parent._freeHead,n=null;null!==t;)t.count>=e&&(!n||t.count-e<n.count-e)&&(n=t),t=t.next;return n},e.prototype.findAdjacentRanges=function(e,t){for(var n=!0,r=!1,o=null,a=this._parent._freeHead;n&&!r;){var i=null!==o?o.from+o.count:0,u=null!==a?a.from:this._parent._size;e>=i&&e+t<=u?(n=!1,r=!0):null!==a?(o=a,a=a.next):n=!1}return[o,a]},e.prototype._updateLargestRange=function(){for(var e=null,t=this._parent._freeHead;null!==t;)(!e||t.count>e.count)&&(e=t),t=t.next;this._largestRange=e},e}(),r=function(){function e(e,t){this._allocated=0,this._size=e,this._freeHead=e>0?{from:0,count:e,prev:null,next:null}:null,this._bookKeeper=t||new n(this),this._freeHead&&this._bookKeeper.rangeCreated(this._freeHead)}return e.prototype.allocate=function(t){var n=this._bookKeeper.findBestRange(t);if(null===n)return-1;var r=n.from,o=n.count;if(n.from+=t,n.count-=t,this._bookKeeper.rangeResized(n,r,o),this._allocated+=t,0===n.count){var a=null!==n.prev?this._freeHead:n.next;e._removeRange(n),this._freeHead=a}return r},e.prototype.free=function(t,n){var r=this._bookKeeper.findAdjacentRanges(t,n),o=r[0],a=r[1],i={from:t,count:n,prev:o,next:a};if(null!==o&&(o.next=i),null!==a&&(a.prev=i),this._bookKeeper.rangeCreated(i),this._allocated-=n,null!==a&&i.from+i.count===a.from){var u=i.from,s=i.count;e._fuse(i,a),e._removeRange(a),this._bookKeeper.rangeResized(i,u,s),this._bookKeeper.rangeResized(a,void 0,0)}if(null!==o&&o.from+o.count===i.from){u=o.from,s=o.count;e._fuse(o,i),e._removeRange(i),this._bookKeeper.rangeResized(o,u,s),this._bookKeeper.rangeResized(i,void 0,0)}this._freeHead=null!==i.prev?this._freeHead:i},Object.defineProperty(e.prototype,"fragmentation",{get:function(){var e=this._size-this._allocated;return 0===e?0:1-this._bookKeeper.largestRange.count/e},enumerable:!1,configurable:!0}),e._removeRange=function(e){null!==e.prev?null!==e.next?(e.prev.next=e.next,e.next.prev=e.prev):e.prev.next=null:null!==e.next&&(e.next.prev=null)},e._fuse=function(e,t){e.count+=t.count,e.next=t.next,t.from+=t.count,t.count=0,null!==t.next&&(t.next.prev=e)},e}();t.FreeList=r}));