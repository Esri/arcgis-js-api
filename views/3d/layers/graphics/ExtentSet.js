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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/PooledArray","../../../../geometry/support/aaBoundingRect","../../../support/Scheduler"],(function(t,e,n,r,o){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){this.extents=new n({allocator:function(t){return t||r.create()}}),this.tempExtent=r.create(),this.dirty=!1}return Object.defineProperty(t.prototype,"empty",{get:function(){return 0===this.extents.length},enumerable:!0,configurable:!0}),t.prototype.clear=function(){this.extents.clear()},t.prototype.add=function(t){this.contains(t)||(this.removeContained(t),r.set(this.extents.pushNew(),t),this.dirty=!0)},t.prototype.pop=function(){return this.dirty&&this.mergeTight(),this.extents.pop()},t.prototype.merge=function(t){return this.mergeTight(t),t.hasProgressed},t.prototype.mergeTight=function(t){var e=this;void 0===t&&(t=o.noBudget);for(var n=this.extents,i=new Set,s=0;s!==n.length;){n.sort((function(t,e){return t[0]-e[0]})),s=n.length,i.clear();for(var a=function(o){if(t.done)return{value:void 0};for(var s=n.getItemAt(o),a=o+1;a<n.length;++a){var u=n.getItemAt(a);if(u[0]>=s[2])break;i.add(u)}i.forEach((function(o){if(s!==o)if(o[2]<=s[0])i.delete(o);else{var a=r.area(s),u=r.area(o),c=e.tempExtent;r.expand(s,o,c);var f=a+u;(r.area(c)-f)/f<.05&&(r.set(s,c),i.delete(o),n.remove(o),t.madeProgress())}})),i.add(s)},u=0;u<n.length;++u){var c=a(u);if("object"==typeof c)return c.value}}this.dirty=!1},t.prototype.contains=function(t){return this.extents.some((function(e){return r.contains(e,t)}))},t.prototype.removeContained=function(t){this.extents.filterInPlace((function(e){return!r.contains(t,e)}))},Object.defineProperty(t.prototype,"test",{get:function(){var t=this;return{containsPoint:function(e){return t.extents.some((function(t){return r.containsPoint(t,e)}))}}},enumerable:!0,configurable:!0}),t}();e.ExtentSet=i}));