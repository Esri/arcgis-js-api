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

define(["require","exports","../ArrayPool","../lang","../ReentrantObjectPool","../scheduling","./get","./utils","./wire"],(function(e,r,t,n,a,o,u,i,l){Object.defineProperty(r,"__esModule",{value:!0});var c,s=function(){function e(r,t,n,a){this.target=r,this.path=t,this.oldValue=n,this.callback=a,this.uid=0,this.removed=!1,this.propertyPath=i.pathToStringOrArray(t),this.uid=++e.uid}return e.prototype.release=function(){this.target=this.path=this.propertyPath=this.callback=this.oldValue=null,this.uid=++e.uid,this.removed=!0},e.pool=new a.ReentrantObjectPool(e,!0),e.uid=0,e}(),d=new t,f=new Set,v=d.acquire();function h(e){f.has(e)?v.splice(v.indexOf(e),1):f.add(e),v.push(e),c||(c=o.schedule(g))}function p(e){if(!e.removed){var r=e.callback,t=e.path,n=e.propertyPath,a=e.oldValue,o=e.target,i=u.valueOf(o,n,!0);_(a,i)&&(e.oldValue=i,r.call(o,i,a,t,o))}}function _(e,r){return!n.equals(e,r)}function g(){for(var e=10;c&&e--;){c=null;var r=v;v=d.acquire(),f.clear();for(var t=d.acquire(),n=0,a=r;n<a.length;n++){var o=(i=a[n]).uid;p(i),o===i.uid&&i.removed&&t.push(i)}for(var u=0;u<v.length;u++){var i;(i=v[u]).removed&&(t.push(i),f.delete(i),v.splice(u,1),u-=1)}for(u=0;u<t.length;u++)s.pool.release(t[u]);d.release(r),d.release(t),m.forEach((function(e){return e()}))}}r.dispatchTarget=function(e){for(var r=d.copy(v),t=0;t<r.length;t++){var n=r[t];n.target===e&&(p(n),f.delete(n),v.splice(v.indexOf(n),1))}},r.removeTarget=function(e){for(var r=0;r<v.length;r++){(t=v[r]).target===e&&(t.removed=!0)}var t},r.dispatch=g;var m=new Set;function y(e,r,t,n){return void 0===n&&(n=!1),!e.__accessor__||e.__accessor__.destroyed?{remove:function(){}}:n?function(e,r,t){var n=i.parse(e,r,t,(function(e,r,t){var a=u.valueOf(e,r,!0),o=!1;return l.wire(e,r,(function(e,r){if(e.__accessor__.destroyed)n.remove();else if(!o){o=!0;var i=u.valueOf(e,r,!0);_(a,i)&&t.call(e,i,a,r,e),a=u.valueOf(e,r,!0),o=!1}}))}));return n}(e,r,t):function(e,r,t){var n=i.parse(e,r,t,(function(e,r,t){var a,o,c=u.valueOf(e,r,!0),d=l.wire(e,r,(function(e,r){e.__accessor__.destroyed||a&&a.uid!==o?n.remove():(a||(a=s.pool.acquire(e,r,c,t),o=a.uid,c=null),h(a))}));return{remove:i.once((function(){d.remove(),a&&(a.uid!==o||a.removed||(a.removed=!0,h(a)),a=null),n=d=c=null}))}}));return n}(e,r,t)}r.afterDispatch=function(e){return m.add(e),{remove:function(){m.delete(e)}}},r.watch=y,r.isValueInUse=function(e){return v.some((function(r){return r.oldValue===e}))},r.default=y}));