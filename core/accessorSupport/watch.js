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

define(["require","exports","../ArrayPool","../lang","../ReentrantObjectPool","../scheduling","./get","./utils","./wire"],(function(e,t,r,n,a,o,u,i,l){Object.defineProperty(t,"__esModule",{value:!0});var c,s=function(){function e(){this.uid=0,this.target=null,this.path=null,this.oldValue=null,this.callback=null,this.removed=!1,this.propertyPath=null}return e.prototype.acquire=function(t,r,n,a){this.target=t,this.path=r,this.oldValue=n,this.callback=a,this.propertyPath=i.pathToStringOrArray(r),this.uid=++e.uid,this.removed=!1},e.prototype.release=function(){this.target=this.path=this.propertyPath=this.callback=this.oldValue=null,this.uid=++e.uid,this.removed=!0},e.pool=new a.ReentrantObjectPool(e),e.uid=0,e}(),d=new r,f=new Set,h=d.acquire();function v(e){f.has(e)?h.splice(h.indexOf(e),1):f.add(e),h.push(e),c||(c=o.schedule(g))}function p(e){if(!e.removed){var t=e.callback,r=e.path,n=e.propertyPath,a=e.oldValue,o=e.target,i=u.valueOf(o,n,!0);_(a,i)&&(e.oldValue=i,t.call(o,i,a,r,o))}}function _(e,t){return!n.equals(e,t)}function g(){for(var e=10;c&&e--;){c=null;var t=h;h=d.acquire(),f.clear();for(var r=d.acquire(),n=0,a=t;n<a.length;n++){var o=(i=a[n]).uid;p(i),o===i.uid&&i.removed&&r.push(i)}for(var u=0;u<h.length;u++){var i;(i=h[u]).removed&&(r.push(i),f.delete(i),h.splice(u,1),u-=1)}for(u=0;u<r.length;u++)s.pool.release(r[u]);d.release(t),d.release(r),m.forEach((function(e){return e()}))}}t.dispatchTarget=function(e){for(var t=d.copy(h),r=0;r<t.length;r++){var n=t[r];n.target===e&&(p(n),f.delete(n),h.splice(h.indexOf(n),1))}},t.removeTarget=function(e){for(var t=0;t<h.length;t++){(r=h[t]).target===e&&(r.removed=!0)}var r},t.dispatch=g;var m=new Set;function y(e,t,r,n){return void 0===n&&(n=!1),!e.__accessor__||e.__accessor__.destroyed?{remove:function(){}}:n?function(e,t,r){var n=i.parse(e,t,r,(function(e,t,r){var a=u.valueOf(e,t,!0),o=!1;return l.wire(e,t,(function(e,t){if(e.__accessor__.destroyed)n.remove();else if(!o){o=!0;var i=u.valueOf(e,t,!0);_(a,i)&&r.call(e,i,a,t,e),a=u.valueOf(e,t,!0),o=!1}}))}));return n}(e,t,r):function(e,t,r){var n=i.parse(e,t,r,(function(e,t,r){var a,o,c=u.valueOf(e,t,!0),d=l.wire(e,t,(function(e,t){e.__accessor__.destroyed||a&&a.uid!==o?n.remove():(a||(a=s.pool.acquire(e,t,c,r),o=a.uid,c=null),v(a))}));return{remove:i.once((function(){d.remove(),a&&(a.uid!==o||a.removed||(a.removed=!0,v(a)),a=null),n=d=c=null}))}}));return n}(e,t,r)}t.afterDispatch=function(e){return m.add(e),{remove:function(){m.delete(e)}}},t.watch=y,t.isValueInUse=function(e){return h.some((function(t){return t.oldValue===e}))},t.default=y}));