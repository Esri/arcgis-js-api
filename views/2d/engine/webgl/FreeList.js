// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports"],function(e,r){function t(e){return new i(e)}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e){this._parent=e}return e.prototype.rangeCreated=function(e){},e.prototype.rangeResized=function(e,r,t){},e.prototype.findBestRange=function(e){for(var r=this._parent._freeHead;null!==r&&e>r.count;)r=r.next;return r},e.prototype.findAdjacentRanges=function(e,r){for(var t=!0,n=!1,o=null,i=this._parent._freeHead;t&&!n;){var u=null!==o?o.from+o.count:0,s=null!==i?i.from:this._parent._size;e>=u&&s>=e+r?(t=!1,n=!0):null!==i?(o=i,i=i.next):t=!1}return[o,i]},e}(),o=function(){function e(){this._rangesSortedByFrom=[],this._rangesSortedByCount=[]}return e.prototype.rangeCreated=function(e){this._rangesSortedByFrom.push(e),this._rangesSortedByFrom.sort(function(e,r){return e.from-r.from}),this._rangesSortedByCount.push(e),this._rangesSortedByCount.sort(function(e,r){return e.count-r.count})},e.prototype.rangeResized=function(e,r,t){0===e.count?(this._rangesSortedByFrom.splice(this._rangesSortedByFrom.indexOf(e),1),this._rangesSortedByCount.splice(this._rangesSortedByCount.indexOf(e),1)):this._rangesSortedByCount.sort(function(e,r){return e.count-r.count})},e.prototype.findBestRange=function(e){if(0===this._rangesSortedByCount.length)return null;for(var r=0,t=this._rangesSortedByCount.length-1,n=void 0;t>=r;){var o=Math.floor((r+t)/2),i=this._rangesSortedByCount[o],u=i.count;if(u===e){n=o;break}e>u?r=o+1:u>e&&(t=o-1,n=o)}if(void 0===n)return null;var s=this._rangesSortedByCount[n];return s},e.prototype.findAdjacentRanges=function(e,r){if(0===this._rangesSortedByFrom.length)return[null,null];if(e+r<=this._rangesSortedByFrom[0].from)return[null,this._rangesSortedByFrom[0]];if(e>=this._rangesSortedByFrom[this._rangesSortedByFrom.length-1].from+this._rangesSortedByFrom[this._rangesSortedByFrom.length-1].count)return[this._rangesSortedByFrom[this._rangesSortedByFrom.length-1],null];for(var t=0;t<this._rangesSortedByFrom.length-1;++t){var n=this._rangesSortedByFrom[t],o=this._rangesSortedByFrom[t+1];if(e>=n.from+n.count&&e+r<=o.from)return[n,o]}throw new Error("Could not find adjacent ranges.")},e}();r.SortingBookKeeper=o;var i=function(){function e(e,r){this._size=e,this._bookKeeper=r||new n(this),e>0?(this._freeHead={from:0,count:e,prev:null,next:null},this._bookKeeper.rangeCreated(this._freeHead)):this._freeHead=null}return e.prototype.allocate=function(r){var t=this._bookKeeper.findBestRange(r);if(null===t)return-1;var n=t.from,o=t.count;if(t.from+=r,t.count-=r,this._bookKeeper.rangeResized(t,n,o),0===t.count){var i=null!==t.prev?this._freeHead:t.next;e._removeRange(t),this._freeHead=i}return n},e.prototype.free=function(r,t){var n=this._bookKeeper.findAdjacentRanges(r,t),o=n[0],i=n[1],u={from:r,count:t,prev:o,next:i};if(null!==o&&(o.next=u),null!==i&&(i.prev=u),this._bookKeeper.rangeCreated(u),null!==i&&u.from+u.count===i.from){var s=u.from,a=u.count;e._fuse(u,i),e._removeRange(i),this._bookKeeper.rangeResized(u,s,a),this._bookKeeper.rangeResized(i,void 0,0)}if(null!==o&&o.from+o.count===u.from){var s=o.from,a=o.count;e._fuse(o,u),e._removeRange(u),this._bookKeeper.rangeResized(o,s,a),this._bookKeeper.rangeResized(u,void 0,0)}this._freeHead=null!==u.prev?this._freeHead:u},e._removeRange=function(e){null!==e.prev?null!==e.next?(e.prev.next=e.next,e.next.prev=e.prev):e.prev.next=null:null!==e.next&&(e.next.prev=null)},e._fuse=function(e,r){e.count+=r.count,e.next=r.next,r.from+=r.count,r.count=0,null!==r.next&&(r.next.prev=e)},e}();r.DefaultFreeList=i,r.create=t});