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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports"],(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this._largestRange=null,this._parent=e,this._updateLargestRange()}return Object.defineProperty(e.prototype,"largestRange",{get:function(){return this._largestRange},enumerable:!0,configurable:!0}),e.prototype.rangeCreated=function(e){(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)},e.prototype.rangeResized=function(e,t,n){e===this._largestRange?e.count<n&&this._updateLargestRange():(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)},e.prototype.findBestRange=function(e){for(var t=this._parent._freeHead,n=null;null!==t;)t.count>=e&&(!n||t.count-e<n.count-e)&&(n=t),t=t.next;return n},e.prototype.findAdjacentRanges=function(e,t){for(var n=!0,r=!1,o=null,a=this._parent._freeHead;n&&!r;){var u=null!==o?o.from+o.count:0,i=null!==a?a.from:this._parent._size;e>=u&&e+t<=i?(n=!1,r=!0):null!==a?(o=a,a=a.next):n=!1}return[o,a]},e.prototype._updateLargestRange=function(){for(var e=null,t=this._parent._freeHead;null!==t;)(!e||t.count>e.count)&&(e=t),t=t.next;this._largestRange=e},e}(),r=function(){function e(e,t){this._allocated=0,this._size=e,this._freeHead=e>0?{from:0,count:e,prev:null,next:null}:null,this._bookKeeper=t||new n(this),this._freeHead&&this._bookKeeper.rangeCreated(this._freeHead)}return e.prototype.allocate=function(t){var n=this._bookKeeper.findBestRange(t);if(null===n)return-1;var r=n.from,o=n.count;if(n.from+=t,n.count-=t,this._bookKeeper.rangeResized(n,r,o),this._allocated+=t,0===n.count){var a=null!==n.prev?this._freeHead:n.next;e._removeRange(n),this._freeHead=a}return r},e.prototype.free=function(t,n){var r=this._bookKeeper.findAdjacentRanges(t,n),o=r[0],a=r[1],u={from:t,count:n,prev:o,next:a};if(null!==o&&(o.next=u),null!==a&&(a.prev=u),this._bookKeeper.rangeCreated(u),this._allocated-=n,null!==a&&u.from+u.count===a.from){var i=u.from,l=u.count;e._fuse(u,a),e._removeRange(a),this._bookKeeper.rangeResized(u,i,l),this._bookKeeper.rangeResized(a,void 0,0)}if(null!==o&&o.from+o.count===u.from){i=o.from,l=o.count;e._fuse(o,u),e._removeRange(u),this._bookKeeper.rangeResized(o,i,l),this._bookKeeper.rangeResized(u,void 0,0)}this._freeHead=null!==u.prev?this._freeHead:u},Object.defineProperty(e.prototype,"fragmentation",{get:function(){var e=this._size-this._allocated;return 0===e?0:1-this._bookKeeper.largestRange.count/e},enumerable:!0,configurable:!0}),e._removeRange=function(e){null!==e.prev?null!==e.next?(e.prev.next=e.next,e.next.prev=e.prev):e.prev.next=null:null!==e.next&&(e.next.prev=null)},e._fuse=function(e,t){e.count+=t.count,e.next=t.next,t.from+=t.count,t.count=0,null!==t.next&&(t.next.prev=e)},e}();t.FreeList=r}));