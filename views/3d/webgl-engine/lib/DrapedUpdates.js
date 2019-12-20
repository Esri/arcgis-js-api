// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/PooledArray"],function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e}(),d=function(){function e(e,t){this.renderer=e,this.handlers=t,this._pendingAddsRemoves=new Map,this._adds=new s,this._removes=new s,this._updates=new s({allocator:function(e){return e||new n},deallocator:function(e){return e.renderGeometry=null,e}})}return e.prototype.dispose=function(){this._adds.prune(),this._removes.prune(),this._updates.prune()},Object.defineProperty(e.prototype,"updating",{get:function(){return this._pendingAddsRemoves.size>0||this._updates.length>0},enumerable:!0,configurable:!0}),e.prototype.commitChanges=function(){var e=this;if(0!==this._pendingAddsRemoves.size||0!==this._updates.length){this._pendingAddsRemoves.forEach(function(t,s){switch(t){case 0:e._adds.push(s);break;case 1:e._removes.push(s)}});for(var t=0;t<this._updates.length;){var s=this._updates.data[t],n=s.renderGeometry;this._pendingAddsRemoves.has(n)?this._updates.removeUnorderedIndex(t):t++}this.renderer.modify(this._adds.data,this._adds.length,this._removes.data,this._removes.length,this._updates.data,this._updates.length),this._adds.clear(),this._removes.clear(),this._pendingAddsRemoves.clear(),this._updates.clear(),this.handlers.emitContentChanged(),this.handlers.emitUpdatingChanged()}},e.prototype.add=function(e){for(var t=0===this._pendingAddsRemoves.size,s=0,n=e;s<n.length;s++){var d=n[s];this._pendingAddsRemoves.set(d,0)}t&&this._pendingAddsRemoves.size>0&&this.handlers.emitUpdatingChanged()},e.prototype.remove=function(e){for(var t=0===this._pendingAddsRemoves.size,s=0,n=e;s<n.length;s++){var d=n[s],i=this._pendingAddsRemoves.get(d);0===i?this._pendingAddsRemoves.set(d,2):2!==i&&this._pendingAddsRemoves.set(d,1)}t&&this._pendingAddsRemoves.size>0&&this.handlers.emitUpdatingChanged()},e.prototype.modify=function(e,t){for(var s=0===this._updates.length,n=0,d=e;n<d.length;n++){var i=d[n],r=this._updates.pushNew();r.renderGeometry=i,r.updateType=t}s&&this._updates.length>0&&this.handlers.emitUpdatingChanged()},e}();t.DrapedUpdates=d});