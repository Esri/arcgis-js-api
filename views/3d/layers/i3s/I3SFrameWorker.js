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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/arrayUtils"],function(r,t,e){function n(r,t){var e=i.get(r);return null==e&&(e=new o(r),i.set(r,e)),e.add(t),{remove:function(){if(null!=e){e.remove(t);if(e.callbacks.length>0)return void(e=null);i.delete(r),e.destroy(),e=null}}}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function r(r){var t=this;this.referenceCount=0,this.callbacks=[],this.runIndex=0,this.handle=r.registerFrameWorker(function(r){return t.work(r)})}return r.prototype.destroy=function(){this.handle&&(this.handle.remove(),this.handle=null)},r.prototype.work=function(r){this.sort();for(var t=this.callbacks,e={numIndexLoading:0,numNodesLoading:0},n=0;n<t.length&&!r.doneWithProgress();++n)t[n].priority=t[n](r,e),this.runIndex=n},r.prototype.sort=function(){for(var r=this.callbacks,t=r.length,e=this.runIndex;e>0;e--){for(var n=r[e-1],o=e;o<r.length&&n.priority<=r[o].priority&&(o!==t||n.priority<r[o].priority);)r[o-1]=r[o],o++;r[o-1]=n,t=o-1}this.runIndex=0},r.prototype.add=function(r){this.sort(),r.priority=1/0,this.callbacks.unshift(r)},r.prototype.remove=function(r){e.removeUnordered(this.callbacks,r),this.runIndex=this.callbacks.length,this.sort()},r}(),i=new Map;t.addFrameWorker=n});