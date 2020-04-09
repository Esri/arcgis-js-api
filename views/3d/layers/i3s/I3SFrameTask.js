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

define(["require","exports","../../../../core/arrayUtils","../../../support/Scheduler"],(function(t,e,n,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t){var e=this;this.referenceCount=0,this.callbacks=[],this.runIndex=0,this.handle=t.registerTask(r.Task.I3S_CONTROLLER,(function(t){return e.update(t)}),(function(){return e.needsUpdate()}))}return t.prototype.destroy=function(){this.handle&&(this.handle.remove(),this.handle=null)},t.prototype.needsUpdate=function(){for(var t=0,e=this.callbacks;t<e.length;t++){if(e[t].needsUpdate())return!0}return!1},t.prototype.update=function(t){this.sort();for(var e=this.callbacks,n={numIndexLoading:0,numNodesLoading:0},r=0;r<e.length&&!t.done;++r)e[r].priority=e[r].update(t,n),this.runIndex=r},t.prototype.sort=function(){for(var t=this.callbacks,e=t.length,n=this.runIndex;n>0;n--){for(var r=t[n-1],o=n;o<t.length&&r.priority<=t[o].priority&&(o!==e||r.priority<t[o].priority);)t[o-1]=t[o],o++;t[o-1]=r,e=o-1}this.runIndex=0},t.prototype.add=function(t){this.sort(),t.priority=1/0,this.callbacks.unshift(t)},t.prototype.remove=function(t){n.removeUnordered(this.callbacks,t),this.runIndex=this.callbacks.length,this.sort()},t}(),i=new Map;e.addTask=function(t,e){var n=i.get(t);return null==n&&(n=new o(t),i.set(t,n)),n.add(e),{remove:function(){null!=n&&(n.remove(e),n.callbacks.length>0?n=null:(i.delete(t),n.destroy(),n=null))}}}}));